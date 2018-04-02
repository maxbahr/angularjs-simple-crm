const API = 'https://wsb-frontend-project-angularjs.juszczak.io';

export class CustomersService {
    constructor($http) {
        this.$http = $http;
    }

    getHeaders = () => ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-User-ID': 'wsbminmax'
    })

    getList = () => {
        return fetch(API + '/customers', {
            headers: this.getHeaders(),
            method: 'GET'
        })
    }

    getDetails = (id) => {
        return fetch(API + '/customer/' + id, {
            headers: this.getHeaders(),
            method: 'GET'
        })
    }

    update = (id) => {
        return fetch(API + '/update/' + id, {
            headers: this.getHeaders(),
            method: 'PUT',
            body: JSON.stringify({ customer: customer })
        })
    }

    add = (customer) => {
        console.log('customer service', customer);
        return fetch(API + '/add', {
            headers: this.getHeaders(),
            method: 'POST',
            body: JSON.stringify({ customer: customer })
        })
    }

    delete = (id) => {
        return fetch(API + '/delete/' + id, {
            headers: this.getHeaders(),
            method: 'DELETE'
        })
    }
}