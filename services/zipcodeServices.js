const zipcodes = require("../data/zipcodes");

class ZipcodeService {
  zipcodes = [
    {
      zipcode: 98101,
      city: "Seattle",
    },
  ];

  constructor() {
    this.zipcodes = zipcodes;
  }

  async find() {
    return new Promise((resolve, reject) => {
      //console.log(this.zipcodes);
      resolve(this.zipcodes);
    });
  }

  async findOne(zip) {
    return new Promise((resolve, reject) => {
      const zipcodeDetail = this.zipcodes.find((zipcode) => zipcode.zip_code == zip)
      if (!zipcodeDetail) {
        resolve('Not found')
      }
      resolve(zipcodeDetail);
    })
  }
}

module.exports = ZipcodeService;
