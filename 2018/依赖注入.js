
var a=  function(){console.log('a');}
var b = function(){ console.log('b');}
 
function hello(other){
 
	console.log(this.a());
	console.log(this.b());
	console.log(other);
}

var scope={};
scope.a= a;
scope.b=b;

hello.apply(scope,['other']);


var define = {
    dependencies: {},
    register: function(key, value) {
        this.dependencies[key] = value;
    },
    // resolve: function(deps, func, scope) {
    //     var args = [];
    //     scope = scope || {};
    //     for(var i=0; i<deps.length, d=deps[i]; i++) {
    //         if(this.dependencies[d]) {
    //             scope[d] = this.dependencies[d];
    //         } else {
    //             throw new Error('Can\'t resolve ' + d);
    //         }
    //     }
    //     return function() {
    //         func.apply(scope || {}, Array.prototype.slice.call(arguments, 0));
    //     }        
    // }
	resolve: function(deps, func, scope) {
    var args = [];
    for(var i=0; i<deps.length, d=deps[i]; i++) {
        if(this.dependencies[d]) {
            args.push(this.dependencies[d]);
        } else {
            throw new Error('Can\'t resolve ' + d);
        }
    }
    return function() {
        func.apply(scope || {}, args.concat(Array.prototype.slice.call(arguments, 0)));
    }        
}

}
define.register("a",function(){
    console.log('a');
});
define.register("b",function(){
    console.log('b');
});
// var doThing= define.resolve(["a","b"],function(other){
// this.a();
// this.b();
// 	console.log(other);
// });
var doThing= define.resolve(["a","b"],function(a,b,other){
a();
b();
console.log(other);

});
doThing('other');