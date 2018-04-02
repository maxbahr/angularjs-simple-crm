import editTemplate from './edit.html';
import { EditController } from './edit.controller'

export class EditComponent {
    template = editTemplate;
    controllerAs = 'edit';
    controller = EditController;
}