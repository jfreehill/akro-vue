const categories = [
  'Cooking',
  'The Kitchen',
  'Americana',
  'Fruit',
  'Girls\' Toys',
  'Boys\' Toys',
  'The Beach',
  'Summertime',
  'Rock\'n\'Roll',
  'The Zoo',
  'Movies',
  'Baseball',
  'Football',
  'Basketball',
  'Softball',
  'Winter Sports',
  'The Olympics',
  'Pick Your Own',
  'Cars',
  'Alcohol',
  'Desserts',
  'The Circus',
  'Phobias',
  'The Gym',
  'Working Out',
  'Drugs',
  'Household Cleaning',
  'Pick Your Own',
  'City Living',
  'Southern Livin\'',
  'Desserts',
  'Illegal Activities',
  'Superstitions',
  'Disney Movies',
  'Cowboys',
  'Gameshows',
  'The Office',
  'Tropical Locations',
  'Actors',
  'Chemicals',
  'Actresses',
  'The Garage',
  'Itchy Things',
  'Video Games'
]

export {
  getCategory
}

function getCategory () {
  return categories[Math.ceil(Math.random() * categories.length - 1)]
}
