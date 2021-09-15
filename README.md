# Tech Blog

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Table of Contents

[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  
[License](#license)

# Description

This project is little more than a simple blog running a NodeJS backend on a Heroku
server and using a MySql backend. Ostensibly themed as a "tech" blog, nothing really
restricts what a user can post other than there is no support for formatting, code
or images

# Installation

To run a local instance of the blog, clone the repo to the machine to  
be used as a server

run

`npm i`

or

`yarn`

Create .env file and populate it with the following data as appropriate to your setup:

```
DB_NAME=blog_db
DB_USER=<username-on-your-MySql-instance>
DB_PASSWORD=<your-MySql-password>
```

Run the schema.sql found in the db directory to create a database

(Optional) Seed the tables with sample data by running

`npm run seed`

Start the server with

`npm run start`

# Usage

This project can be used as a simple text-based blog. The theming  
is rather flexible and may have room for improvement in the future

# Contributing

To contribute to this project:

- Find or open an issue related to a bug or desired feature
- Create a fork of the repo
- Make changes within the fork to address the issue
- Create a PR if you feel improvements have been made over the current iteration

# Tests

npm run test

# Questions

Q: How do I comment on a blog post?  
A: Clicking the title of a post will take you to that post's page  
toward the bottom there is a button to post a comment

Q: Can I delete or update a post?  
A: Opening the dashboard will display all posts you have authored  
with buttons to update or delete each one

Q: Can I edit or delete a comment?  
A: No, shut up

[Maintainer](https://github.com/iatenine)  
For further questions, direct emails [here](mailto:FullJackDevelopment@gmail.com)

# License

This project is covered under [The MIT License](https://opensource.org/licenses/MIT)
