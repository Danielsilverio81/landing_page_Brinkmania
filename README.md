# landing_page_BrinkMania

Landing page of a family business in the toy rental business in the metropolitan region of Belo Horizonte: Matozinhos MG Brazil
<br>

## Tabela de Conteúdo

- [landing\_page\_BrinkMania](#landing_page_brinkmania)
  - [Tabela de Conteúdo](#tabela-de-conteúdo)
  - [Overview](#overview)
    - [Responsiveness:](#responsiveness)
  - [Technologies](#technologies)
  - [Install](#install)
    - [To run this project locally, follow the steps below:](#to-run-this-project-locally-follow-the-steps-below)
  - [Local Configuration and Execution](#local-configuration-and-execution)
  - [License](#license)
## Overview

Project created with the intention of attracting new customers to the company in the region where it operates.<br>
The page has a direct contact button for WhatsApp, 3 sections with information
important information about the company and the services provided, a button to go up to the top was also added to improve user usability and interactivity
<br>

<img src="./src/images/gifs/BrinkManiaLandingP.gif" width="750px" height="400px">
<br>

### Responsiveness:
<img src="./src/images/gifs/BrinkManiaLandingP_Responsiveness.gif" width="900px" height="600px">
<br>

## Technologies

- [HTML](https://www.w3.org/TR/html52/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Sass](https://sass-lang.com/)

## Install

### To run this project locally, follow the steps below:

- clone the repository:
<br>
ssh:
<br>

```bash
git clone git@github.com:Danielsilverio81/landing_page_Brinkmania.git
```

https:
<br>

```bash
git clone https://github.com/Danielsilverio81/landing_page_Brinkmania.git
```

- install npm if you don't have it installed:

```bash
   npm install
```

- execute:

Open the index.html file in your preferred browser. You can also use a local server, such as Visual Studio No Code Live Server.
<br>
If you prefer
<br>

```bash
   npm install -g live-server
```

Then, inside the project directory, run:

```bash
   live-server
```
<br>
Or:
<br>
enter your html file in vs code and use the keyboard shortcut alt+l+o


## Local Configuration and Execution

To run this project locally, follow these steps:

1. **Dig the repository:**

Click the "Fork" button in the top right corner of the repository page. This will create a copy of the project in your GitHub account.

2. **Clone your forked repository:**

```bash
 git clone https://github.com/Danielsilverio81/landing_page_Brinkmania.git
 CD your-project
 ```

1. Install Dependencies:

Make sure that Node.js and npm are installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).

```bash
   npm install
```

1. **Execute the project:**

Open the 'index.html' file in your preferred browser or use a local server. If you're using Visual Studio Code, you can install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

If you prefer to use an on-premises server, you can install Live Server globally using:

''Bash
 npm install -g live-server
 ```

Then, inside the project directory, run:

''Bash
 Live Server
 ```

The server will be accessible in 'http://localhost:8080' by default. Open this address in your browser to view the project.

<br>

- install sass if you want to make changes to a fork of the project and send pull requests:
  
```bash
   npm install -g sass
```

and run in Terminal:
<br>

```bash
   sass --watch --style compressed src/scss/index.scss:src/css/style.min.css
```

after running this command, run the command to leave an example file not connected to the html just for easy reading of the obtained css
<br>

```bash
   sass --watch src/scss/index.scss:src/css/styleDevelopment.css
```
<br>
Any error returned check the path of your folders in the command are correct or if you actually have node, npm and sass installed

5. **Make Your Contributions:**

- Create a new branch for your resource: 'git checkout -b feature-new'
 - Make your changes and commit them: 'git commit -m 'Add a new resource''
 - Push your branch to the fork: 'git push origin feature-new'
 - Open a pull request in the original repository.

By following these steps, you should have the project running locally, allowing you to contribute and

## License

 This project is licensed under the [MTI LICENSE](https://mit-license.org/).