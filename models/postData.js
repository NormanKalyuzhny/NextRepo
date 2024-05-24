const { faker } = require('@faker-js/faker');

postData = {
    title: faker.lorem.word(),
    body: faker.lorem.sentence(),
    userId: faker.number.int(),
}
//console.log(postData)
module.exports = postData;

