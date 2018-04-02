export class Customer {
    id;
    name;
    company;
    email;
    phone;
    date;

    constructor(name, company, email, phone) {
        this.name = name;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.date = Date.now();
    }
}