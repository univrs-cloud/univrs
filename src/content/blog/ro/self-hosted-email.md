---
title: 'E-mail pe propriul server: de la un nod gol la o căsuță care funcționează'
description: Configurarea de la cap la coadă a serverului de e-mail pe un nod virgoOS, cu porturile, înregistrările DNS, DKIM, comenzile cu care administrați căsuțele, configurarea automată a clienților de e-mail și lucrurile la care să fiți atenți.
pubDate: 2026-10-08
image: ../../../assets/blog/mail-paths-ro.png
imageAlt: "Drumul unui e-mail până la un nod virgoOS, în cinci pași. Un alt server de e-mail vă caută domeniul în înregistrările DNS (MX, SPF, DKIM, DMARC, PTR), vă află adresa publică și livrează e-mailul pe TCP 25, direct, niciodată printr-un proxy. Routerul îl redirecționează către nodul din rețeaua dumneavoastră, care îl filtrează de spam și de viruși și îl păstrează într-o căsuță, iar mesajul este citit într-un client de e-mail, de oriunde, prin IMAP 993."
tags:
  - virgoOS
  - e-mail
  - DNS
---

Un nod virgoOS poate găzdui e-mailul firmei: adrese pe propriul domeniu, căsuțe pe propriile discuri, fără licență pentru fiecare căsuță. Dintre toate lucrurile pe care le face un nod, acesta vă cere cel mai mult. Aveți de creat înregistrări DNS, de configurat un router, iar căsuțele se administrează din linia de comandă, nu cu mouse-ul.

Articolul le ia pe toate, în ordine. Exemplele folosesc `example.com` ca domeniu și `203.0.113.10` ca adresă IP publică. Înlocuiți-le cu ale dumneavoastră.

## Înainte de orice: conexiunea la internet

E-mailul este singura aplicație la care conexiunea la internet hotărăște dacă poate funcționa sau nu. Verificați lucrurile de mai jos înainte să instalați ceva.

**O adresă IP publică, numai a dumneavoastră.** Celelalte servere de e-mail trebuie să ajungă direct la al dumneavoastră. În spatele CGNAT, unde furnizorul împarte o singură adresă între mai mulți clienți, nu au cum. [Ghidul porturilor](https://docs.univrs.cloud/setup/ports/), în limba engleză, arată cum aflați ce fel de conexiune aveți.

**Una statică.** Înregistrările DNS de mai jos indică adresa dumneavoastră. Dacă ea se schimbă, e-mailurile nu mai ajung până când le corectați.

**Portul 25 deschis în ambele sensuri.** Mulți furnizori blochează portul 25 la ieșire pe conexiunile rezidențiale, ca să oprească spamul. Serverele de e-mail vorbesc între ele pe acest port și pe niciun altul. Întrebați furnizorul și cereți o conexiune business, dacă de asta este nevoie.

**Reverse DNS.** Adresa IP trebuie să se rezolve înapoi în `mail.example.com`. Această înregistrare, numită PTR, aparține celui care deține adresa, deci o poate seta doar furnizorul. Fără ea, marii furnizori de e-mail resping ce trimiteți sau îl pun în spam.

Dacă furnizorul nu vi le poate da pe toate patru, e-mailul găzduit pe propriul server nu este pentru această conexiune, și e mai bine să aflați acum.

## E-mailul nu poate trece printr-un proxy

Nodul îl puteți administra de oriunde prin fleet, fără niciun port redirecționat. E-mailul nu funcționează așa. Prin fleet trece doar interfața de administrare, deci e-mailul trebuie să ajungă direct la nod, pe adresa dumneavoastră IP publică.

La fel stau lucrurile cu furnizorii de DNS care se oferă să vă treacă înregistrările printr-un proxy, cum face Cloudflare cu norul portocaliu. Un astfel de proxy transportă doar trafic web. O înregistrare `mail` trecută prin proxy duce la proxy, care nu primește e-mail. Lăsați toate înregistrările din acest articol pe „DNS only”.

## Ce instalați

Aplicația MailServer din App center este [docker-mailserver](https://docker-mailserver.github.io/docker-mailserver/latest/), pregătit pentru un nod. Primește și trimite e-mailuri (SMTP), păstrează căsuțele și le pune la dispoziția clienților de e-mail (IMAP), filtrează spamul cu Rspamd, scanează atașamentele cu ClamAV și blochează, cu fail2ban, adresele care tot încearcă parole. Alături rulează un mic resolver DNS propriu și un serviciu care le spune clienților de e-mail cum să se configureze.

Webmail nu există. Oamenii își citesc e-mailul într-un client: Thunderbird, Outlook, Apple Mail sau aplicația de e-mail de pe telefon.

## Redirecționați porturile

În router, redirecționați către nod aceste porturi TCP:

| Port | Cine îl folosește |
| --- | --- |
| 25 | Celelalte servere de e-mail, când vă livrează mesaje |
| 465 | Clienții de e-mail, la trimitere, criptat de la început |
| 587 | Clienții de e-mail, la trimitere, cu STARTTLS |
| 993 | Clienții de e-mail, la citire (IMAP) |
| 4190 | Clienții de e-mail, pentru filtrele de pe server (Sieve) |
| 80 și 443 | Certificatele și paginile care configurează clienții de e-mail |

## Înregistrările DNS de creat mai întâi

Creați-le la furnizorul de DNS înainte de instalare, ca nodul să își poată obține certificatele imediat.

| Tip | Nume | Valoare |
| --- | --- | --- |
| A | `mail` | `203.0.113.10` |
| MX | `@` | `mail.example.com`, prioritate 10 |
| CNAME | `imap` | `mail.example.com` |
| CNAME | `smtp` | `mail.example.com` |
| A | `autoconfig` | `203.0.113.10` |
| A | `autodiscover` | `203.0.113.10` |
| TXT | `@` | `mailconf=https://autoconfig.example.com/mail/config-v1.1.xml` |
| SRV | `_imaps._tcp` | `0 0 993 mail.example.com` |
| SRV | `_submission._tcp` | `0 0 587 mail.example.com` |
| SRV | `_autodiscover._tcp` | `0 0 443 autodiscover.example.com` |

Se împart în trei grupe:

- **Unde ajunge e-mailul.** Înregistrarea `mail` îi dă serverului de e-mail un nume, iar înregistrarea MX spune lumii că mesajele pentru `@example.com` i se livrează lui.
- **Nume pe care clienții de e-mail le ghicesc.** Unii clienți încearcă singuri `imap.example.com` și `smtp.example.com`, așa că amândouă duc la serverul de e-mail. Certificatul este emis doar pentru `mail.example.com`, deci acesta rămâne numele pe care îl scrieți când configurați manual un client.
- **Cum își găsesc clienții de e-mail setările.** Cele două nume cu `auto`, înregistrarea `mailconf` și cele trei înregistrări SRV sunt cele care [configurează clienții de e-mail](#configurarea-clienților-de-e-mail) fără ca cineva să scrie numele vreunui server. Într-o valoare SRV, cele patru părți sunt prioritatea, ponderea, portul și serverul, iar cei mai mulți furnizori de DNS au câte un câmp pentru fiecare.

Nu adăugați o înregistrare AAAA (IPv6) pentru `mail`. Serverul de e-mail este configurat doar pentru IPv4.

## Instalați aplicația

În App center, apăsați **Install** la MailServer. Formularul cere trei lucruri:

- **MX domain**, domeniul în care se termină adresele: `example.com`. Serverul de e-mail va răspunde la `mail.example.com`.
- **Domain**, domeniul nodului. Interfața filtrului de spam se deschide la numele `rspamd` de sub el, după autentificarea pe nod.
- **HTTPS certificate** pentru această interfață.

Certificatul pentru `mail.example.com` vine întotdeauna de la Let's Encrypt, de aceea portul 80 și înregistrarea `mail` trebuie să existe deja.

## Unde se scriu comenzile

De aici încolo, totul se face cu comanda `setup` a serverului de e-mail, care rulează în containerul lui. Nu aveți nevoie de SSH pentru asta.

În **Apps**, deschideți MailServer. În **Services** apar trei containere. La cel numit `mailserver`, apăsați **Terminal**. Se deschide o linie de comandă în interiorul containerului, direct în browser, și acolo scrieți toate comenzile `setup` din acest articol.

Promptul arată așa: `root@mail:/#`. Scrisă singură, `setup` afișează tot ce știe să facă. Prescurtată, lista arată astfel:

![Terminalul containerului mailserver, deschis din detaliile aplicației MailServer, după ce a fost scrisă comanda setup, cu lista completă a lucrurilor pe care le poate face comanda.](../../../assets/blog/mailserver-terminal.png)

```console
root@mail:/# setup
SETUP(1)

NAME
    setup - 'docker-mailserver' Administration & Configuration CLI

[SUB]COMMANDS
    COMMAND email :=
        setup email add <EMAIL ADDRESS> [<PASSWORD>]
        setup email update <EMAIL ADDRESS> [<PASSWORD>]
        setup email del [ OPTIONS... ] <EMAIL ADDRESS> [ <EMAIL ADDRESS>... ]
        setup email restrict <add|del|list> <send|receive> [<EMAIL ADDRESS>]
        setup email list

    COMMAND alias :=
        setup alias add <EMAIL ADDRESS> <RECIPIENT>
        setup alias del <EMAIL ADDRESS> <RECIPIENT>
        setup alias list

    COMMAND quota :=
        setup quota set <EMAIL ADDRESS> [<QUOTA>]
        setup quota del <EMAIL ADDRESS>

    COMMAND config :=
        setup config dkim [ ARGUMENTS... ]

    COMMAND relay :=
        setup relay add-auth <DOMAIN> <USERNAME> [<PASSWORD>]
        setup relay add-domain <DOMAIN> <HOST> [<PORT>]
        setup relay exclude-domain <DOMAIN>

    COMMAND fail2ban :=
        setup fail2ban
        setup fail2ban ban <IP>
        setup fail2ban unban <IP>
        setup fail2ban log
        setup fail2ban status
```

Ce modifică aceste comenzi se păstrează împreună cu datele aplicației, pe pool-ul de stocare, deci rămâne și după actualizări.

## Adăugați prima căsuță, repede

Un server de e-mail abia instalat nu are niciun cont și nu își termină pornirea fără unul. Așteaptă două minute, apoi se oprește și este pornit din nou. Prima comandă are, așadar, un termen:

```sh
setup email add olivia@example.com
```

Vă cere parola, de două ori. Dacă terminalul se închide înainte să terminați, containerul a repornit: apăsați din nou **Terminal** și reluați.

## Generați cheia DKIM

DKIM semnează fiecare mesaj trimis, astfel încât serverul care îl primește să poată verifica că vine într-adevăr de pe domeniul dumneavoastră. Cheia se generează pe nod, o singură dată, după ce există prima căsuță:

```sh
setup config dkim
```

Comanda afișează conținutul înregistrării DNS pe care trebuie să o creați, un rând lung care începe cu `v=DKIM1; k=rsa; p=`. Copiați-l. Este și salvat, în caz că vă trebuie mai târziu:

```sh
cat /tmp/docker-mailserver/rspamd/dkim/rsa-2048-mail-example.com.public.dns.txt
```

Filtrul de spam preia cheia singur. Nu trebuie repornit nimic.

## Înregistrările DNS care fac e-mailul de încredere

Încă trei înregistrări TXT și lista este completă: treisprezece înregistrări la furnizorul de DNS, plus înregistrarea reverse DNS de la furnizorul de internet.

| Tip | Nume | Valoare |
| --- | --- | --- |
| TXT | `mail._domainkey` | rândul afișat de `setup config dkim` |
| TXT | `@` | `v=spf1 mx ~all` |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:postmaster@example.com` |

- **DKIM** publică jumătatea publică a cheii abia generate. Valoarea are peste 255 de caractere, cât încape cel mult într-o singură bucată a unei înregistrări TXT. Cei mai mulți furnizori de DNS o împart singuri. Dacă al dumneavoastră o refuză, împărțiți-o în mai multe bucăți puse între ghilimele.
- **SPF** spune ce servere au voie să trimită e-mail pentru domeniu. `mx` înseamnă cele din înregistrarea MX, adică nodul dumneavoastră.
- **DMARC** le spune destinatarilor ce să facă cu mesajele care pică ambele verificări și unde să trimită rapoarte. `p=none` cere doar rapoarte. După ce vedeți că mesajele dumneavoastră trec, schimbați în `p=quarantine`.

Rapoartele DMARC ajung la `postmaster@example.com`, la fel ca notificările serverului. Faceți ca această adresă să ducă într-o căsuță reală:

```sh
setup alias add postmaster@example.com olivia@example.com
```

## Verificați ce ați făcut

De pe orice calculator, întrebați DNS-ul ce vede acum lumea:

```sh
dig +short MX example.com
dig +short TXT example.com
dig +short TXT mail._domainkey.example.com
dig +short TXT _dmarc.example.com
dig +short SRV _imaps._tcp.example.com
dig +short -x 203.0.113.10
```

Ultima este căutarea inversă și trebuie să răspundă `mail.example.com.`

Apoi trimiteți un mesaj la o adresă de la unul dintre marii furnizori și uitați-vă acolo la antetele lui. Gmail le arată la **Show original**, cu SPF, DKIM și DMARC marcate fiecare ca trecut sau picat. Toate trei trebuie să treacă înainte ca cineva să se bazeze pe server.

## Configurarea clienților de e-mail

Nodul le spune clienților de e-mail care sunt setările, așa că în cei mai mulți omul își scrie numele, adresa și parola, și atât.

- **Thunderbird** caută singur setările la `autoconfig.example.com`.
- **Outlook** întreabă la `autodiscover.example.com`. Cât de bine merge depinde de versiunea de Outlook, așa că țineți la îndemână setările manuale.
- **iPhone, iPad și Apple Mail** folosesc un profil de configurare. Deschideți `https://autodiscover.example.com` pe dispozitiv. Pagina are un formular care generează profilul pentru o adresă, iar profilul se instalează apoi din setările dispozitivului.

Tot la `https://autodiscover.example.com` îi trimiteți pe cei care s-au împotmolit: pagina arată setările pentru configurarea manuală.

Pentru orice client care nu găsește nimic singur, setările sunt acestea:

| | Server | Port | Securitate |
| --- | --- | --- | --- |
| Primire (IMAP) | `mail.example.com` | 993 | SSL/TLS |
| Trimitere (SMTP) | `mail.example.com` | 465 | SSL/TLS |

Numele de utilizator este adresa de e-mail întreagă, iar parola este cea dată la `setup email add`. Pentru clienții care țin la STARTTLS la trimitere, folosiți portul 587.

## Zi de zi

Tot ce urmează se scrie în același loc, în **Terminal**, la containerul `mailserver`.

### Adăugarea unei căsuțe

```sh
setup email add <address> [password]
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<address>` | Da | Adresa de e-mail întreagă a noii căsuțe |
| `[password]` | Nu | Parola ei. Dacă lipsește, comanda o cere, iar parola nu rămâne în istoricul terminalului |

### Schimbarea parolei unei căsuțe

```sh
setup email update <address> [password]
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<address>` | Da | Căsuța a cărei parolă se schimbă |
| `[password]` | Nu | Parola nouă. Dacă lipsește, comanda o cere |

### Ștergerea unei căsuțe

Odată cu căsuța dispar și aliasurile și limita ei.

```sh
setup email del [options] <address>
```

| Opțiune | Obligatoriu | Descriere |
| --- | --- | --- |
| `<address>` | Da | Căsuța de șters. Pot fi date mai multe deodată |
| `-y` | Nu | Șterge și mesajele omului, fără să întrebe |
| `-n` | Nu | Păstrează mesajele omului, fără să întrebe |

Fără niciuna dintre opțiuni, comanda întreabă dacă să șteargă și mesajele, deci un cont poate fi închis cu mesajele păstrate.

### Lista căsuțelor

```sh
setup email list
```

### Adăugarea unui alias

Un alias este o adresă fără căsuță proprie.

```sh
setup alias add <alias> <recipient>
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<alias>` | Da | Adresa la care scriu oamenii, de exemplu `office@example.com` |
| `<recipient>` | Da | Căsuța care îi primește mesajele |

Adăugați același alias câte o dată pentru fiecare om și toți îi primesc mesajele.

### Scoaterea cuiva dintr-un alias

```sh
setup alias del <alias> <recipient>
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<alias>` | Da | Aliasul |
| `<recipient>` | Da | Căsuța care nu îi mai primește mesajele |

### Lista aliasurilor

Lista arată unde livrează fiecare alias.

```sh
setup alias list
```

### Limitarea mărimii unei căsuțe

```sh
setup quota set <address> [quota]
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<address>` | Da | Căsuța de limitat |
| `[quota]` | Nu | Limita, cu unitate, de exemplu `500M` sau `5G`. `0` înseamnă fără limită. Dacă lipsește, comanda o cere |

Fără o limită proprie, o căsuță poate ajunge până la 30 GB.

### Eliminarea limitei unei căsuțe

```sh
setup quota del <address>
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<address>` | Da | Căsuța care revine la limita implicită |

### Generarea cheii DKIM

Comanda afișează și înregistrarea DNS a cheii.

```sh
setup config dkim [options]
```

| Opțiune | Obligatoriu | Descriere |
| --- | --- | --- |
| `domain <name>` | Nu | Domeniul pentru care se generează cheia. Implicit, cel dat la instalare |
| `selector <name>` | Nu | Numele sub care se publică înregistrarea, în fața lui `._domainkey`. Implicit, `mail` |
| `keytype <type>` | Nu | `rsa` sau `ed25519`. Implicit, `rsa` |
| `keysize <bits>` | Nu | `1024`, `2048` sau `4096`, pentru chei `rsa`. Implicit, `2048` |
| `-f` | Nu | Înlocuiește o cheie care există deja |

### Lista adreselor blocate

```sh
setup fail2ban
```

### Ridicarea unei blocări

```sh
setup fail2ban unban <ip>
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<ip>` | Da | Adresa de deblocat |

### Blocarea manuală a unei adrese

```sh
setup fail2ban ban <ip>
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<ip>` | Da | Adresa de blocat |

### De ce a fost blocată o adresă

Comanda afișează istoricul autentificărilor eșuate și al blocărilor.

```sh
setup fail2ban log
```

### Trimiterea printr-un serviciu de relay

E-mailul trimis de pe un domeniu pleacă apoi prin acel serviciu.

```sh
setup relay add-domain <domain> <host> [port]
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<domain>` | Da | Domeniul dumneavoastră de e-mail, de exemplu `example.com` |
| `<host>` | Da | Serverul serviciului de relay |
| `[port]` | Nu | Portul pe care ascultă serviciul de relay |

### Datele de autentificare la serviciul de relay

```sh
setup relay add-auth <domain> <username> [password]
```

| Argument | Obligatoriu | Descriere |
| --- | --- | --- |
| `<domain>` | Da | Domeniul dumneavoastră de e-mail |
| `<username>` | Da | Utilizatorul primit de la serviciul de relay |
| `[password]` | Nu | Parola lui. Dacă lipsește, comanda o cere |

Orice comandă se explică singură dacă îi adăugați `help`, de exemplu `setup email add help`.

## Deblocarea unei adrese

Serverul de e-mail blochează o adresă IP după șase autentificări greșite în decurs de o săptămână, iar blocarea ține o săptămână. Ea acoperă toate porturile de e-mail, așa că pentru omul din spatele acelei adrese e-mailul pur și simplu se oprește: clientul nu se mai poate conecta deloc, nici măcar cu parola corectă. De obicei, de vină este un telefon sau un laptop care a tot încercat o parolă veche după ce aceasta a fost schimbată.

Blocată este adresa, nu contul. Toți cei care folosesc aceeași conexiune rămân pe dinafară odată cu el, iar același om își poate citi în continuare e-mailul de pe altă conexiune, de exemplu de pe datele mobile.

Mai întâi aflați adresa. În **Terminal**, la containerul `mailserver`, afișați ce este blocat:

```console
root@mail:/# setup fail2ban
Banned in dovecot: 198.51.100.7
```

Dacă nu este blocat nimic, comanda vă spune asta, iar problema este în altă parte. Când în listă sunt mai multe adrese, trebuie să știți care este a lui: rugați-l să deschidă un site precum [ipinfo.io](https://ipinfo.io/) de pe conexiunea care nu mai merge și să vă citească adresa afișată.

Apoi rezolvați cauza, altfel blocarea revine imediat: puneți parola corectă în clientul de e-mail de pe toate dispozitivele omului.

Acum deblocați adresa:

```sh
setup fail2ban unban 198.51.100.7
```

Are efect pe loc, iar dacă rulați din nou `setup fail2ban`, adresa nu mai apare în listă. Ca să vedeți ce a dus la o blocare, `setup fail2ban log` afișează istoricul încercărilor eșuate și al blocărilor.

## Sfaturi

- **Dacă furnizorul blochează portul 25 la ieșire** și nu vrea să îl deschidă, serverul poate trimite printr-un serviciu de relay și primi în continuare direct. `setup relay add-domain example.com smtp.relay.example 587` stabilește relay-ul, iar `setup relay add-auth example.com <utilizator>` datele lui de autentificare.
- **Învățați filtrul de spam.** Când mutați un mesaj în Junk, filtrul învață că astfel de mesaje sunt spam, iar când mutați unul din Junk în inbox, învață contrariul. Filtrul învață pentru toată lumea deodată, deci un om atent îi ajută pe toți ceilalți.
- **Uitați-vă întâi în loguri.** Când un mesaj nu ajunge, **Logs** de la containerul `mailserver` spune de obicei de ce, cu vorbele serverului care l-a refuzat.
- **Păstrați o copie a înregistrărilor DNS.** Dacă schimbați vreodată furnizorul de DNS, trebuie create din nou toate, inclusiv DKIM.
- **Căsuțele sunt în snapshoturi.** E-mailul stă pe pool-ul de stocare, împreună cu restul datelor aplicației, deci face parte din același istoric ca tot ce este pe nod.

## La ce să fiți atenți

- **Oamenii nu se pot ajuta singuri.** Nimeni nu își poate schimba singur parola. O schimbați dumneavoastră, cu `setup email update`.
- **Fiecare trimite în nume propriu.** Un om poate trimite doar de pe adresa lui sau de pe un alias care îi livrează lui. Un client setat să trimită în numele altcuiva este refuzat.
- **Unele mesaje ajung cu întârziere prima dată.** Filtrul de spam amână mesajele care i se par suspecte (greylisting): îi cere serverului expeditor să încerce din nou mai târziu. Serverele legitime o fac, așa că mesajul ajunge ceva mai târziu.
- **Un mesaj poate avea cel mult 25 MB.** Atașamentele cresc cu aproximativ o treime la trimitere, deci în practică un fișier poate avea în jur de 18 MB.
- **Parolele greșite duc la blocare.** Un telefon care tot încearcă o parolă veche ajunge blocat de fail2ban, iar e-mailul nu mai merge de pe acea conexiune până când [o deblocați](#deblocarea-unei-adrese).
- **Când nodul este oprit, e-mailul așteaptă.** Serverele expeditoare mai încearcă o vreme, de obicei câteva zile, apoi renunță. Nu există un al doilea server care să preia, deci o întrerupere lungă înseamnă mesaje întoarse la expeditor.
- **Un server nou nu are reputație.** În primele săptămâni, marii furnizori vă pot pune mesajele în spam chiar dacă toate verificările trec. Lucrurile se îndreaptă pe măsură ce oamenii vă primesc mesajele și vă răspund.
- **Aplicația este făcută pentru un singur domeniu.** Puteți adăuga căsuțe pe un al doilea domeniu, dar semnarea DKIM pentru el se configurează manual, iar clienții de e-mail se configurează automat doar pentru primul.

## Merită?

Pentru o firmă care păstrează corespondența confidențială a altora, e-mailul pe propriile discuri merită o după-amiază de înregistrări DNS. Pentru o conexiune care nu poate oferi adresă statică, portul 25 deschis și reverse DNS, nu merită, și nicio configurare nu schimbă asta.

## Ce urmează

- [Port forwarding](https://docs.univrs.cloud/setup/ports/), în limba engleză, descrie porturile și cum verificați dacă sunteți în spatele CGNAT.
- [Apps](https://docs.univrs.cloud/management/resources/apps/#terminal), în limba engleză, descrie terminalul și logurile unui container.
- [Documentația docker-mailserver](https://docker-mailserver.github.io/docker-mailserver/latest/), în limba engleză, acoperă tot ce mai poate face serverul de e-mail dincolo de acest articol.
- [Ce este virgoOS și ce rulează pe el](/ro/blog/what-virgoos-is/) prezintă pe scurt restul.
