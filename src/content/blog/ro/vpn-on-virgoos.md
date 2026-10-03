---
title: 'Departe de birou: VPN-ul de pe un nod virgoOS'
description: Cum vă aduce VPN-ul WireGuard de pe un nod virgoOS folderele și time machines oriunde ați fi, ce îi trebuie de la conexiunea la internet și de ce am ales WireGuard.
pubDate: 2026-10-02
image: ../../../assets/blog/vpn-paths-ro.png
imageAlt: Un telefon sau un laptop din afara rețelei ajunge la nod pe două căi, prin fleet pentru administrare și printr-un tunel WireGuard, care intră în rețea prin router, pe portul UDP 51820, și ajunge la folderele, time machines și aplicațiile nodului. Ambele căi sunt criptate.
tags:
  - virgoOS
  - VPN
  - WireGuard
---

Un nod virgoOS stă în rețeaua dumneavoastră, lângă calculatoarele care îl folosesc. Articolul acesta este despre zilele în care nu sunteți lângă el: acasă, la un client, în tren. Arată ce face VPN-ul, de ce are nevoie și de ce VPN-ul de pe nod este WireGuard.

## Trei căi de acces din afară

La un nod se poate ajunge din afara rețelei pe trei căi, fiecare cu rostul ei.

- **Prin fleet.** La [fleet.univrs.cloud](https://fleet.univrs.cloud) administrați nodul de oriunde, și atât: fleetul nu face altceva. Nodul se conectează singur la fleet, deci merge și fără adresă IP publică, și fără porturi redirecționate.
- **Prin adresa lor.** Cu portul 443 redirecționat, aplicațiile se deschid în browser, fiecare la adresa ei. Din afară, administrarea nodului și o parte dintre aplicații cer mai întâi un cont de pe nod.
- **Prin VPN.** Telefonul sau laptopul intră în rețeaua dumneavoastră printr-un tunel criptat și este tratat ca și cum s-ar afla la birou. Este singura dintre cele trei căi care ajunge la folderele și la time machines de pe nod.

Toate trei sunt criptate. Diferă doar la ce ajunge fiecare.

## Folderele și time machines, de oriunde

Folderele și time machines sunt partajări SMB. Sunt făcute pentru calculatoarele din rețeaua locală și nu sunt expuse niciodată în internet: pentru ele nu există niciun port de redirecționat. Când sunteți departe de birou, VPN-ul este calea sigură de a ajunge la ele.

![Folderele de pe pagina Dashboard a unui nod: Documents, Olivia Nextcloud, Photos și Public, fiecare cu o bară care arată cât din capacitate este ocupat.](../../../assets/blog/dashboard-folders.png)

Odată conectat la VPN, calculatorul deschide un folder la aceeași adresă pe care o folosește la birou, cu același nume de utilizator și aceeași parolă de pe nod. Nu trebuie să sincronizați sau să copiați nimic înainte: fișierele rămân pe nod și lucrați pe ele acolo unde sunt.

La fel stau lucrurile cu backupurile. Un Mac care își face backupul într-un time machine de pe nod continuă să și-l facă și prin VPN, așa că un laptop plecat o săptămână nu rămâne o săptămână fără backup.

![Time machines de pe pagina Dashboard a unui nod, câte unul pentru fiecare Mac: James MacBook Air, Olivia MacBook Pro și Studio iMac.](../../../assets/blog/dashboard-time-machines.png)

## Aplicațiile, ca în rețeaua locală

Aplicațiile nu au nevoie de VPN, fiindcă se pot deschide din afară la adresele lor. Prin VPN se poartă ca la birou: pagina Dashboard se deschide fără autentificare, iar aplicațiile se deschid fără autentificarea nodului. Fiecare aplicație vă cere în continuare propriul cont.

Detaliile sunt în [Authentication](https://docs.univrs.cloud/management/authentication/#on-your-local-network-and-over-the-vpn), în limba engleză.

## De ce are nevoie

VPN-ul are nevoie ca legătura dumneavoastră la internet să aibă o adresă IP publică și ca un port să fie redirecționat din router către nod: UDP 51820. Configurarea îl afișează alături de celelalte porturi.

![Pasul de redirecționare a porturilor din configurare, cu lista porturilor care trebuie redirecționate către nod, printre ele UDP 51820 pentru VPN-ul WireGuard.](../../../assets/blog/setup-ports.png)

Unii furnizori împart o singură adresă publică între mai mulți clienți, ceea ce se numește CGNAT. În spatele CGNAT, nimic nu poate ajunge la nod din internet, iar VPN-ul nu face excepție. Administrarea prin fleet funcționează în continuare, iar [ghidul despre porturi](https://docs.univrs.cloud/setup/ports/), în limba engleză, arată cum aflați ce fel de conexiune aveți.

## Instalarea

WireGuard se găsește în App center. Selectați **Install**, iar formularul vă cere patru lucruri:

- **Domain**, completat deja cu domeniul nodului. Interfața VPN-ului este disponibilă la numele `vpn` de sub el, de exemplu `vpn.virgo.univrs.cloud`.
- **HTTPS certificate**, certificatul pentru această interfață.
- **DNS**, serverul de nume pe care îl folosesc dispozitivele cât timp sunt conectate. Dacă aveți Pi-hole instalat, treceți adresa lui, iar reclamele rămân blocate și prin VPN.
- **Password**, parola administratorului interfeței.

Din afara rețelei, interfața cere mai întâi un cont de pe nod, apoi propria autentificare.

## Adăugarea unui dispozitiv

Fiecare dispozitiv primește propriul client, creat în interfața VPN-ului. Pe telefon, instalați aplicația WireGuard și scanați codul QR al clientului. Pe calculator, descărcați fișierul de configurare al clientului și importați-l în aplicația WireGuard. Există aplicații pentru Windows, macOS, iOS și Android.

Tocmai fiindcă fiecare dispozitiv are clientul lui, lucrurile rămân ușor de ținut sub control. Interfața arată ce clienți sunt conectați, iar un client poate fi dezactivat sau șters. Dacă se pierde un telefon sau pleacă cineva din firmă, tăiați accesul doar acelui dispozitiv, fără ca ceilalți să fie nevoiți să schimbe ceva.

## De ce WireGuard

Există VPN-uri mai vechi și mai cunoscute, în primul rând OpenVPN. VPN-ul de pe nod este WireGuard din câteva motive simple.

- **Face parte din Linux.** WireGuard este inclus în nucleul Linux, de aceea este rapid și pe un server mic.
- **Este mic.** A fost gândit să poată fi implementat în foarte puține linii de cod, astfel încât un singur om să îl poată verifica în întregime. Mai puțin cod înseamnă mai puține locuri în care se poate ascunde o greșeală.
- **Nu are nimic de reglat.** Folosește un singur set de algoritmi criptografici moderni, deci nu există o listă de cifruri din care să alegeți și nicio variantă slabă pe care să o bifați din greșeală.
- **Vă urmează.** Când telefonul trece de pe Wi-Fi pe date mobile, conexiunea merge mai departe, fără să vă reconectați.

Are și o limită, pe care e bine să o știți. WireGuard funcționează doar peste UDP și nu încearcă să se ascundă. O rețea care blochează UDP nu îl lasă să treacă, pe când OpenVPN, care poate funcționa și peste TCP, uneori reușește. Pentru a ajunge la propriul nod de acasă sau de pe telefon, simplitatea valorează mai mult.

## Ce urmează

- [Port forwarding](https://docs.univrs.cloud/setup/ports/), în limba engleză, enumeră toate porturile și explică CGNAT.
- [Folders](https://docs.univrs.cloud/management/resources/folders/) și [Time machines](https://docs.univrs.cloud/management/resources/time-machines/), în limba engleză, arată cum le creați și cum le copiați adresele.
- [Apps](https://docs.univrs.cloud/management/resources/apps/), în limba engleză, descrie instalarea din App center.
- [Ce este virgoOS și ce rulează pe el](/ro/blog/what-virgoos-is/) prezintă pe scurt tot restul.
