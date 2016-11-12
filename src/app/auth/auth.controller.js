export class AuthController {


    constructor($auth){
        'ngInject';

        this.$auth = $auth;
    }

    register(){
        var vm = this;  // View Model
        this.$auth.signup(this.user).then(function(token){
            vm.$auth.setToken(token);
        });
        // As user was declared as the parent for email (auth.user.email) and password (auth.user.pwd)
                                    // If the registration is successful, then set the token on the browser
                                    // Can be seen in Chrome->F12->Application->Local Storage->
    }

    login(){
        var vm = this;  // View Model
        this.$auth.login(this.login.user).then(function(token){
            vm.$auth.setToken(token);
        });
     }
}
