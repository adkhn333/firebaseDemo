app
.service('Products', function($q) {
    var obj = {};
    obj = {
        getProducts: function() {
            var defer = $q.defer();
            database.ref().child('/products/').once('value', function(snapshot) {
                console.log(snapshot.val());
                defer.resolve(snapshot.val());
            });
            return defer.promise;
        },
        getProductss: function() {
            var defer = $q.defer();
            database.ref().child('/products/').on('child_added', function(snapshot) {
                console.log(snapshot.val());
                if(snapshot.val() != undefined || snapshot.val() != null){
                    defer.resolve(snapshot.val());
                }
            });
            return defer.promise;
        }   
    };
    return obj;
})
;