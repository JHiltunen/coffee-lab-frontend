# coffee-lab-backend

Frontend for coffee-lab app. Allows you to interact with the coffee-lab-backend.

## Demo

![Home page](https://user-images.githubusercontent.com/37395957/156986192-8a28243f-a43e-48ec-a257-6a8b8a599216.png)

---

## Install

    $ git clone https://github.com/JHiltunen/coffee-lab-frontend.git
    $ cd coffee-lab-frontend
    $ npm install

## Configure app
**NOTE** App is configured to use `https://coffee-lab-backend.herokuapp.com/` as a backend url.

**Change the below only IF you host the coffee-lab-backend server on some other address!**

Open `/utils/variables.js`. You will need to:

- Change `baseurl` to match address of your server

## Running the project

    $ npm start

    press W to open in web

---

## Requirements for development

For development, you will only need Node.js and Node.js package manager, installed in your environement.

### Node
- #### Node installation on Windows
  Install [node.js](https://nodejs.org/en/) to get the package manager **npm**

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.14.0

    $ npm --version
    8.3.1

---

