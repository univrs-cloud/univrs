---
title: 'Când cade cloudul, așteptați'
description: Pe 12 noiembrie, Outlook și restul Microsoft 365 s-au oprit pentru firme din toată lumea, au rămas oprite până a doua zi și încă nu funcționau la publicarea acestui articol. Ce s-a oprit, ce putea face o firmă și cum arată aceeași zi cu e-mailul și fișierele pe propriul nod.
pubDate: 2026-11-13
image: ../../../assets/blog/outage-ro.png
imageAlt: Cloudul Microsoft este oprit pentru toate firmele din el deodată, iar laptopurile a trei firme pierd legătura cu el, în timp ce în biroul dumneavoastră laptopul și telefonul lucrează mai departe cu nodul.
tags:
  - virgoOS
  - e-mail
  - Microsoft 365
---

Joi, 12 noiembrie, Outlook a încetat să funcționeze. În mai puțin de o oră, oameni din 74 de țări și teritorii raportau că nu își pot deschide căsuțele de e-mail. Au fost afectate și Teams, Copilot, OneDrive și Microsoft 365 în browser. Vineri dimineață, Microsoft încă afișa Microsoft 365 pentru firme ca funcționând cu probleme și nu dăduse nicio oră până la care totul să revină la normal. La publicarea acestui articol, încă nu funcționa.

Articolul acesta este despre ce înseamnă o asemenea zi pentru o firmă care își ține e-mailul și fișierele în cloudul altcuiva și despre cum arată aceeași zi când ele stau pe un nod univrs, în propriul birou.

## Ce s-a oprit

Pentru cele mai multe firme, pe e-mail vine munca: oferte, comenzi, facturi, clientul care așteaptă un răspuns. Joi, toate acestea s-au oprit, la fel ca o mare parte din ce stătea în același loc.

- **E-mailul.** Căsuțele nu se deschideau, nici în browser, nici în aplicație, nici pe telefon, iar e-mailurile care ajungeau totuși ajungeau cu întârziere. Ca mesajele care nu au putut fi livrate joi să nu se piardă, Microsoft a prelungit la 48 de ore intervalul în care încearcă să le livreze. Dacă e-mailul unui client ajungea la dumneavoastră depindea de cât timp erau dispuse să aștepte serverele altcuiva.
- **Fișierele.** OneDrive și Microsoft 365 în browser au fost parte din pană, așa că nici documentele ținute acolo nu mai puteau fi deschise.
- **Instrumentele cu care ați fi reacționat.** Au fost afectate și panourile de administrare Intune și Defender, la fel ca unele calculatoare Windows din cloud. Instrumentele cu care un administrator ar fi ocolit problema erau și ele oprite.

Nu a fost vorba doar de firme mici. Au fost perturbate sisteme guvernamentale din Singapore și Japonia, precum și comunicațiile Curții Supreme din Filipine și ale poliției federale australiene.

## Ce puteați face

Nimic. Microsoft a spus că problema a fost „un număr mare de servere devenite neașteptat indisponibile”, sub o „încărcare ridicată în mai multe regiuni”. A oprit toate implementările, a mutat traficul de pe infrastructura afectată și a repornit servere. Peste noapte a anunțat că modificările menite să îmbunătățească serviciul nu funcționau cum se aștepta. Vineri dimineață încă avertiza că vor mai fi probleme intermitente și e-mailuri întârziate, fără să dea vreo oră pentru remedierea completă.

La nimic din toate acestea nu puteați lua parte. Omul dumneavoastră de IT nu putea reporni un server, administratorul nu putea muta o căsuță de e-mail și nimeni nu îi putea spune unui client când va primi un răspuns. Rămânea doar să reîncărcați o pagină de stare.

Nici nu a fost prima dată anul acesta. Precedenta pană majoră Microsoft, din septembrie, a fost pusă pe seama unei probleme în configurarea autentificării.

## O singură defecțiune, toate firmele deodată

Fiecare firmă din Microsoft 365 este chiriașă în aceeași infrastructură comună. Când infrastructura cedează, cedează pentru toți cei care o folosesc, în aceeași zi și cât timp durează. Cât de bine s-a pregătit o firmă nu îi schimbă locul la coadă.

## Aceeași zi pe propriul nod

Pe un nod univrs, joi a fost o zi de lucru obișnuită.

**Pana altcuiva nu este pana dumneavoastră.** E-mailul și fișierele nu stau pe serverele Microsoft, așa că o zi ca cea de joi trece fără să o observați. Un nod nu își împarte infrastructura cu nimeni și răspunde doar firmei căreia îi aparține.

**În birou, internetul este opțional.** Folderele și Nextcloud stau pe nod, în rețeaua locală. Chiar și fără internet, calculatoarele din birou deschid, salvează și partajează fișiere pe nod la fel ca înainte.

**E-mailul vine direct la dumneavoastră.** Ajunge de la serverul expeditorului direct la nodul din biroul dumneavoastră, fără coada unui furnizor la mijloc și fără ca altcineva să decidă când este livrat.

**Datele sunt păstrate de două ori.** Pool-ul de stocare al nodului este redundant, de la o oglindă în sus, așa că un disc se poate înlocui în timp ce totul funcționează mai departe. Dedesubt, pool-ul păstrează un istoric al datelor: câte un snapshot pentru fiecare dintre ultimele 36 de ore, 30 de zile, 60 de luni și 5 ani.

**Un al doilea nod preia.** Cu două noduri, datele și snapshoturile lor sunt replicate de pe unul pe celălalt. Dacă nodul principal se oprește, totul trece pe nodul secundar, iar firma lucrează mai departe. Puneți al doilea nod în altă clădire și nici măcar un incendiu sau un furt la birou nu vă mai oprește.

**Este în biroul dumneavoastră.** Vedeți serverul, iar cine are grijă de el are grijă de nodul dumneavoastră, nu de o infrastructură folosită de milioane de oameni.

## Pe scurt

- **O pană globală nu este pana dumneavoastră.** E-mailul și fișierele nu stau pe o infrastructură împărțită cu milioane de alți utilizatori.
- **Biroul lucrează și fără internet.** Folderele și Nextcloud sunt în rețeaua locală.
- **E-mailul vine direct la dumneavoastră.** Fără coada unui furnizor la mijloc.
- **Un al doilea nod preia.** Datele sunt replicate, iar totul trece pe nodul secundar.
- **Serverul este al dumneavoastră.** Stă în birou, în rețeaua dumneavoastră, și răspunde doar dumneavoastră.

Joi, firmele care își puseseră totul într-un singur cloud au pierdut în același moment accesul la e-mail și la fișiere și nu au putut face nimic altceva decât să aștepte. Cu un nod, e-mailul și fișierele rămân acolo unde se face munca: în biroul dumneavoastră și în mâinile dumneavoastră.

## Ce urmează

- [E-mail pe propriul server](/ro/blog/self-hosted-email/) arată configurarea serverului de e-mail pe un nod, de la porturi până la prima căsuță.
- [Nextcloud pe propriul nod sau OneDrive](/ro/blog/nextcloud-or-onedrive/) le compară după unde stau fișierele, ale cui sunt și cât costă.
- [Ce este virgoOS și ce rulează pe el](/ro/blog/what-virgoos-is/) prezintă pe scurt restul.
