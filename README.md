<!-- # 🗄 https://nodejs-apartments-api.onrender.com -->

Apartments API - backend pet-progect for another pet-progect(site GoHome) - searching and booking apartments. Using:
BCRYPT - for hashing passwords;
JWT - for creating tokens (expiresIn: 3h);
MONGOOSE - for working with MongoDB
CORS - for http-headers
EXPRESS - for working with Node
DOTENV - for loading environment variables from a .env file
JOI - for validation data

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 📍 AUTH endpoint: /auth

- 📎 POST /register - register user
- 📎 POST /login - login user

## 📍 APARTMENTS endpoint: /apartments

- 📎 GET / - get all apartments
- 📎 GET /:apartmentId - get apartment detail information

## 📍 CITIES endpoint: /cities

- 📎 GET / - get cities list

## 📍 ORDERS endpoint \*protected : /orders

- 📎 GET / - get all user orders after authenticate
- 📎 POST / - add new order after authenticate
- 📎 DELETE / - delete order after authenticate
