# simpleLibrary example - (Angular frontend + REST API based on Api-Platform framework)
simpleLibrary is a small library management proof of concept based on Symfony Api-Platform framework (backend folder) and Angular (frontend folder).

![Stocks API image](http://bartekblog.prv.pl/api_platform/api0.png)
![Stocks API image](http://bartekblog.prv.pl/api_platform/api1.png)
![Stocks API image](http://bartekblog.prv.pl/api_platform/api2.png)
![Stocks API image](http://bartekblog.prv.pl/api_platform/api3.png)
![Stocks API image](http://bartekblog.prv.pl/api_platform/api4.png)

# Requirements
**1** - PHP 7.2+

**2** - MySql 8+

**3** - Composer

**4** - NodeJS 13.7.0

**5** - NPM 6.13.6

**6** - Angular 8+

# How to set up - Angular frontend
**1** - Download Angular dependencies, run in project root directory terminal command: **npm install**

**2** - Set proper path to backend endpoints (backend folder application) in **environment.ts** file (**src/environments/environment.ts**)

**3** - To run application in development mode run terminal command: **ng serve**

# How to set up - Api-Platform backend
**1** - Download Symfony dependencies, run in project root directory terminal command: **composer install**

**2** - Set proper database credentials in **.env** file and create database: **doctrine:database:create**

**3** - To run application in development mode run terminal command: **symfony server:start**
