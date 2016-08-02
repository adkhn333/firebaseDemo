/// <reference path="angular.js" />

app
.controller('postCtrl', function() {
    var vm = this;
    vm.content = 'Lorem ipsum dolor sit amet'+
                     'consectetur adipisicing elit.'+ 
                     'Cumque consequuntur eaque aliquam '+
                     'velit perspiciatis minima suscipit '+
                     'quaerat dolor nemo distinctio officiis'+ 
                     'harum rem, assumenda, ab rerum. '+
                     'Maxime molestias minus dignissimos.';
    return vm;
})
.directive('post', function() {
    return {
        restrict: 'AE',
        replace: true,
        controller: 'postCtrl',
        require: 'post',
        scope: true,
        link: function(scope,element,attribute, controller) {
            scope.title = attribute.title;
            scope.author = attribute.author;
            scope.content = attribute.content == null ? controller.content: attribute.content;
        },
        templateUrl: 'templates/post.html',
    }
})
;