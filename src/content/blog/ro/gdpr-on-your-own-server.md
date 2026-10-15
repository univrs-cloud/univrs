---
title: 'GDPR pe propriul server: unde stau datele și cine ajunge la ele'
description: Unde stau datele personale pe un nod virgoOS, cine ajunge la ele din birou și din afara lui și ce face nodul ca să le păstreze disponibile și să le șteargă.
pubDate: 2026-10-15
image: ../../../assets/blog/gdpr-cover.png
imageAlt: Foldere și carduri de identitate cu datele unor persoane, păstrate pe un nod virgoOS, cu cele douăsprezece stele ale drapelului UE pe folderul deschis.
tags:
  - virgoOS
  - GDPR
  - securitate
---

GDPR pune fiecărei firme aceleași întrebări despre datele personale pe care le păstrează: unde sunt, cine ajunge la ele, cum le recuperați după un incident și cum le ștergeți. La un serviciu în cloud, o parte din fiecare răspuns stă în contractul furnizorului. La un nod virgoOS, toate răspunsurile sunt în biroul dumneavoastră.

Articolul acesta adună răspunsurile pe care vi le permite un nod. Ce anume cere regulamentul de la firma dumneavoastră rămâne să judece avocatul sau responsabilul cu protecția datelor. Acestea sunt faptele pe care vi le vor cere.

## Unde stau datele

Tot ce păstrează un nod stă pe propriile lui discuri: fișierele din Nextcloud, căsuțele serverului de e-mail, folderele din rețea și time machines pentru Mac. Fiecare aplicație își ține datele în pool-ul de stocare al nodului, iar pool-ul este format din discurile din nod.

Așadar, la întrebarea „unde” răspunsul este un singur loc: încăperea în care stă nodul. Nu există un centru de date, nu aveți de ales o regiune și nimic nu este transferat în afara UE, pentru că nimic nu este transferat deloc.

Asta schimbă și cine este implicat. Oricine stochează date personale în numele dumneavoastră este persoană împuternicită, iar GDPR cere un contract cu fiecare dintre ele (articolul 28) și o verificare a locurilor în care trimit datele. Nodul este echipamentul dumneavoastră, așa că păstrarea datelor pe el nu adaugă pe nimeni pe această listă.

## Nu se colectează nimic

virgoOS nu colectează nimic: nicio statistică de utilizare, nicio telemetrie, niciun raport. univrs nu păstrează nicio copie a datelor dumneavoastră și nu vede nimic din ele.

## Cine ajunge la ele

![Un nod din biroul dumneavoastră păstrează fișierele, e-mailul și folderele pe propriile discuri. Colegii ajung la el din rețeaua locală, fiecare cu contul lui. Din afară, un telefon trece de router, pe HTTPS 443, doar după autentificare. Nicio copie nu stă în cloudul altcuiva.](../../../assets/blog/data-where-ro.png)

### În birou

În rețeaua locală, fiecare aplicație cere propriul cont. Folderele și time machines cer un nume de utilizator și o parolă de pe nod, iar fiecare utilizator ajunge doar la cele la care i s-a dat acces.

### Din afară

Din internet, nimic nu ajunge la nod dacă nu redirecționați porturi către el în router. Cu portul 443 redirecționat, aplicațiile se deschid la propriile nume. Administrarea nodului și o parte din aplicații cer întâi un cont de pe nod, apoi aplicația îl cere pe al ei.

După 3 încercări de autentificare eșuate în 10 minute, autentificarea de la acea adresă este blocată 12 ore.

Folderele și time machines nu sunt niciodată puse în internet: nu există niciun port de redirecționat pentru ele. În afara biroului, se ajunge la ele doar prin [VPN](/ro/blog/vpn-on-virgoos/).

### Oamenii din firmă

Fiecare utilizator al nodului are un rol. Utilizatorii ajung la folderele și time machines la care au acces. Administratorii administrează nodul și utilizatorii lui. Proprietarul, a cărui parolă a fost setată la configurare, este singurul care poate face pe cineva administrator.

Când cineva pleacă, **Lock** îl oprește să se mai autentifice și să mai ajungă la foldere și la time machines, iar **Delete** îl șterge. Oricare dintre ele îl deconectează peste tot. Lista sesiunilor arată fiecare browser în care un utilizator este autentificat, adresa de la care este folosit și când a fost activ ultima dată.

Aplicațiile au propriile conturi, separate de cele ale nodului. Când cineva pleacă, dezactivați-l și în Nextcloud și în celelalte aplicații pe care le folosea.

### În încăpere

Nodul este mic și stă în biroul dumneavoastră, așa că merită aceeași grijă ca dosarele pe hârtie: o cameră sau un dulap care se încuie, departe de locurile pe unde trec vizitatorii.

## Datele rămân disponibile

GDPR cere capacitatea de a restabili la timp disponibilitatea datelor personale și accesul la ele după un incident fizic sau tehnic (articolul 32). Un nod face asta pe patru niveluri.

- **Mai mult de un disc.** Pool-ul păstrează fiecare dată pe mai mult de un disc, așa că un disc defect nu pierde nimic.
- **O verificare lunară.** O dată pe lună, pool-ul își citește toate datele, le verifică după sumele de control și repară tot ce nu se potrivește.
- **Un istoric.** Implicit, nodul face câte un snapshot pentru fiecare dintre ultimele 36 de ore, 30 de zile, 60 de luni și 5 ani, iar cât timp este păstrat fiecare tip se poate modifica. Snapshoturile sunt doar pentru citire, așa că un ransomware nu le poate modifica, iar un fișier din Nextcloud șters sau suprascris poate fi găsit după nume și [recuperat](/ro/blog/getting-a-file-back/).
- **Alte noduri.** Datele și snapshoturile lor sunt replicate pe un alt nod sau pe mai multe, așa că un nod se poate defecta fără să ia datele cu el.

Primele trei se află pe nodul însuși și acoperă un disc defect, un fișier șters și un ransomware. Replicarea acoperă pierderea nodului însuși. Pentru un incendiu sau un furt, celălalt nod trebuie să fie în altă clădire.

## Ștergerea definitivă

GDPR le dă oamenilor și dreptul de a cere ștergerea datelor (articolul 17), deci contează ce se întâmplă de fapt când ștergeți un fișier.

Un fișier șters în Nextcloud ajunge în coș, care îl păstrează cel puțin 30 de zile, dacă nu este golit. Dedesubt, snapshoturile păstrează ce era în pool în momentul în care au fost făcute. Un fișier șters rămâne în snapshoturile mai vechi până când acestea expiră după programul lor: în câteva ore pentru cele orare și după cinci ani pentru cele anuale, dacă nu alegeți o altă perioadă.

Snapshoturile Nextcloud nu pot fi oprite sau dezactivate, pentru că găsirea și recuperarea fișierelor depind de ele. Treceți-le în evidențele dumneavoastră ca pe orice backup: ce conțin, faptul că sunt păstrate doar pentru recuperarea după un incident și programul după care expiră.

## Pe scurt

- **Un singur loc.** Datele stau pe discuri din biroul dumneavoastră și nicăieri altundeva.
- **Niciun intermediar.** Nu le păstrează niciun furnizor, nu aveți de justificat niciun transfer și nu se colectează nimic.
- **Dumneavoastră decideți cine intră.** Conturile de pe nod, conturile din aplicații și porturile pe care le redirecționați sunt singurele căi de acces.
- **Un istoric cu un capăt.** Implicit cinci ani din care puteți recupera, sau cât alegeți, după un program pe care îl puteți trece în scris.

## Ce urmează

- [Authentication](https://docs.univrs.cloud/management/authentication/), în limba engleză, descrie autentificarea în rețeaua locală și din afara ei.
- [Users](https://docs.univrs.cloud/management/system/users/), în limba engleză, descrie rolurile, blocarea utilizatorilor și sesiunile.
- [Snapshots](https://docs.univrs.cloud/management/resources/apps/snapshots/), în limba engleză, descrie punctele de restaurare și recuperarea fișierelor.
- [Nextcloud pe propriul nod sau OneDrive](/ro/blog/nextcloud-or-onedrive/) compară păstrarea fișierelor pe un nod cu păstrarea lor în cloudul Microsoft.
