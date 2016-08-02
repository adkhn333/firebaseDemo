app
.controller('mainCtrl', function($scope, $q, Products) {  
    var firstRun = true;
    $scope.loading = true;
    $scope.products = [];
    function watch() {
        var defer = $q.defer();
        database.ref().child('/products/').on('child_added', function(snapshot) {
            console.log(snapshot.val());
            if(snapshot.val() != undefined || snapshot.val() != null){
                var product = snapshot.val();
                console.log($scope.products);
                defer.resolve($scope.products.push(product));
            }
        });
        database.ref().child('/products/').on('child_removed', function(snapshot) {
            console.log(snapshot.val());
            var product = snapshot.val();
            $scope.products.slice($scope.products.indexOf(product.id));
            console.log($scope.products);
        })
        return defer.promise;
    }
    Products.getProducts().then(function(response) {
        console.log(response);
        if(response == null) {
            $scope.loading = false;
        }
    });
    watch().then(function(response) {
        console.log('executed');
        $scope.loading = false;
    });
    $scope.submit = function(parameter) {
        var key = database.ref('/products/').push().key;
        var updates = {};
        updates['/products/'+key] = parameter;
        database.ref().update(updates);
    }
})

.controller('secCtrl', function($scope, $firebaseArray, Products) {
    var array = $firebaseArray(database.ref().child('/products/'));
    console.log(array);
    $scope.products = array;
    $scope.submit = function(parameter) {
        var key = database.ref('/products/').push().key;
        var updates = {};
        updates['/products/'+key] = parameter;
        database.ref().update(updates);
    }
})

;