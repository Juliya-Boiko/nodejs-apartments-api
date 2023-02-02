const { Schema, model } = require('mongoose');
const { handleErrors } = require('../helpers');

const apartmentSchema = Schema({
  title: {
    type: String,
    required: [true, 'Set apartment title'],
  },
  descr: {
    type: String,
    required: [true, 'Set apartment detailed description'],
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: [true, 'Set apartment location city'],
    },
  },
  owner: {
    name: {
      type: String, 
      required: [true, 'Set owners name'],
    },
    phone: {
      type: String, 
      required: [true, 'Set owners phone'],
    },
    email: {
      type: String, 
      required: [true, 'Set owners email'],
    },
    imgUrl: {
      type: String,
      default: ""
    }
  }
}, { versionKey: false, timestamps: true });

apartmentSchema.post("save", handleErrors);

const Apartment = model('apartment', apartmentSchema);

module.exports = Apartment;