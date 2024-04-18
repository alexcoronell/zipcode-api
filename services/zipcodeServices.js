class ZipcodeService {
  zipcodes = [
    {
      zipcode: 98101,
      city: "Seattle",
    },
  ];

  async find() {
    return new Promise((resolve, reject) => {
      console.log(this.zipcodes);
      resolve(this.zipcodes);
    });
  }

  async findOne(zip) {
    const zipcodeDetail = {
      zip,
    };
    if (!zipcodeDetail) {
      throw new Error("Not found");
    }
    return zipcodeDetail;
  }
}

module.exports = ZipcodeService;
