import { module } from 'angular';
import { AddComponent } from './add.component';

export const addCustomerModule = module('app.customer.add', [])
    .component('add', new AddComponent())