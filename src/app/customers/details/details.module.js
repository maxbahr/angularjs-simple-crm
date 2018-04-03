import { module } from 'angular';
import { DetailsComponent } from './details.component';

export const detailsCustomerModule = module('app.customer.customerDetails', [])
    .component('customerDetails', new DetailsComponent())