// const mongoose = require('mongoose');

// const DB_HOST = 'mongodb+srv://Juliya:zerSfUoinWhfC8Z4@cluster0.vyrnwnv.mongodb.net/apartmentsDB?retryWrites=true&w=majority';


// mongoose.connect(DB_HOST)
//   .then(() => {
//     console.log("Database connection successful");
//     app.listen(PORT);
//   })
//   .catch(error => {
//     console.log(error.message);
//     process.exit(1);
//   });

const app = require('./app');

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
});