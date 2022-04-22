const db = require('./models');

console.log('======== RUNNING DB TEST ========');

// Test Companies
const companies = [
  {
    name: "Apple",
    founded: "April 1, 1976",
    employees: 2,
    active: false,
    products: ['computers'],
    CEO: {
      name: 'Steve Jobs',
      age: 21
    }
  },
  {
    name: "Google",
    founded: "September 4, 1998",
    employees: 57100,
    active: true,
    products: ['search', 'maps', 'email'],
    CEO: {
      name: "Larry Page",
      age: 43
    }
  },
  {
    name: "Apple Inc",
    founded: "April 1, 1976",
    employees: 66000,
    active: true,
    products: ['computers', 'phones', 'tablets'],
    CEO: {
      name: 'Tim Cook',
      age: 56
    }
  },
  {
    name: "Amazon",
    founded: "July 5, 1994",
    employees: 1600000,
    active: true,
    products: ['everything', 'under', 'the', 'sun'],
    CEO: {
      name: 'Andy Jassy',
      age: 54
    }
  },
  {
    name: "Microsoft",
    founded: "April 4, 1975",
    employees: 66000,
    active: true,
    products: ['computers', 'phones', 'tablets'],
    CEO: {
      name: 'Satya Nadella',
      age: 54
    }
  },
  {
    name: "Samsung",
    founded: "January 13, 1969",
    employees: 267937,
    active: true,
    products: ['computers', 'phones', 'tablets'],
    CEO: {
      name: 'Kim Hyun Suk',
      age: 61
    }
  }
];

// Test Functions
/**
 * Create
 * @param {object} data 
 * @returns {'Company created'}
 * TODO: demo creating company
 */
function createCompany(data) {
  db.Company.create(data)
    .then((newCompany) => {
      console.log(newCompany);
    }).catch(error => {
      console.log(`This is what went wrong: ${error}`);
    }).finally(() => {
      process.exit();
    });
  return 'Company created';
}

/**
 * Read (all)
 * @returns {'All companies returned'} 
 * TODO: demo returning all data from database
 */
function findAll() {
  db.Company.find()
    .then((companies) => {
      console.log(companies);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      process.exit();
    });
  return 'All companies returned';
}

/**
 * Read (one)
 * @param {mongo id} id 
 * @returns {'Company found'}
 * TODO: demo returning single object from database 
 */
function findOne(id) {
  db.Company.findById(id)
    .then((foundCompany) => {
      console.log(foundCompany);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      process.exit();
    });
  return 'Company found';
}

/**
 * Update
 * @param {mongo id} id 
 * @param {object} data 
 * @returns {`ID: ${id} was updated`}
 * TODO: demo updating single object from database
 */
function update(id, data) {
  db.Company.findByIdAndUpdate(id, data, { new: true })
    .then((updatedCompany, data) => {
      console.log(updatedCompany, data)
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      process.exit();
    });
  return `ID: ${id} was updated`;
}

/**
 * Delete (one)
 * @param {mongo id} id 
 * @returns {`ID: ${id} was Destroyed!`}
 * TODO: demo deleting one object from database
 */
function deleteOne(id) {
  db.Company.findByIdAndDelete(id)
    .then((deletedCompany) => {
      console.log(deletedCompany)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      process.exit();
    });
  return `ID: ${id} was Destroyed!`;
}

/**
 * delete (all) --> drop all data from collection
 * @returns {null}
 * TODO: demo deleting (dropping) all data from database
 */
function deleteAll() {
  db.Company.deleteMany()
    .then(() => {
      console.log('Trash has been emptied')
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      process.exit()
    });
  return null;
}

//Implementing Tests 
//create
// createCompany(companies[0]);
// createCompany(companies[1]);
// createCompany(companies[2]);
// createCompany(companies[3]);
// createCompany(companies[4]);
// createCompany(companies[5]);

// read (all)
// findAll();

// read (one)
// findOne("6262f5d91897dd4a38450b19");

// update
// update("6262f5bb3b19920997da0615", { name: 'Orange'});

// delete (one)
// deleteOne("6262d3c7803a53049eed79c2"); 
// deleteOne("6262f5bb3b19920997da0615"); 

// delete (all) 
// deleteAll();