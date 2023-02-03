const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const apartmentsPath = path.join(__dirname, "apartments.json");

const apartmentsList = async () => {
  const data = await fs.readFile(apartmentsPath);
  return JSON.parse(data);
};

const getApartmentById = async (apartmentId) => {
  const list = await apartmentsList();
  const result = list.find(item => item.id === apartmentId);
  return result;
};

const removeApartment = async (apartmentId) => {
  const list = await apartmentsList();
  const index = list.findIndex(item => item.id === apartmentId);
  if (index === -1) {
    return null;
  }
  const [result] = list.splice(index, 1);
  await fs.writeFile(apartmentsPath, JSON.stringify(list, null, 2));
  return result;
};

const addApartment = async (body) => {
  const list = await apartmentsList();
  const newApartment = { id: nanoid(), ...body };
  list.push(newApartment);
  await fs.writeFile(apartmentsPath, JSON.stringify(list, null, 2));
  return newApartment;
};

const updateApartment = async (apartmentId, body) => {
  const list = await apartmentsList();
  const idx = list.findIndex(item => item.id === apartmentId);
  if (idx === -1) {
    return null;
  }
  list[idx] = { ...list[idx], ...body };
  await fs.writeFile(apartmentsPath, JSON.stringify(list, null, 2));
  return list[idx];
};

module.exports = {
  apartmentsList,
  getApartmentById,
  removeApartment,
  addApartment,
  updateApartment,
}