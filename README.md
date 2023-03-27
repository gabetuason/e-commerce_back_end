# e-commerce_back_end

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a back end for an E-commerce site that has a working Express.js API and uses Sequelize to interact with MySQL database.
Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) and Node.js v16. Also inside is a Package.json for metadata and dependencies, which allow package managers like `npm init` to install. See installation and usage for proper use of the application. This project is built to showcase an example of a back end E-commerce site that contains categories, products, product-tag and tags (seeds). Each of these seeds go through its own dedicated model in the models folder that define and Initialize its attributes and options. Also inside the models folder is the index.js which includes the associations for each (example: Categories have many Products). The API routes are responsible for the utilization of the create, read, update and delete in MySQL. Another thing to mention is that this project supports the `await` and `async` features to write asynchronous code, for easier readability and maintainability. Basically, async is used as an function that pause its execution and return a promise. The await can only be used inside an async function. When await is used, the function is paused until the promise is resolved.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Assure that node.js is installed preferably version 16 (stable), found on https://nodejs.org/en/download/. To make sure the application is running correctly, the user needs to install packages. To install these packages, the user should run the following command in the terminal: `npm i inquirer@8.2.4` or `npm i`. When installing, it is important that you are in the correct directory otherwise issues may transpire.

Please also install these packages:
- `npm install mysql2` 
- `npm install dotenv` (for sensitive information)
- `npm install express`

Also make a .env file for user details, this is sensitive information.
- `DB_NAME = "ecommerce_db"`
- `DB_USER = "root"`
- `DB_PASSWORD = "Your Password"`


## Usage

For correct usage. Run the following commands in your terminal:
1. mysql -u root -p 
2. Enter your password 
3. source ./db/schema.sql; 
4. quit MySQL then type `node seeds/index.js`



After installing the required files/packages above and running the commands. In your prefered terminal type: `npm start`. At this point you can use a REST client such as insomnia (https://insomnia.rest/) to look through and change the databases. There is GET, POST(create), PUT(update) and DELETE requests. For example to view all categories user should choose GET option and type: `http://localhost:3001/api/categories/`. Please view the API routes folder and screenshots(images folder) with the CRUD operations to understand working routes.

Examples of working routes:


![screenshot](https://github.com/gabetuason/e-commerce_back_end/blob/develop/images/insomniaCRUD.JPG)

Please view video demonstration below for example of usage.

Video: https://watch.screencastify.com/v/aRuabzjoqNpnNIvfdvMe

## License

The project is licensed under: MIT License. To see the license permissions for commercial and non-commercial use, check the link https://opensource.org/licenses/MIT

## Contributing

This is an open source, feel free to use the e-commerce_back_end for learning purposes. It is important to mention me as a contributor for distribution or modifications.
  
## Tests

During use, it should have node_modules and package-lock.json added in the file directory. To see if application processed accordingly, API routes should be working in insomnia.
  
## Questions

For any questions about the application, please contact gabetuason24@gmail.com or view the github https://github.com/gabetuason to find me
