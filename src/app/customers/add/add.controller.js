import { customersService } from '../customers.service';
import { Customer } from '../model/customer';

export class AddController {
    model = new Customer();

    constructor(customersService, $state) {
        this.customersService = customersService;
        this.$state = $state;
    }

    add = () => {
        this.customersService.add(this.model).then(
            (res) => {
                this.$state.go('list');
            }
        ).catch(err => {
            console.log(err);
        });
    }

    reset = () => {
        this.model = {};
    }
    
    back = () => {
        this.$state.go('list');
    }
}