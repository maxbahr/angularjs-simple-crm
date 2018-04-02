export class CustomersController {
    constructor($state) {
        this.$state = $state;
    }

    showList = () => {
        this.$state.go('list');
    };

    showDetails = () => {
        this.$state.go('details');
    };

    add = () => {
        this.$state.go('add');
    };

    edit = () => {
        this.$state.go('edit');
    };
}