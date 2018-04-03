import { module } from 'angular';
import { CustomersComponent } from './customers.component';
import { CustomersService } from './customers.service';
import { routing } from './customers.routing';
import { listCustomersModule } from './list/list.module';
import { addCustomerModule } from './add/add.module';
import { editCustomerModule } from './edit/edit.module';
import { detailsCustomerModule } from './details/details.module';

export const customersModule = module('app.customers', [
    listCustomersModule.name,
    addCustomerModule.name,
    editCustomerModule.name,
    detailsCustomerModule.name
])
    .component('customers', new CustomersComponent())
    .config(routing)
    .service('customersService', CustomersService);