import listTemplate from './list.html';
import { ListController } from './list.controller'

export class ListComponent {
    template = listTemplate;
    controllerAs = 'listCustomers';
    controller = ListController;
}