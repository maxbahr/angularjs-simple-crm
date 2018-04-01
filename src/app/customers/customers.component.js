import customersTemplate from './customers.html';
import { CustomersController } from './customers.controller'

export class CustomersComponent {
    template = customersTemplate;
    controllerAs = 'customers';
    controller = CustomersController;
}