# FCY-SHOES-STORE 

Online store (RWD webpage) build by `create-react-app`, you can add product into cart or CRUD product on the site.

- [My Website](https://fcy-shoes-store.herokuapp.com/)

### Account 

- Normal user account
```
 Email:testuser@test.com
 password:123456
```

- Admin account
```
 Email: admin@test.com
 password: admin111
```

## Project purpose
Let me get familiar with React JS library, learn by doing it.

## Technologies and packages used in this project

**React**

- hook
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)<br>
  DOM bindings for React Router.
- [react-toastify](https://github.com/fkhadra/react-toastify)<br>
  Allows you to add notifications to your app with ease.
  
**API**

- [axios](https://github.com/axios/axios)<br>
  Promise based HTTP client for the browser and node.js.
- [json-server](https://github.com/typicode/json-server)<br>
  Fake REST API , a quick back-end for prototyping and mocking. <br>
  you can visit my json server [here](https://fcy-shoes-api.herokuapp.com/).
  
**Project Deployment**

- [Heroku](https://www.heroku.com)<br>
  Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
  
**User Authentication**

- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)<br>
A self-contained way for securely transmitting information between parties as a JSON object<br>
if you want to see how i use it in my website, you can visit [here](https://github.com/keila0933/shoes-store-api).

## Project structure

```
src
├── commons
│   ├──auth.js
│   ├── axios.js
│   └── helper.js
├── components
│   └── App
│       ├── components
│       │   └──Products.js
│       │       ├── Header.js
│       │       ├── Panel.js
│       │       │    ├── AddInventory.js
│       │       │    ├── EditInventory.js
│       │       │    └── UserProfile.js
│       │       ├── ToolBox.js
│       │       │    ├── SearchBox.js
│       │       │    └── CartBox.js
│       │       └──  Product.js   
│       ├── CartItem.js   
│       └── ScrollButton.js
├── css  
│   ├──app.scss
│   └──style.scss
├── pages
│   ├──App.js
│   ├──Cart.js
│   ├──Login.js
│   ├──Register.js
│   └──NotFound.js
├── index.js
├── Layout.js
├── Router.js
├── .gitignore
└──README.md
```
