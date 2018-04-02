import { module } from 'angular';
import { ListComponent } from './list.component';

export const listCustomersModule = module('app.customer.list', [])
    .component('list', new ListComponent())