module.exports = () => {
  const { faker } = require('@faker-js/faker');
  const data = {
    users: [],
    info: {
      nameSystem: faker.name.jobArea() + ' System',
      version: '0.0.1-SNAPSHOT',
      property: faker.company.companyName(),
    },
  };

  // insert 5 fake users
  for (let i = 0; i < 5; i++) {
    data.users.push({
      username: faker.internet.userName(),
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      role: faker.helpers.arrayElement(['ADMINISTRATOR', 'USER']),
      email: faker.internet.email(),
      status: faker.helpers.arrayElement(['ENABLED', 'DISABLED']),
      created: faker.date.past().getTime(),
      modified: faker.date.recent().getTime(),
    });
  }
  return data;
};
