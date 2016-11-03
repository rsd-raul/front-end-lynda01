export function CompareToDirective($parse){
    // Parse service: needed to convert angular expresions to function
    'ngInject'
    // This will inject the parser properly

    return{
        require: 'ngModel',
        link: function(scope, elm, attrs, ngModel){
            // References we need

            var mainModel = $parse(attrs.compareTo);
            var secondModel = $parse(attrs.ngModel);

            scope.$watch(attrs.compareTo, function(newValue){
            // Watch for changes in the given attribute, execute function on change
                ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
                // Set the field to valid or not
            });

            scope.$watch(attrs.ngModel, function(newValue){
                ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
            });
        }
    }
}
