# Praktika su JWT ir autentifikacija

Šios praktinės užduoties metu, pabandysime įvirtinti authentikacijos žinias su NodeJS ir JWT

Susikuriame dvi lenteles:

1. users (id, email, password, reg_timestamp);
2. articles (id, date, title, content).

### Susikuriame NodeJS serverį su:

1. Auth: POST register (išsaugo vartotojo duomenis į users lentelę);
1. Auth: POST login (patikrina vartotojo duomenis ir grąžina tokeną);
1. Content: GET articles (tik registruotiems vartotojams);

### Susikuriame Front-end‘o puslapius:

register.html (forma - sukuria vartotoją arba išmeta klaidą).
login.html (forma – grąžina token'ą ir išsaugo į localstorage (arba kaip cookie). Kitu atveju išmeta klaidą).
index.html – išmeta visus straipsnius auth vartotojams. Jei vartotojas ne auth – jį nukreipia į login.html.
Taip pat nepamirštame patikrinti ir validuoti visų priimamų įvesčių. Tiek backend'e, tiek frontend'e.
