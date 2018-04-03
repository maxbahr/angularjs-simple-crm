import { customersService } from '../customers.service';

export class ListController {

    constructor(customersService, $state, $scope, $mdDialog) {
        this.$state = $state;
        this.customersService = customersService;
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
    }

    $onInit = () => {
        this.customersService.getList()
            .then((res) => {
                res.json().then(data => {
                    this.customers = data.customers;
                    this.$scope.$applyAsync();
                })
            });
    }


    edit = (customer) => {
        let id = customer.id;
        this.$state.go('edit', { id: id });
    }

    showDetails = (customer) => {
        let id = customer.id;
        this.$state.go('details', { id: id });
    }

    delete = (id) => {
        this.customersService.delete(id);
        const index = this.customers.map(customer => customer.id).indexOf(id);
        this.customers.splice(index, 1);
    }
}
