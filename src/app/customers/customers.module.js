import { module } from 'angular';
import { CustomersComponent } from './customers.component';
import { routing } from './customers.routing';
import { listCustomersModule } from './list/list.module';
import { addCustomerModule } from './add/add.module';

export const customersModule = module('app.customers', [
    listCustomersModule.name,
    addCustomerModule.name
])
    .component('customers', new CustomersComponent())
    .config(routing)
    // .service('customersService', CustomersService);