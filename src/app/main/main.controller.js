var apiUrl = 'http://localhost:5000/api';

export class MainController {
    //constructor ($timeout, webDevTec, toastr) {   Default one
    constructor ($http){        // Require the reference
        'ngInject';

        this.$http = $http;     // Pass the reference
    }

    postMessage(){
        this.$http.post(apiUrl+'/message', {msg: this.message});
    }
}
