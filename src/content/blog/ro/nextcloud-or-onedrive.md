---
title: 'Nextcloud pe propriul nod sau OneDrive: unde stau fișierele firmei'
description: Nextcloud pe un nod virgoOS și OneDrive fac același lucru, în două locuri diferite. O comparație după unde stau fișierele, ale cui sunt, cât costă și cum recuperați un fișier.
pubDate: 2026-10-03
image: ../../../assets/blog/files-where-ro.png
imageAlt: Același laptop și același telefon își țin fișierele într-unul din două locuri, în Nextcloud, pe un nod din biroul dumneavoastră, pe propriile discuri și fără taxă per utilizator, sau în OneDrive, în cloudul Microsoft, pe serverele Microsoft și cu licență per utilizator.
tags:
  - virgoOS
  - Nextcloud
  - OneDrive
---

Multe firme își țin fișierele în OneDrive pentru că a venit la pachet cu Microsoft 365, de multe ori fără ca cineva să îl fi ales. Un nod virgoOS face același lucru cu Nextcloud, pe un server aflat în propriul birou. Articolul acesta le compară acolo unde diferența contează: ale cui sunt fișierele, ce plătiți la nesfârșit și ce mai puteți recupera.

## Același lucru

În munca de zi cu zi nu renunțați la nimic. Amândouă îi dau fiecărui om un loc pentru fișierele lui, le țin sincronizate între dispozitive și îi permit să partajeze un fișier cu un coleg sau să trimită un link cuiva din afară.

Nextcloud are aplicații de sincronizare pentru Windows, macOS și Linux și aplicații pentru Android și iOS. Un fișier sau un folder poate fi partajat cu alți utilizatori și cu grupuri sau printr-un link, care poate fi protejat cu parolă și poate avea o dată de expirare. Un link poate fi făcut și doar pentru încărcare, astfel încât un client să vă poată trimite documente fără să vadă ce au trimis alții.

Pe un nod, Nextcloud se instalează din App center. Euro Office, instalat alături, adaugă lucrul în echipă la documente, direct în browser.

![App center, cu lista aplicațiilor care pot fi instalate, printre ele Nextcloud, backendul lui de înaltă performanță, tabla virtuală și Euro Office.](../../../assets/blog/app-center.png)

## Unde stau fișierele

Cu OneDrive, fișierele stau în centrele de date Microsoft. Pentru clienții înregistrați în UE, Microsoft se angajează să le stocheze și să le prelucreze în interiorul UE și al AELS, cu un număr limitat de situații în care datele sunt totuși transferate în afară.

Cu un nod, fișierele stau pe discuri aflate în biroul dumneavoastră. Nu aveți de ales o regiune și nici de citit un angajament, pentru că fișierele nu pleacă nicăieri.

## Ale dumneavoastră și ale nimănui altcuiva

Cu un nod, datele sunt ale dumneavoastră și ale nimănui altcuiva. Fișierele stau pe un echipament care vă aparține și nimeni altcineva nu păstrează o copie a lor: nici un furnizor de cloud, nici univrs. Fleetul doar administrează nodul și nu păstrează niciun fișier de-al dumneavoastră.

La un furnizor de cloud, fișierele sunt ale dumneavoastră prin contract, dar le păstrează altcineva. De aici vine și întrebarea următoare: ce se întâmplă cu ele acolo.

Inteligența artificială lucrează deja pe fișierele păstrate în Microsoft 365. Acolo unde este folosit Copilot, acesta citește documentele, e-mailurile și conversațiile unei persoane ca să îi răspundă, iar Microsoft oferă pentru el modele de la OpenAI și Anthropic, în calitate de subcontractanți ai săi. Ce altceva se mai poate face cu fișierele ține de termenii furnizorului: nu puteți verifica singuri, îi luați pe încredere, iar termenii se pot schimba.

Pe un nod nu aveți nimic de luat pe încredere. Fișierele nu ajung niciodată la un furnizor, așa că nimeni nu are cum să le analizeze, să își facă un profil din ele sau să antreneze pe ele un model de inteligență artificială, nici azi, nici după următoarea schimbare a termenilor. Pentru o firmă care păstrează documentele confidențiale ale altora, acesta este răspunsul mai ușor de dat unui client care întreabă.

## Cât costă

OneDrive se licențiază per utilizator, ca parte a unui abonament Microsoft 365, la prețul stabilit de Microsoft. Planurile pentru firme vin cu 1 TB de spațiu pentru fiecare utilizator. Fiecare coleg nou înseamnă încă o licență, pe care o plătiți cât timp lucrează cu dumneavoastră. Este o chirie care nu se termină niciodată.

virgoOS și Nextcloud sunt open source și niciunul nu are o taxă per utilizator. Plătiți serverul și discurile lui. Spațiul este cât încape pe discuri și este folosit în comun de toată lumea, așa că un coleg nou nu costă nimic, iar mai mult spațiu înseamnă discuri mai mari. Cumpărați ceva care apoi vă aparține.

## Recuperarea unui fișier

Aici se vede cel mai bine ce înseamnă să dețineți stocarea.

În OneDrive pentru firme, un fișier șters poate fi restaurat timp de 93 de zile, dacă administratorul nu a schimbat această perioadă. Întregul OneDrive poate fi readus la un moment din ultimele 30 de zile. Dincolo de aceste limite, un fișier care a părăsit coșul de reciclare nu mai poate fi recuperat.

Nextcloud are propriul coș, care păstrează fișierele șterse cel puțin 30 de zile. Dedesubt, pool-ul de stocare al nodului păstrează un istoric al tuturor datelor: câte un snapshot pentru fiecare dintre ultimele 36 de ore, 30 de zile, 60 de luni și 5 ani. Un fișier șters acum câteva luni sau suprascris pe nesimțite anul trecut poate fi încă într-unul dintre ele. Snapshoturile mai vechi sunt mai rare, deci păstrează fișierul așa cum era la începutul unei luni sau al unui an.

Nu trebuie să știți în care. Nodul cataloghează din oră în oră fișierele din snapshoturile Nextcloud, așa că puteți căuta un fișier după nume și îi vedeți toate versiunile păstrate, inclusiv pe cele șterse.

![O căutare după „budget” în snapshoturile Nextcloud, cu fiecare fișier găsit și punctele de restaurare care păstrează o versiune a lui, unul dintre fișiere fiind marcat Deleted.](../../../assets/blog/snapshots-search.png)

Tot pe acest istoric vă bazați dacă un ransomware criptează fișierele: snapshoturile sunt doar pentru citire, deci versiunile de dinainte rămân neatinse.

## Partajarea cu persoane din afară

Un link din Nextcloud duce direct la nodul dumneavoastră. Cel care îl deschide primește fișierul din biroul dumneavoastră, nu dintr-o copie păstrată de un terț, iar la un furnizor nu rămâne niciodată vreo copie.

Pentru asta, nodul trebuie să fie accesibil din internet: legătura are nevoie de o adresă IP publică și de [câteva porturi redirecționate](https://docs.univrs.cloud/setup/ports/) în router. În rețeaua dumneavoastră și prin [VPN](/ro/blog/vpn-on-virgoos/), Nextcloud funcționează și fără ele.

## Pe scurt

- **Fișierele sunt ale dumneavoastră.** Stau pe un echipament care vă aparține, în biroul dumneavoastră, și nimeni altcineva nu păstrează o copie.
- **Nicio inteligență artificială a vreunui furnizor nu le citește.** Nimic nu este analizat, profilat sau folosit la antrenare, pentru că nimic nu părăsește nodul.
- **Nu mai plătiți chirie.** Nu există licență per utilizator și nicio factură care să crească odată cu firma.
- **Vă recuperați fișierele.** Nodul păstrează un istoric de până la cinci ani, în care puteți căuta, pe când coșul de reciclare din OneDrive se oprește la 93 de zile.

OneDrive vă cere să încredințați fișierele firmei unui furnizor și să plătiți pentru asta la nesfârșit. Un nod nu vă cere niciuna, nici alta.

## Ce urmează

- [Snapshots](https://docs.univrs.cloud/management/resources/apps/snapshots/), în limba engleză, descrie punctele de restaurare și căutarea versiunilor mai vechi sau șterse.
- [Apps](https://docs.univrs.cloud/management/resources/apps/), în limba engleză, descrie instalarea Nextcloud și Euro Office din App center.
- [Ce este virgoOS și ce rulează pe el](/ro/blog/what-virgoos-is/) prezintă pe scurt restul.
