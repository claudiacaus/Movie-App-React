# Movie-App-React :film_projector:
React project for the HackYourFuture - Amsterdam Bootcamp

## Demo :computer:

Online Deployment of this project is available at https://movie-time-react-project.netlify.app

![Macbook](https://user-images.githubusercontent.com/55986532/150647980-fc17d38e-32a6-4fc0-8983-a4a19ba13c23.png)
![iPhone](https://user-images.githubusercontent.com/55986532/150647985-4fc3be06-c790-40d3-ace5-dddb5d24f9f0.png)


## Inspiration

![inspiraton](https://user-images.githubusercontent.com/55986532/142338736-baa8adda-f193-49c7-af2e-7af390290fa2.png)

Inspired by [Arshia Amin Javahery](https://dribbble.com/shots/16852940/attachments/11913684?mode=media) 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).






## Getting Started :clapper:

To get started you can simply clone the repo and install the dependencies in the root folder, it's necessary to create a .env file in the root and add your personal API key for the [TMDB](https://www.themoviedb.org/).

In the `.env` file add the variable: `REACT_APP_API_KEY={your API key}`

| Steps   |with [NPM](https://www.npmjs.com/) |
| ------- | --------------------------------- | 
| Install |`npm install`                      |
| Start   |`npm start`                        |
| Tests   |`npm test`                         |


## Directory Layout and Tree :film_strip:

```
._______________________________________________________________
|_ README.md
|_ movie-app-react
    |  .gitignore
    |  package-lock.json
    |  package.json
    |  yarn.lock
    |
    |_____public
    |     | index.html
    |     | _redirects
    |     | favicon.ico
    |     | manifext.json
    |     | robots.txt
    |     |
    |_____src
    |     | setupTests.js
    |     | index.js
    |     | App.js
    |     | API.js
    |     | config.js
    |     | context.js
    |     | GlobalStyle.js
    |     | helpers.js
    |     |
    |     |_____components
    |     |     | Actor
    |     |     | BreadCrumb
    |     |     | Button
    |     |     | Grid
    |     |     | Header
    |     |     | HeroImage
    |     |     | MovieInfo
    |     |     | MovieInfoBar
    |     |     | Rate
    |     |     | SearchBar
    |     |     | Spinner
    |     |     | Thumb
    |     |     | Home.js
    |     |     | Home.styles.js
    |     |     | Login.js
    |     |     | Login.styles.js
    |     |     | Movie.js
    |     |     | NotFound.js
    |     |
    |     |_____hooks
    |     |     | useHomeFetch.js
    |     |     | useMovieFetch.js
    |     |
    |     |_____images
    |     |     | movie-logo.svg
    |     |     | no_image.jpg
    |     |     | not-found.gif
    |     |     | search-icon.svg
    |     |     | tmdb_logo.svg
    |___________________________________________________________     
         
       
 ```
 
### Application
- ES6 + Features
- Arrow Functions
- Template Literals
- Destructuring Assignment
- Block-Scoped Variables Let and Const
- async await with try/catch
- Spread operator
- Modules export/import
- New Built-In Methods

### Libraries/Frameworks
- react: UI library
- react-router-dom: The router components of react
- styled-components
- PropTypes
- useState, useEffect, useParams
- Custom Hooks: useHomeFetch, useMovieFetch
- Session Storage

 ## Project Requirements :vhs:
 
 ### Must Have
- [x] The app needs to have multiple pages and use client-side routing
- [x] The app should make use of the Context API or use custom hooks
- [x] Make use of an API
- [x] User login
- [x] Search form 
- [x] Full responsive 
- [x] Implemented mobile first
### Nice to have
- [x] Add user review
- [ ] Tests for the UI


