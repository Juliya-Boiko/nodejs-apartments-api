const getCities = (arr) => { 
  const unique = arr.reduce(
    (acc, item) => (acc.includes(item.location.city) ? acc : [...acc, item.location.city]),
    []
  );
  return unique;
};

module.exports = getCities;