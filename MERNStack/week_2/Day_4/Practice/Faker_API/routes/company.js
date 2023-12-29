






const createUse=()=>{
    const user={
        firstName : faker.person.firstName(),
        lastName : faker.person.lastName(),
        phoneNumber : faker.phone.number(),
        email :  faker.internet.email(),
        password : faker.internet.password(),
    }
    return user;
}
const createCompany=()=>{
    const company ={
        name : faker.company.name(),
        adress :{
            country : faker.location.country(),
            city : faker.location.city(),
            state : faker.location.state(),
            street : faker.location.street()
        }
    }
    return company;
}