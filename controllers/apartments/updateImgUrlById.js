const Apartment = require('../../models/apartment');
const fs = require('fs/promises');
const path = require('path');

const updateImgUrlById = async (req, res) => {
  const { apartmentId } = req.params;
  const { path: tmpUpload, originalname } = req.file; 

  const apartmentDir = path.join(__dirname, '../../', 'public', 'apartments');
  const resultUpload = path.join(apartmentDir, originalname);
  const cover = path.join('public', 'apartments', originalname);
  await fs.rename(tmpUpload, resultUpload);
  const result = await Apartment.findByIdAndUpdate(apartmentId, { imgUrl: cover }, { new: true });
  if (!result) {
    throw new Error(`No apartmentId with id ${apartmentId}`);
  }
  res.status(201).json(result);
};

module.exports = updateImgUrlById;