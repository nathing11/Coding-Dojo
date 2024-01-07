const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port: ${port}`));

const { faker } = require('@faker-js/faker');

app.get('/api/user', (req, res) => {
    const users = createUser(); 
    return res.json({ users: users });
});

app.get('/api/company', (req, res) => {
    const companies = createCompany(); 
    return res.json({ companies: companies });
});

const createUser = () => {
    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return user;
};

const createCompany = () => {
    const company = {
        name: faker.company.name(),
        address: { 
            country: faker.location.country(),
            city: faker.location.city(),
            state: faker.location.state(),
            street: faker.location.street(),
        },
    };
    return company;
};
