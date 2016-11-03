var apiUrl = 'http://localhost:5000/api';

export class MainController {
    //constructor ($timeout, webDevTec, toastr) {   Default one
    constructor ($http){        // Require the reference
        'ngInject';

        this.$http = $http;     // Pass the reference
        this.getMessages();
    }

    getMessages(){
        var viewModel = this;   // So we can access from the main.html

        this.$http.get(apiUrl+'/message').then(function(result){
            viewModel.messages = result.data;
            // result.data is the raw array of objects
        });
    }



    postMessage(){
        this.$http.post(apiUrl+'/message', {msg: this.message});
//                        , {cache:true});
// With and without cache:true the post is sent twice over time...
    }
}
