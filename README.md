<img width="316" alt="lookbook" src="https://user-images.githubusercontent.com/92300013/196944892-09a81215-9f5c-4c44-9bd0-45a641831976.png">

LookBook is a social media platform design for Photographers to show case there portfolios. Here, users can find the latest photos from around the world, along with some learning on the way. We also invite users to interact with each other by sharing Photos of what that have captured and what inspirate them.

The repository for the DRF-P5 associated with this project is available <a href="https://github.com/KarlMoran/DRF-P5" target="_blank">HERE.</a>The installation, set up, and deployment steps for this section of the project have also been included in the README linked to the DRF-P5.

- DEPLOYED API HEROKU <a href="https://drf-lookbook.herokuapp.com/" target="_blank">LINK HERE</a>
- DEPLOYED FRONTEND HEROKU LINK - <a href="https://lookbook-p5.herokuapp.com/" target="_blank">LIVE SITE</a>
- DEPLOYED BACKEND GITHUB <a href="https://github.com/KarlMoran/DRF-P5" target="_blank">REPOSITORY HERE </a>


<hr />

<img width="1235" alt="Responsive" src="https://user-images.githubusercontent.com/92300013/197788227-5cbf95b3-e4ad-4a77-a5b3-9f9882d4c664.png">

<hr />

# Design

* Wireframe & site Navigation: <a href="https://lucid.app/lucidspark/ea3bd373-48d5-4da0-b747-43a0e3fb0836/edit?invitationId=inv_a7897dd7-7fdc-4bb7-abaa-c008c791075e#" target="_blank">Click Here</a>

* Colour Sheme:

<img width="1235" height="600" alt="Responsive" src="https://user-images.githubusercontent.com/92300013/198280833-ef72cadd-203b-4f25-8c48-1872a20d9a06.png">

# Features

## Navigation Bar
* This featured appears throughout the page,it allows users to easily navigate through the site.
* The Navigation bar has a number of links when signIn  'Home', 'Add post', 'Explore', 'Star', 'Learn', 'About'and 'SignIn/ SignUp'.
* Certain links appear when you signIn, you get full access when you craete an account. 

<img width="1406" alt="Nav SignOut" src="https://user-images.githubusercontent.com/92300013/197505341-0c922b06-a1ad-4b22-b76f-691531105aa0.png">


<img width="1224" alt="Nav SignIN" src="https://user-images.githubusercontent.com/92300013/197337394-d6c8afa3-515b-459a-9e75-f29d23087529.png">

<hr />

## Home Page :house:
* The home page shows all recent posts made by follow memeber of the site.
* A search bar is included , where users can search for portifollos or photos.
* The page also includes a list off most popular portifollos, where you can see who is the most popular.
* The SignIn / SignUp button will redirect user to the SignIn page / SignUp page if user don't have a account.

<img width="1235" alt="Home Page" src="https://user-images.githubusercontent.com/92300013/197788504-3127677c-ab29-44a0-901a-f8db136e5e7a.png">

<hr />

## About :bust_in_silhouette:
* The About page gives you an insight into LookBook and what it is about. 
* The About page is only visable when you are signedOut.

<img width="1235" alt="About page" src="https://user-images.githubusercontent.com/92300013/197788688-08159558-430d-447d-b0df-0de4480786a4.png">

<hr />

## Explore :camera:
* The Explore page shows you your followers posts most recent photos

<img width="1235" alt="Explore Page" src="https://user-images.githubusercontent.com/92300013/197788859-f19ae846-3a13-4345-946f-8e22eda864e8.png">

<hr />

## Add post
* Add post allows user to post photos up to the wall.
* Add post allows user to add a Title , Location and content to thier posts.

<img width="1235" alt="Add Post" src="https://user-images.githubusercontent.com/92300013/197789015-c524896c-3a3c-43e0-addb-74434ac9f605.png">

<hr />

## Liked :star:
* The Liked post shows you posts that you have liked :star:
* Posts can be liked by clicking the :star:

<hr />

## Learn :notebook:
* This section just gives people advise on starting photography. 
* What you need to know before starting off. 

* I would have liked to added to the learn page by adding posts/learning material by uploading 
them through a ADD button. Linking that button up to pst onto the Learn page. 

<img width="1398" alt="Learn Page" src="https://user-images.githubusercontent.com/92300013/197789545-f3e9615a-7f21-4bfd-a891-bc8667162fb9.png">

<hr />

## SignUp Page 
* The SignUp page allows users to create an acccount by giving details.
* A Username, Password and a confirmed Password is required to create an account.
* If you already have an account you can link the SignIn link at top of page or at bottom

<img width="1251" alt="SignUp Page" src="https://user-images.githubusercontent.com/92300013/197789728-5d6fd906-3242-440f-852f-bac85a4711bd.png">


<hr />

## SignIn page 
* User that have an account can signIn by entering there details.

<img width="1251" alt="SignIn Page" src="https://user-images.githubusercontent.com/92300013/197789908-3827664c-0eed-457d-84b0-5b8f9c9db98a.png">

<hr />

## Page not found
* When a user is dosnt follow a memeber they cant explore there page. 
* A page not found is diplayed

<img width="1426" alt="Page Not found" src="https://user-images.githubusercontent.com/92300013/197790509-5403d130-e26f-4023-87a5-f285dc3d5f9d.png">

<hr />

## Followers

<img width="395" alt="Followers" src="https://user-images.githubusercontent.com/92300013/198294104-76f06f90-c137-4f90-94ab-1bb6efb07aba.png">

<hr />

## Profile Page 
* Shows the number of followers & following

<img width="1211" alt="Profile Page" src="https://user-images.githubusercontent.com/92300013/198294336-41ac58f4-1a1e-4e39-99c3-a325dc51ac6c.png">

<hr />

## Features Left to Implement:
* would have like to made the learn page better by adding in cards. Cards you click that bring you to a new page.
each card would have a different lesson on them. 

<hr />

# Testing
## Manual Testing:

* CRUD functionality has been tested for each of the following: Posts | Explore  | Comments | Likes | Follow | Profile
* Likes & Follow may only be created & deleted
* Profile may only be updated
* All nav links open to the correct page.
* All external links open to a new browser window.
* Pages intended for logged-in users only will redirect logged-out users back to the home page.
* Users attempting to edit content that they did not publish are redirected back to the home page.
* Users are able to create a new account.
* Users with an existing account are able to log in.
* Each user has the ability to log out.

<hr />

## Errors
* 500 Opertaional error - Resolved with the aid of tutor support. All database migrations for backend apps needed to be remigrated.
* My alignment wasn't working on pages. mr cahnged to ms 
* Had issues with my pages not showing up the right material. Simple problem didnt have most recent backend project deployed.
* front Awsome wasn't wokring right, delelted kit code and added new one in. 

<hr />

## Validator Testing

* CSS files pass through the Jigsaw validator with some issues found - <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flookbook-p5.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#errors" target="_blank">Click  Here </a>

* 15 parse error where found. 

* The page has an excellent Accessibility rating in Lighthouse:

<img width="519" alt="LightHouse" src="https://user-images.githubusercontent.com/92300013/198289617-dbf5c93b-2e5d-461f-927c-0e9dbfce2665.png">

* Tested the site opens in Chrome, Safari & on a mobile device without issues.
* All social links open to external pages as intended.

<hr />

## Technologies Used
Main Languages Used
* HTML5
* CSS3
* Javascript
* Python
* SQL - Postgres

<hr />

## Frameworks, Libraries & Programs Used
* Google Fonts : For the site fonts.
* Font Awesome : To add icons to the social links in the footer & navigation sections.
* GitPod : To build the project & create the JSX & CSS files before pushing the project to Github.
* GitHub : To store my repository for submission.
* lucid. : Was used to create mockups of the project prior to starting.
* Am I Responsive? : To ensure the project looked good across all devices.
* Favicon : To provide the code & image for the icon in the tab bar.
* Django : Used to build the backend database that serves as an API for the front-end project.
* React-Bootstrap : The styling library that has aided to the layout of the site, and which was introduced to us during the course of the program.
* ReactJS : To build the components that would collectively form the front-end application.

<hr />

# Deployment

The site was deployed to Heroku. The steps to deploy are as follows:

1. Launch the gitpod workspace.
2. Install ReactJS:

- npx create-react-app . --use-npm
- npm start

3. Install the following packages using the command npm install:

- react-bootstrap@1.6.3 bootstrap@4.6.0
- react-router-dom@5.3.0
- axios
- react-infinite-scroll-component
- msw --save-dev
- jwt-decode
- -g eslint

3. Git add, commit, and push changes to gitpod.
4. Create the project app on Heroku, and link the GitHub repository by navigating to the 'Deploy' tab.

<hr />

## Connecting to the API:

1. Navigated to the Heroku app of the project DRF-API, and under the Settings tab, added the following configvars:
*  Key: CLIENT_ORIGIN | Value: https://react-app-name.herokuapp.com
*  Key: CLIENT_ORIGIN_DEV | Value: https://gitpod-browser-link.ws-eu54.gitpod.io
2. Check that the trailing slash \ at the end of both links has been removed, and save the configvar pairs.
3. Install the Axios package, & create supporting axiosDefaults.js as shown in<a href="https://github.com/Code-Institute-Solutions/moments/blob/cf955d2f2e6f70f61c92d1f9de85558d8e49f3a8/src/api/axiosDefaults.js" target="_blank"> Moments Walkthrough.</a>

<hr />

## Deploy to Heroku:

1. In the scripts section of package.json in gitpod, added the following command:
"heroku-prebuild": "npm install -g serve",
2. Add Procfile to project root & populate with the following:
web: serve -s build
3. Repeat the steps of git add/commit/push.
4. Deploy the project via the deploy button on Heroku.