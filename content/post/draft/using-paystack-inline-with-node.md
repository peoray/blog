---
title: "Using Paystack Inline With Node"
description: ""
date: 2019-05-05T02:24:31+01:00
draft: true
tags: []
image: ""
---

Recently, I was trying to implement a payment system into the application I was building at work to receive payments. After much research, I decided to go with oaystack becasue they have a more developer friendly nature and seems to be on every dev's good book. As this is my first time of attempting something like this, it's normal I became sceptical if I'd pull it off. At first, the docs didn't say much

You need to have basic experience with node and express to be able to follow along

Paystack has two methods which you can you can use to receive payment on your application: 

The standard Method: This is when you have to redirect to paystack checkout page and fill in your bank details after which you will be redirected to a success or error page and finally back to your application with a response of the transaction

The inline method: This is the method that involves loading a popup form on your application like a modal with the paystack checkout form opening up like a modal on your appplication and the user can enter their card details and continue with the process. This method is mostly preferable to devs because it means you don't have to go outside your application

In this turtorial, we will be using the inline method.

To get started:
- create a new folder on your computer, name it node-paystack-inline or whatever you want, this is not important.
- Open the directory with vscode, then from the project, run npm init -y to initialize a new project. This will enable us to install our dependecies we will need to build our app

Now let's install express and ejs

- also install nodemon as a devdependency so we don't have to keep our server running

create a new file called index.js

- in out index.js, lets add our express boilerplate so we can start our server

add a scrit to your package.json
<!-- in your terminal, run  -->
or just run nodemon index

create a routes folder and a new file called index.js and create a get route and send a hello weteroos

require the route in your index,js and use it there

then go to the broswer and type in localhost:3000, you will see (look for old town road song title)

Good, we have been able to setup a basic express server but we don't want to just send text to the browser, we want to be able to render html html so we can create a form so the user can fill in their details. we will need a templating engine, we will be using ejs, so we need to install it
npm install ejs

in our index.js, add this line to our code
app.use()

This will tell express this is what we are using for our view engine while the express.url will allow us to receive data from the user (see mosh and other tuts for this)

now, we need to create a views folder, where we will create the file we will render to the page, so create index.ejs

add this into the code, this will create a form for us

It's important to note that this is a really simple example without the use of database, normally the information here is expected to come from the database, like the user is to come from the login user and so on, you get the point already  but in our case, the user will innput it so we can send it to paystack api.

Now add a route to the get and render the index.ejs file, go back to your browser and refresh the page and you should be seeing your form

Now that we have our view setup, let's continue.
We need to have a js file when we will enter the logic for paystack, so add the public path to your index.js, then create a public folder and a js folder inside, then in the js folder, create a app.js file. add it to your view index,ejs so we can have acces to the elements on the page


The page this code, when we submit the form, after the uer==ser fill in their c