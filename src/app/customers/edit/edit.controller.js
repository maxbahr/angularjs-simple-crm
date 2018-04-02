import { customersService } from '../customers.service';
import { Customer } from '../model/customer';

export class EditController {
    constructor(customersService, $stateParams, $scope, $state) {
        this.customersService = customersService;
        this.$stateParams = $stateParams;
        this.$scope = $scope;
        this.$state = $state;
    }

    $onInit = () => {
        const id = this.$stateParams.id;
        this.customersService.getDetails(id)
            .then(res => {
                res.json().then(data => {
                    this.model = data.customer;
                    this.$scope.$applyAsync();
                })
            });
    }

    edit = () => {
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