# Horizontal Flow Git/Process
##### Naam: Brett Mulder
##### Klas: S3DB04

## What are we making?
I am creating an application to play card games with each other. This idea was coming up to me when I was sitting on the terrace with my friends. We had not brought any playing cards with us.

## Which languages are we using?
It is a mobile web application made with Vite + VueJS. For the backend, I am using Asp net Core web API. [LO 1](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#full-stack-web-application)

## Before we start developing
Before we start developing we need to set up our database. We can do that by going to our SSMS application in Windows. Here under databases, we create a new empty database called "SessionCardGames". Filling out the database comes later.

## How does my project looks like? 
This is the flow of my API. [LO 6](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#requirements-en-design)

![image](https://user-images.githubusercontent.com/99179239/207327102-5fca30a8-9d05-4777-b686-2627a2c022ad.png)

## How does our flow look like
1. Creating a new User Story and all its needs [LO 8](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#professional)
2. Creating tickets/features for this User Story [LO 3](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#agile-methods)
3. Cloning the project
4. Change connection string in your code 
5. Creating a new branch using GitFlow [LO 3](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#agile-methods)
6. Start developing
7. After developing create a Test (if needed) [LO 2](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#software-quality)
8. Pushing everything to your branch
9. Testing [LO 2](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#software-quality)
10. Finishing git flow feature
11. Create a pull request to the dev branch
12. Move the ticket to "done"
13. Moving your new version to the live version [LO 4](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#cicd)
14. If the user story is done, mark the user story on the board as done [LO 8](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#professional)

## Creating a new User Story and all its needs
Here I have an existing user story with some acceptance criteria. 
This is the board you want to go to: https://github.com/orgs/Fontys-Brett-Mulder/projects/2

![Image](https://user-images.githubusercontent.com/99179239/207065010-f050ec20-34b1-4830-a294-fba5ec32d9bd.png)

Here we have the acceptance criteria, we want to finish the one with the red line around it. "As a host, I want to start a game"
![Image](https://user-images.githubusercontent.com/99179239/207065178-a37fadf6-ec8f-4fdd-b064-9dd70726d116.png)

## Creating tickets/features for this User Story
We can create our new ticket so we know which acceptance criteria we want to resolve. In this ticket I have some information, look inside to get a better idea about what to make. This ticket is now sitting in "To Do This Sprint". Move this to "Doing". 

![image](https://user-images.githubusercontent.com/99179239/207288129-583d8961-1e8e-4448-a69c-4c02d13afbcb.png)

## Cloning the project
Clone the "SessionService" api using 
```
git clone https://github.com/Fontys-Brett-Mulder/SessionServiceAPI.git
```

## Change connectionstring in your code
In the appsettings.json, there is a defaultconnectionstring. In here change "MSI" to your local server data
Old: 
```
"ConnectionStrings": {  
  "DefaultConnection": "Server=MSI;Database=SessionCardGames;Trusted_Connection=True;"  
}
```
Yours (change "yourdata" to yours):
```
"ConnectionStrings": {  
  "DefaultConnection": "Server="YourData";Database=SessionCardGames;Trusted_Connection=True;"  
}
```

## Creating a new branch using GitFlow
Follow the instructions of this readme file. Your new feature branch should match the name of your ticket. https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Research/GitFlow.dotresearch.md#how-to-use-gitflow

## Start developing
When you are in the new branch, you can start creating your features for your ticket. In this example, you should create an endpoint that updates the session model and "IsStarted" should be set to "true".

## After developing create a Test (if needed)
When you have created your new feature for updating the "IsStarted" field. You need to create a unit test for this feature. 

## Pushing everything to your branch
When you are done you need to push everything to your new branch using 
```
git add .
```

```
git git commit -m "Your commit message"
```

```
git push origin feature/yourbranchname
```

## Testing
When you push something to your new branch. There will be tests running. To review this visit: https://github.com/Fontys-Brett-Mulder/SessionServiceAPI/actions

## Finishing your git flow feature
When everything is pushed to your branch, and your ticket is done. You can finish your git flow feature using.

```
git flow feature publish yourbranchname
```

## Create a pull request to the dev branch
When everything is done. You can go to https://github.com/Fontys-Brett-Mulder/SessionServiceAPI/pulls and create a pull request to the dev branch. Here you see your added changes. When this is done it needs a required review.

## Move the ticket to "done"
To keep our scrum board up to date. Move your ticket to "Done". This way everyone in the team knows what the status is of your added feature and so your ticket. 

## Moving your new version to the live version 
Now the added feature is done. From here on we can deploy our new version to the live version. You can do this by creating a new pull request. Set the base branch to "main" (this is the branch where it will go to). And set the compare branch to the "dev" branch. This contains all the the changes from your added feature. 

#### Script for putting it live
[This](https://github.com/Fontys-Brett-Mulder/SessionServiceAPI/blob/dev/.github/workflows/azure.yml) script will be activated when there is a push to the "main" branch. This script is made to deploy your "main" branch to Azure. After that when you visit https://card-games-api.azurewebsites.net/. The new version will be live. (**This might take around 10 minutes to get it fully worked again**)

## If the user story is done, mark the user story on the board as done
Because our user story is not done yet. We cant mark this user story as done. But we can mark the acceptence criteria "Als host kan je het spel starten". 

![Image](https://user-images.githubusercontent.com/99179239/207065010-f050ec20-34b1-4830-a294-fba5ec32d9bd.png)


# Summary
At every point I have put the learning outcome to see that everything comes together. I wrote this kind of tutorial I wrote everything in English, because I wrote it in English, everyone can read it. This comes out to [LO 5](https://github.com/Fontys-Brett-Mulder/CardGames/blob/main/Documentation/Portfolio_semester3.md#cultural-differences-and-ethics)

