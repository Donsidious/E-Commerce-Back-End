# Module-13

Week-13 Challenge (Object-Relational-Mapping)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

- [Screenshots](#screenshots)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Features](#features)

- [License](#license)

## Description

This software, crafted for online retail companies, leverages Sequelize for MySQL database interactions. Its role is to keep an up-to-date record of relevant sales and inventory categories, products, and tags in the e-commerce sector. The integration of Sequelize as an ORM (object-relational mapping) tool enhances the project by boosting code readability, reusability, and structure, moving beyond mere MySQL queries.

Sequelize's adoption facilitates the division of large files into smaller, more manageable segments, fostering better code organization. This method is instrumental in isolating bugs, adhering to the DRY (Don't Repeat Yourself) principle, and ensuring the code's long-term maintainability.

The project lays the groundwork for an intricate backend system, interfaced through platforms like Insomnia. This tool enables users to test API route functionalities within the code, allowing them to view, add, update, and delete database data without a graphical user interface (UI).

A significant hurdle during development was mastering table joins, especially the connections between Product (belongsToMany Tag through ProductTag) and Tag (belongsToMany Product through ProductTag). Although these relationships are fairly straightforward, they can become intricate with exclusive reliance on MySQL queries.

Looking ahead, this application can evolve through the integration of unit testing and the addition of new database components, supporting the growth and evolving needs of the business.

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1C5QXMtKLXKnhVBNKIkKRLjaPBuFZa7Kh/view

## Screenshots

![Screenshot2-week-13-challenge](https://user-images.githubusercontent.com/120127903/236879182-e938d80e-5931-4389-85ee-214c6ce627bd.png)

## Technologies Used

This application is powered by Node.js (v16.19.1), Express.js (v14.17.1), JavaScript, MySQL, and Sequelize (ORM). It utilizes the node package manager (npm) dependencies sequelize (v5.22.5), mysql2 (v2.3.3), express (v4.17.1), dotenv (v8.6.0), and nodemon (v2.0.3). Also, the Insomnia application was utilized to test the functionality of routes within the program.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Installation

1. Clone the repository using the command: `git clone https://github.com/Donsidious/E-Commerce-Back-End`.

2. Install VS Code if you don't have it, and open the cloned repository in VS Code.

3. Install node.js v16 using the terminal. If you have homebrew, use the command `brew install node@16`. Consult the documentation for variations in the installation process.

4. After installing node.js v16, run `npm init -y` in the terminal to initialize the project and create a package.json file.

5. Use the terminal to install the application's dependencies with `npm i`. Specific commands for each dependency are:
   - For sequelize: `npm i sequelize`
   - For mysql2: `npm i mysql2`
   - For express: `npm i express@4.17.1`
   - For dotenv: `npm i dotenv`
   - For nodemon: `npm i nodemon`

6. Create a .env file in the root directory of the repository, including database name, MySQL username, and MySQL password. This is necessary for running the application and allows connection.js to use these environmental variables.

7. If you don't have a MySQL account, create one. Refer to the MySQL installation guide at https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/.

8. After installing all dependencies, create the database. Navigate to the db directory containing schema.sql, open a MySQL shell with `mysql -u root -p`, and enter your password.

9. In the MySQL shell, run `source schema.sql` to create the database.

10. Seed the database by navigating to the root directory and running `npm run seed`. This step is important to perform from the root directory due to the location of the .env file.

11. Start the server by running `npm start` from the root directory.

12. Use applications like Insomnia to test the functionality of the program's routes.

## Features

Features of this application include the users ability to manage the backend of their company's e-commerce website through Express routing. The functionality built within the application allows for users to navigate their company's database with GET routes, add and update new catagories, products, and tags to their website with POST and PUT routes, and delete any catagories, products, and tags no longer in use or that may be currently out of stock with DELETE routes.

## License

NOTICE: This application is covered under the MIT License

