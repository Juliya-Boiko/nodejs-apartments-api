# 🗄 https://nodejs-apartments-api.onrender.com

Apartments API.

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 📍 AUTH endpoint: /api/auth

- 📎 POST /register - register user
- 📎 POST /login - login user

## 📍 APARTMENTS endpoint: /api/apartments

- 📎 GET / - get all apartments
- 📎 GET /cities - get all apartments locations
- 📎 GET /:apartmentId - get apartment information
- 📎 POST / - add new apartment
- 📎 PUT /:apartmentId - update apartment info
- 📎 PATCH /:apartmentId/imgUrl - update apartment image
- 📎 PUT /:apartmentId/reviews - add apartment review
- 📎 DELETE /:apartmentId - delete apartment
