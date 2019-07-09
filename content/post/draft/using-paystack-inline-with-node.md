---
title: "Using Paystack Inline in your Node Application"
description: ""
date: 2019-05-05T02:24:31+01:00
draft: true
tags: []
image: ""
---


use this as guideline on the express part sp you focus on oaystack and images and wordings
https://blog.stephsmith.io/tutorial-google-sheets-api-node-js/


In this tutorial, you'll learn how to integrate Paystack payment system in your Node application using the paystack inline method.

Paystack is a Modern online and offline payments for Africa. It helps businesses in Africa get paid by anyone, anywhere in the world.

Before you can start integrating Paystack, you will need a Paystack account. Create a [free account](https://dashboard.paystack.com/#/signup) now if you haven't already done so.

After creating an account, the next thing is to sign in to your new Paystack account. On your dashboard you will find your public and secret key. We will make use of the public and secret key for this tutorial.

You need to have basic experience with node and express to be able to follow along.

To get started:

- create a new folder on your computer, name it `node-paystack-inline` or whatever you want, this is not important.

- Open the directory with VSCode, then `cd` into the directory using the terminal and run `npm init -y` to initialize a new project. This will enable us to install our dependecies we will need to build our app.

This will give us the following output:

```json
{
  "name": "paystack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Now let's install our dependencies for the project.

From the terminal, run

```js
npm install --save express ejs
```

This will create a dependencies object in out `package.json` file

Then we need to create a new file named `index.js` in the root of our directory.

In `index.js`, lets add our express boilerplate so we can start our server.

```js
const path = require('path');
const routes = require("./routes/transaction");
const express = require('express');

// create our Express app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our ejs files
app.set('view engine', 'ejs'); // we use the engine ejs

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server is listening'));

```

You can see we have a file call `transaction.js` in the routes folders we haven't created yet. So go ahead and create a `routes` folder in the root of the project and inside the routes folder, create a `transaction.js` file.

Now, we need to create a `views` folder in the root of the project, where we will create the file we will render to the page, so create an `index.ejs` inside of the views folder and add the following code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>Document</title>
  </head>
  <body>
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-8 col-xl-6">
            <div class="row">
              <div class="col text-center">
                <h1>Enter your details to pay</h1>
                <!-- <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p> -->
              </div>
            </div>
            <form id="paymentForm" class="form-group">
              <div class="row align-items-center">
                <div class="col mt-4">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    id="email-address"
                  />
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="amount"
                    id="amount"
                  />
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    id="first-name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    id="last-name"
                  />
                </div>
              </div>
              <div class="form-submit row align-items-center mt-4">
                  <button type="submit" class="btn btn-primary btn-lg btn-block">Pay</button>
                </div>
            </form>

           
          </div>
        </div>
      </div>
    </section>

    <script type="text/javascript" src="https://js.paystack.co/v1/inline.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
  </body>
</html>

```

If you notice, we have some script files. The first one is the paystack url which we will make our request to, while the second one is our custom js file we will create to make the request for us.

Then in our transaction.js file, we do

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;

```


Before we can start the server, let's install a package that will help us to keep the server running so we don't have to keep restarting it.

```js
npm install nodemon --save-dev
```

Notice the `--save-dev`, we want to install the nodemon package as a dev dependecy since it doesn't affect the application directly

Then, add a scrit to your package.json

```json
{
  "name": "paystack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.4",
    "ejs": "^2.6.1",

  },
  "devDependencies": {
    "nodemon": "^1.19.0"
  }
}

```

Finally, from the terminal, run 
```js 
npm run dev
```
This will keep our server running and watch for any file changes

Now, if we go to the browser and visit `http://localhost:5000`, we should see our webpage displaying. This means our application is working. Good job!


>It's important to note that this is a really simple example without the use of database, normally the information here is expected to come from the database, like the first and last name is to come from the logged in user and so on, you get the point already  but in our case, the user will input it so we can send it to paystack api.

Now that we have our view setup, let's continue.

We need to have a js file when we will enter the logic for paystack, so create a public folder in the root directory then a js folder inside, then in the js folder, create a script.js file.

In the script.js file, add the following code

```js
const paymentForm = document.getElementById("paymentForm");

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();
  var handler = PaystackPop.setup({
    key: "pk_test_6f7ba4d51b78e3b78da8f5990a37326419e984fa", // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    firstname: document.getElementById("first-name").value,
    lastname: document.getElementById("last-name").value,
    ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference.
    onClose: function() {
      alert("Window closed.");
    },
    callback: function(response) {
      window.location =
        "http://localhost:5000/verify?reference=" + response.reference;
    }
  });

  handler.openIframe();
}
```

The following parameters are explained

- **key:** Your pubic test Key from Paystack. You can find this on the settings page in the API keys and webhooks tab.

- **ref:** Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed. You can remove the line entirely so the API will generate one for you

- **email:** The customer's email address.

- **first name:** 

- **last-name:** 

- **amount:** Amount in kobo.

- **callback:** Javascript function that should be called if the payment is successful

- **onClose:** Javascript function that should be called if the customer closes the payment window


As you can see, in the callback, we are redirecting the page to a url and we are also sending a query alongside it, the query is from the response paystack gives us.

Now we need to handle this route from our backend, this route is where we verify the payment so there won't be any error

To do this, we need a node library to help us make our task easier.

So go ahead and install the node paystack package:

```js
npm install paystack --save
```


In the routes transaction file, add the paystack library and create a post request

```js
const express = require('express');
const router = express.Router();
const paystack = require('paystack')(process.env.PAYSTACK_KEY); // put your secret test key here

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/verify', (req, res) => {
    const { reference } = req.query
    paystack.transaction.verify(reference, function(error, body) {
      console.log(error);
      console.log(body);
    });
  })

module.exports = router;

```

You will notice we set our paystack key in our environment variable. To do this, ensure it's the same tab we have the server running, stop it and run the command: 

```js
export PAYSTACK_KEY=sk_test_xxxxx // pasyatck test private key
```
After setting it up, we can restart our server again using `npm run dev`


If everything set up, let's test out application

Go to the web browser and fill in the form and click on the pay button. This will open up a modal, since this is a test demo and not a real application, click on the `use a test card` below the submit button. You will see some options, chose the success button and paystack will process the details for you. You will see a modal telling you success, and then the callback method will run, which will redirect us to the route that will verify our payment.

At this point, we have done everything, we can check for error and display info to the success and it if's successful, we can save to our database. As part of security, we should also do some checks before saving to database, such as checking if the payment has occur before, the amount and other checks you deem fit.

Our application is ready and you have successgully integrated paystack into your application.

