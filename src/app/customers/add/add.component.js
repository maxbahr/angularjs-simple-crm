import addTemplate from './add.html';
import { AddController } from './add.controller'

export class AddComponent {
    template = addTemplate;
    controllerAs = 'addCustomer';
    controller = AddController;
}