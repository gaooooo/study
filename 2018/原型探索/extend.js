//原型拓展
//ligerui 继承方法
Function.prototype.ligerExtend = function (parent, overrides) {
     
    if (typeof parent != 'function') return this;
    //保存对父类的引用
    this.base = parent.prototype;
    this.base.constructor = parent;
    //继承 做为中间层，防止子级顶掉父级方法，是为引用传递，子级顶掉了f，但f是new出来的，所以show不同结果
    var f = function () { };
    f.prototype = parent.prototype;
    this.prototype = new f();
    //将构造指向了自己，因为this在这里为function fucntion打点为静态属性，静态属性只能通过constructor调用，constructor指向函数构造
    this.prototype.constructor = this;
    //附加属性方法
    //overrides顶到f原型，所以此处设定中间变量，因为会顶掉，原型的意思会对方法重建地址
    //if (overrides) $.extend(this.prototype, overrides);
    if (overrides) Object.assign(this.prototype, overrides);
};

function person() { 
}

function chinese() {
}
function japanese() {
}

person.prototype.say=function(){
    console.log("person");
}
 
//person.prototype.option = { name: "person Name", address: "person erth" };
japanese.prototype.say = function () {
    console.log("chinese");
}
chinese.prototype.say = function () {
    console.log("chinese");
}
//子级覆盖父级方法，不顶掉父级
japanese.ligerExtend(person, {
    say: function () {
        console.log("override japanese")
    }
})
chinese.ligerExtend(person, {
    say: function () {
        console.log("override chinese")
    }
})
 
// var xxx = chinese.prototype.option.name="XXXXX";
 
var c1 = new chinese(); 
c1.say();
//c1.constructor.base.say();


var j1 = new japanese(); 
j1.say();
//j1.constructor.base.say();


// person.prototype.say = function () {
//     console.log("person say too");
// }
 
// console.log(JSON.stringify(c1.constructor.base.option));

