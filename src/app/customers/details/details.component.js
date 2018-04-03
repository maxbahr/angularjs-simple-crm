import detailsTemplate from './details.html';
import { DetailsController } from './details.controller'

export class DetailsComponent {
    template = detailsTemplate;
    controllerAs = 'customerDetails';
    controller = DetailsController;
}