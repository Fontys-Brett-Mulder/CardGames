# Portfolio Semester 3

##### Naam: Brett Mulder

##### Klas: S3DB04

***

# Content
1. [Leerdoelen uitgelegd](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#leerdoelen-uitgelegd)
2. [Full-stack Web Application](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#full-stack-web-application)
3. [Software Quality](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#software-quality)
4. [Agile Methods](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#agile-methods)
5. [CI/CD](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#cicd)
6. [Cultural differences and ethics](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#cultural-differences-and-ethics)
7. [Requirements en Design](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#requirements-en-design)
8. [Business Processes](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#business-processes)
9. [Professional](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#professional)

***

# Leerdoelen uitgelegd

#### 1. Full-stack Web Application

Je designd en bouwt een user-friendly, full-stack web applicatie.

#### 2. Software Quality

Je maakt gebruik van tooling en methodologydat continu aantoont dat de code verbeterd wordt tijdens het development
proces.

#### 3. Agile methods

Je kiest en implementeert de meest toepasselijke Agile methods voor je software project.

#### 4. CI/CD

Je designd en implementeert een (semi)automatische software release proces dat overeen komt met je project.

#### 5. Cultural differences and ethics

Je herkent en houdt rekening met culturele verschillen tussen project stakeholders en ethische aspecten bij
softwareontwikkeling.

#### 6. Requirements en Design

Je analyseert (geen functionele) requirements, designs en deze doet testen doormiddel van verschillende manieren van
tests.

#### 7. Business Processes

Je analyseert en beschrijft een simpel business proces dat overeen komt met je project.

#### 8. Professional

Je gedraagt je op een professionele manier tijdens het maken van je programma en het leren.
***

# Full-stack Web Application

Ik heb gekozen voor VueJS als front-end framework, deze keuzes heb ik beschreven in dit document. Ik ben gebruik gaan
maken van microservices (voor uitleg lees dit document), hierbij heb ik verschillende API’s. Deze API’s zijn gemaakt
doormiddel van ASP.net Core WebAPI.

## Design

Ik heb de keuze gemaakt om alleen een Design te maken voor mobiele versie. Dit heb ik gedaan omdat mijn doelgroep ligt
bij degene die kaartspellen vergeten zijn en toch een spel willen spelen. Je hebt altijd een telefoon op zak dus vandaar
alleen een mobiele versie.

![](Images/Portfolio/design.png)

## API

Voor de GamesService API heb ik de volgende structuur aan gehouden voor het ophalen van Games. De API
endpoint https://localhost:7099/api/Games/getAllGames geeft een lijst terug van games.

![](Images/Portfolio/API.png)

Een Game heeft bepaalde informatie, deze informatie is hieronder te zien.

![](Images/Portfolio/API_small.png)
***

# Software Quality

Voor het aantonen dat de code die geschreven wordt er goed uit ziet maak ik gebruik van SonarCloud. SonarCloud doet een
scan over mijn code en kijkt naar punten waar het beter kan. Bijvoorbeeld als een class readonly mag zijn, of consistent
gebruik van dezelfde hoofdletters bij functies, variables etc.

Bij elke push naar de “main” branch wordt er een check uitgevoerd. Deze uitslagen kan ik dan terugvinden in het
Dashboard van SonarCloud.

Hieronder zijn een paar uitslagen te zien, 1 van de 6 checks is rood gemarkeerd. Dit is omdat in dit geval er 0% van
mijn code wordt getest. Wanneer er wel meer code wordt getest zal in verloop van tijd het percentage omhoog gaan.

![](Images/Portfolio/sonarcloud.png)

Bij maintainability wordt gekeken naar stukjes code die beter kunnen. Bijvoorbeeld: dit object moet readable zijn, of
een object moet non-nullable zijn etc.

![](Images/Portfolio/Sonarcloud_2.png)
***

# Agile Methods

## Scrum

Projectmanagement maak ik gebruik van scrum. Ik heb voor mezelf user stories gemaakt. Uit deze user stories kan ik
tickets halen die op mijn backlog komen te staan. Per sprint zal ik kijken welke user story ik kan oppakken. Hierbij ga
ik dan de tickets realiseren die bij de user story horen.

Bij de sprint planning worden alle tickets geperiodiseerd. Wanneer een ticket af is wordt deze naar done gesleept. Dat
betekend dat een gedeelte van de user story klaar is. Wanneer alle tickets af zijn van een user story dan zal als het
goed is de acceptatiecriteriavan het ticket ook klaar zijn.

Na elke sprint heb je een retrospective. Dit betekend dat je gaat kijken, wat ging goed en wat ging minder goed, welke
aandachtspunten zijn er? Etc. Normaal gesproken doe je dit met een groep en overleg je wat erbeter kan etc. Ik heb daar
de feedpulse voor. Hierin staat voor mij precies in wat ik gedaan heb en wat er beter kan etc.

## Scrum groepsproject
Voor het groepsproject gebruiken we ook scrum. Dit doen we op de volgende manier:

**Sprints van 3 weken** - Deze sprint plannen we in met de opdrachtgever.

**We maken gebruik van een planningsbord** - Hieronder is te zien hoe ons bord eruit ziet. We hebben de volgende lijsten: User stories, Backlog, To Do this sprint, In progress, Review, Done en USer stories done.  

![image](https://user-images.githubusercontent.com/99179239/202129138-6cf11208-6f3c-4f64-a354-e29b85ab82e0.png)

**Elke proftaakdag houden we standaard een stand-up om 09:30** - In deze stand-up gaat iedereen vertellen wat ze vandaag gaan doen. Hierbij houden we het kort, we pakken het bord er bij en gaan niet te diep in op de inhoud (dat komt daarna). Mocht iemand niet aanwezig zijn op het afgesproken tijdstip, dan gaat de stand-up gewoon beginnen.

**Elke dag houden we een stant-down (na 15:00)** - Bij de stand-down bespreken we op wat er per persoon gedaan is die dag. Mochten er nog vragen/opmerkingen zijn dan wordt dat tijdens de stand-down gedaan.

**Per sprint gebruiken we ticket** - Een ticket wordt gebaseerd op een User Storie. In een ticket staat precies wat er gedaan moet worden voor een nieuwe feature toe te voegen. Hieronder zie je een voorbeeld van een ticket.

![image](https://user-images.githubusercontent.com/99179239/202131260-40aff8fb-fb59-4c99-a675-6dab5db708c1.png)

**Na elke sprint houden we een retrospective (hierbij komen actiepunten/verbeterpunten uit)** - Na elke sprint doen we dus een retrospective, hierin wordt besproken wat de minpunten zijn van de afgelopen sprint. Ook staat er in wat de pluspunten waren. Wanneer iedereen deze 2 onderdelen heeft ingevuld wordt er met iedereen gekeken naar actiepunten. Deze worden opgesteld op basis van de minpunten/pluspunten.


**Sprint review** - Na elke sprint (3 weken) wordt er een sprint review gehouden. Hier zijn de opdrachtgevers en de groep bij aanwezig. Er wordt dan een presentatie gehouden over wat we allemaal af hebben gekregen etc. Ook is er een demo die voor de opdrachtgever live te zien is. Nadat we dit gedaan hebben gaan we samen de volgende punten bespreken voor de nieuwe sprint. Hierbij geeft de opdrachtgever een voorkeur, wij kijken dan wat we af kunnen krijgen gebaseerd op "story pount". Hieruit komt voor ons de nieuwe sprint planning naar voren.

***

# CI/CD

Ik heb voor mijn SessionService API een CI/CD geschreven. Deze actions zorgen voor het testen en deployen van de SessionService. Voor het testen heb ik dus een CI geschreven die een tests uitvoert en deze is gekoppeld met SonarCloud (meer info zie "Software Quality"). 

Voor het deployen van de API komt iets meer bij kijken. Hieronder is te zien hoe doe depoyen naar Azure. In Azure heb ik een Container Registry aangemaakt, hier wordt mijn Docker Container naar toe gedeployed. Dit gebeurt alleen als ik naar de ```main``` branch doe pushen (de docker image wordt via de ```dev``` branch ook naar docker hub gepushd). Azure herkend via de Container Registry of mijn docker container is aangepast. Dan wordt die automatisch via Azure gepulld. 

![image](https://user-images.githubusercontent.com/99179239/202999566-db4b305e-a8b4-491b-86f0-b01b7a5074e5.png)

Met alleen de Container Registry staat de API nog niet live, hiervoor heb ik in Azure nog een App-Service aangemaakt. In deze App-Service is een koppeling naar de Contianer Registrty. Omdat deze altijd gelijk lopen, herkend te App-Service ook wanneer de Container Registry wordt aangepast. Als dit gebeurt dan staat de API live.

### Database
Het database moet natuurlijk ook live komen te staan. Hiervoor heb ik geen script geschreven. Ik heb via Azure een SQl Database aangemaakt. In de App-Service heb ik een connectionstring variable aangemaakt. Deze connectionstring wordt toegepast aan de Connectionstring doe in mijn applicatie staat. Op deze manier heb ik een veilige manier de ConnectionString opgeslagen.

***

# Cultural differences and ethics
### Wat is cultuur?
Cultuur is de manier waarom we bepaalde dingen doen. Het gaat over het gedrag dat we vertonen. Dit gedrag/manier waarop we dingen doen wordt vaak door een grote groep gedaan en niet alleen door jezelf. Cultuur kan voorkomen in kleding, uitspraken, handeling, overtuigingen etc. Omdat dit gedrag door een groep gedeelt wordt, zijn mensen van een andere cultuur al snel overtuigt dat dat persoon tot een andere cultuur behoort.

Cultuur ontwikkelt zich elke dag weer, er komt bijvoorbeeld een nieuwe handeling bij iedereen in. Bijvoorbeeld dat iedereen ineens na het eten een bepaalde handeling doet, of er komt een nieuwe soort kleding uit dat ineens iedereen begint met dragen. 

### Wat zijn wel bekende dimensies van culturelere verschillen? 
**Machtsafstand** - Het verschil tussen machthebbers en ondergeschikten. Wie bepaald wat er gebeurt in een cultuur en wie moet ergens naar luisteren. Bij elke cultuur is dit verschil groter als de ander.

**Individualisme versus collectivisme** - Een **individualistische** samenleving is wanneer banden tussen individuen ongedwongen zijn. In deze samenleving zorgen deze individuele mensen voor hun familie en zichzelf. Een **collectivistische** samenleving is wanneer een persoon vanaf zijn of haar geboorte wordt toegewezen aan een groep waar mensen voor elkaar zorgen in ruil voor loyaliteit.

**Femininiteit versus masculiniteit** - Als er **feminiiteit** in de samenleving is, overlappen de seks rollen met elkaar. Dat betekend dat zowel vrouwen en mannen bescheiden en teder dienen te zijn. **Masculiniteit** is wanneer de emotionele seks rollen gescheiden zijn. Bij mannen ligt het accent op prestatie en succes en bij vrouwen licht de nadruk op bescheidenheid, tederheid en de kwaliteit van het bestaan.

**Onzekerheidsvermijding** - **Onzekerheidsvermijding** is de hoeveelheid waarin mensen zich bedreigd voelen door onbekende en onzekere situaties. De mensen die hier last van hebben proberen deze situaties te ontwijken. Deze mensen hebben een behoefte aan meer regels en formaliteit.

**Termijngerichtheid** - **Langtermijngerichtheid** staat voor het behalen van beloningen in de toekomst. **Kortetermijngerichtheid** is het bereiken van positieve eigenschappen, deze zijn gericht op het verleden en heden. Ze willen repest voor tradities.

### Verschillen in cultuur
Het dragen van kleding naar school. In Nederland mag je dragen wat je wilt naar school, vaak is het dragen van petten niet toe gestaan of mutsen dragen van je hoodie mag ook niet. Maar verder mag je alles dragen. Bij Britse scholen is het dragen van een unifrom verplicht. Dit is bij heel veel andere landen ook het geval. Landen doen dit om geen onderscheid te maken tussen rijke en arme leerlingen. 

Bij ons is een opgestoken duim een positief gebaar, maar dat is in het Midden-Oosten en West-Afrika wel anders. In deze doorgaans islamitische landen is dit de equivalent van een opgestoken middelvinger. Ook in Griekenland en Australië wordt het opsteken van de duim niet gezien als een fraai gebaar.

### Wat is mijn cultuur?
Ik woon zelf in Limburg, zoals bekend wordt er in het zuiden Carnaval gevierd. Ook ik doe hier aan mee. Het eten van een lekker stukje Limburgse vlaai op een verjaardag kan bij mij thuis niet uit blijven. Dit is in andere delen van het land niet het geval. Ik woon in het dorpje Sevenum, dit spreken we hier echter uit als "Zearum". Dit komt door ons dialect, ik zelf spreek het niet maar het behoord wel tot onze cultuur.


### Can you give examples for cultural differences that you have experienced in your study or life? How do you explain these differences?  

### What is your culture? 


***

# Requirements en Design

## Requirements

Voor de requirements heb ik gebruik gemaakt van deze Youtube video. In deze video wordt precies uitgelegd hoe de
functionele en niet-functionele requirements van een applicatie er uit moeten komen te zien. Deze heb ik toegepast in
het “CardGames” document.

## Design

Voor het design van de applicatie heb ik een C4 model gemaakt. Dit C4 model staat beschreven in dit document.
***

# Business Processes
Voor een hele overzicht ga naar: [C4 Model Firgma](https://www.figma.com/file/veAOF6YmH4w2jec82FRp2w/C4-Model-CardGames?node-id=0%3A1)
# C1:
![image](https://user-images.githubusercontent.com/99179239/194816629-fb029521-d331-4f1d-b3a3-0504cac19100.png)

# C2:
![image](https://user-images.githubusercontent.com/99179239/194825447-c0ff6730-28bc-4ed1-8060-96c8ee8a2bec.png)

# C3:
![image](https://user-images.githubusercontent.com/99179239/194830622-a7a25178-13ce-47a6-8554-86337fd04fca.png)
![image](https://user-images.githubusercontent.com/99179239/194830724-ad32e3b9-5b64-4501-a444-e0bf47384ef3.png)

***

# Professional

Tijdens de proftaak opdracht met de groep Mediaan-DMA (proftaak groep 3 klas S3DB04) toon ik dit vooral aan. Hierin ga
ik professioneel op met mijn groepsgenoten. Hiervoor hebben we afspraken opgesteld waar we allemaal over hebben
ingestemd. Deze staan hier beschreven.

Voor het project ben ik de eerste sprint scrum master geweest. Dit betekend dat ik het bord van GitHub goed bij moest
houden en de groepsgenoten hierin moest begeleiden zodat ze dit ook gaan snappen.

Qua communicatie met de stakeholders gaat het goed. We hebben nu 1 oplevering gehad. Deze oplevering verliep soepen en
kregen complimenten over hoe goed de presentatie was.
