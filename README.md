<h1>GURU JI <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/teacher(1).svg" width="5%"></a></h1>  
<p align="center"><img src="readme_assets/guruji_gif(1).gif"></p>

<h2>About Us <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/reading.svg" width="4%"></a></h2>
<p>
 
[![GitHub contributors](https://img.shields.io/github/contributors/Namanl2001/MERN-Gurujii-dev.svg)](https://github.com/Namanl2001/MERN-Gurujii-dev/graphs/contributors/)
[![Issues](https://img.shields.io/github/issues/Namanl2001/MERN-Gurujii-dev)](https://github.com/Namanl2001/MERN-Gurujii-dev/issues)
[![PRs](https://img.shields.io/github/issues-pr/Namanl2001/MERN-Gurujii-dev)](https://github.com/Namanl2001/MERN-Gurujii-dev/pulls)
[![Forks](https://img.shields.io/github/forks/Namanl2001/MERN-Gurujii-dev?style=social)](https://github.com/Namanl2001/MERN-Gurujii-dev) 
[![Stars](https://img.shields.io/github/stars/Namanl2001/MERN-Gurujii-dev?style=social)](https://github.com/Namanl2001/MERN-Gurujii-dev)

</p>

<p>
 We have created this platform to help students find the best tuition teachers in their city quite easily. You just have to enter the pin code of your city and we will show you the best teachers in your locality along with their teaching styles and their qualification from which you can select the best teacher for yourself.
</p>

<h2>Technology Stack <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/atom.svg" width="4%"></a></h2>

<p>

<img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> 
<img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> 
<img src="https://img.shields.io/badge/reactjs%20-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=blue"/> 
<img src="https://img.shields.io/badge/Node.js-%234ea94b.svg?&style=for-the-badge&logo=node.js&logoColor=white"> 
<img src="https://img.shields.io/badge/git%20-%23121011.svg?&style=for-the-badge&logo=git&logoColor=white&logoWidth=20">

</p>

<h2>Getting Started <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/rocket.svg" width="4%"></a></h2>
<h3>Want to contribute? Follow the steps below to set it up locally.</h3>

```
# Clone this repository
$ git clone https://github.com/your-username/MERN-Gurujii-dev.git

# Go into the repository
$ cd MERN-Gurujii-dev

# Install dependencies
$ yarn dep0
$ yarn dep1

# Run website
$ yarn dev
```

<strong> This should launch the website on `localhost:3000`. <strong>

We have used proxy so all the requests made to the backend from the frontend will be served at
`localhost:5000` at which our backend is running.

<h2>Note <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/alarm.svg" width="3%"></a> </h2>
<p>
 
- This project uses yarn to install the dependencies. Don't use npm install.

- To run the app locally, if you do not want to use the database at all, comment out the lines that reference the `backend/config.js` file:

  - Lines 9, 40 of `backend/server.js`
  - Line 3 of `backend/controllers/user.controller.js`

- There is a route that sends emails - Line 82 of `backend/controllers/user.controller.js`. Remember to replace the auth credentials with your own before testing the route.
- Remember not to push any personal data like mongo uri or mail credentials.

<h1>Backend</h1>
<h2>Local Setup </h2>
You can run the backend of the app locally by following these steps

<p>

- Install dependencies theough `yarn` by navigating to the backend folder.

```
  # Go into backend folder
  $ cd backend

  # Install dependencies
  $ yarn install
```

<p>

- For security reasons, we have made the MongoDb URI secure, by not adding a hardcoded username and password. For development purposes, you can install, MongoDB locally or use the online version. Create a .env file same as the given env file (.env.example) in backend

  - `MONGODB` is for API calls
  - `MONGODB_TEST_URI` is for unit test cases
  <p>

- You have to start MongoDB server locally to establish a database connection.

- Also create your own `backend/config.js` file with proper credentials, following the format given in `backend.config.example/js`.

<p>

- The project uses `nodemon` as a devDependency for runnning backend in development mode.

```
  # run in development mode
  $ yarn dev
```

<p>

- Once the server is up and running, you will see two messages in terminal :

  - Server is running on port: 5000
  - MongoDB database connection established successfully
  - Now your backend is running successfully in development mode.

<h2>Understanding Backend Flow</h2>

- Go through the code and try to understand the code flow. On a high level, the flow goes like:-

  - An API is hit from the client-side.
  - The main route is matched with a route in various JS files in `routes` folder.
  - A `router` is selected based on the route given, and the request is passed on to a `controller` in `controllers` folder.
  - The controller receives the request and function accordingly. Finally, a response is sent in JSON format which is processed in the frontend-side.
  - Additionally, it contains `middleware` folder which currently contains admin authentication middleware.
  - Overall, the control sequence is `client request -> server/routes.js -> server/api/controllers/{some controller}/router.js -> server/api/controllers/{some controller}/controller.js -> client response`.

<hr>

<h1>Frontend</h1>
<h2>Quick Setup</h2>
To start the frontend, you need to install dependencies in the `package.json` file in the root folder.

```
  # install dependencies
  $ yarn install
```

This will install dependencies required to start the `React` server.

- Once the dependencies have been installed, you can run the server locally on your system on `localhost:3000`.

```
  # start react server
  $ yarn start
```

<h2>Contribution <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/support(1).svg" width="3%"></a> </h2>
<p>
Contributions are very welcome! See our <a href="https://github.com/Namanl2001/MERN-Gurujii-dev/blob/master/contributing.md">CONTRIBUTING.md</a> for more information.
</p>
<h2>Want to test your changes on mobile phone? <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/smartphone.svg" width="3%"></a></h2>

<p>
 
- To view on mobile, your laptop and mobile phone should be on the same network.
- Run ipconfig on the terminal, enter `<ip4address>:3000` as URL on the mobile web browser.

</p>

<h2> Demo <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/play.svg" width="3%"></a></h2>

Click Here to view the deployment!

[![Deploy](https://raw.githubusercontent.com/nikitakapoor1919/Buttons/main/guruji.png)](https://guru-jii.herokuapp.com/)

<div>
<img src="https://user-images.githubusercontent.com/63860014/110734802-8f68c480-824e-11eb-910d-7fab7f404fb2.gif"/>
</div>

<strong><em> Great! Now you are good to go. Open/pick an issue, discuss your idea, make the changes in your feature branch and create your first pull request in this repo.</em></strong>

<em>Interesting?? Star this Repo <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/star.svg" width="3%"></a> </em>

<h2> Open Source Program <a><img src="https://github.com/Samridhi-98/Images/blob/master/Images/open-source.svg" width="3%"></a></h2>

This Project is a part of the following Open Source Programs

- GirlScript Summer of Code is a 3 month long Open Source program during summers conducted by the GirlScript Foundation which was started in 2018, with an aim to help beginners to get started with Open Source Development while encouraging diversity. Throughout the program, participants contribute to different projects under the guidance of experienced mentors. Top participants get exciting goodies and opportunities.

- GirlScript Summer of Code 2020 witnessed overwhelming participation and the 2021 edition will carry the legacy forward while promising to be even more impactful and grand.

<img src ="https://miro.medium.com/max/3000/1*CKaCnG11p5i0KiQyaoyBvg.png" alt ="Girlscript Summer Of Code"></img>

<h2>Contributors:</h2>

### Credits goes to these people:✨

<table>
	<tr>
		<td>
   <a href="https://github.com/Namanl2001/MERN-Gurujii-dev/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Namanl2001/MERN-Gurujii-dev" />
</a>
		</td>
	</tr>
</table>
