import { customersService } from '../customers.service';
import { Customer } from '../model/customer';

export class DetailsController {
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

    edit = (customer) => {
        const id = this.$stateParams.id;
        this.$state.go('edit', { id: id });
    }

    back = () => {
        this.$state.go('list');
    }
}