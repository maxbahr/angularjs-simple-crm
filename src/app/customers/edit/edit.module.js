import { module } from 'angular';
import { EditComponent } from './edit.component';

export const editCustomerModule = module('app.customer.edit', [])
    .component('edit', new EditComponent())