function  Person (name,parent) {
	// body...
   this.name= name;
   this.parent= parent;
}
Person.prototype.show= function(){
       alert("Person show:"+this.name+","+ this.parent);
}
Person.prototype.hello= function(){
       alert("Person hello:"+this.name+","+ this.parent);
}

function Gaoxin(name,age){
     Person.call(this,name);
     this.age= age;
   
}

//说明：new person 拿到公有变量
//Person.prototype 原型继承,不能用公有变量,若构造需要父级构造，需要Person.call

//Gaoxin.prototype = new Person("person","dad");
Gaoxin.prototype = Person.prototype;
Gaoxin.prototype.constructor= Gaoxin;

Gaoxin.prototype.show= function(){
    alert(this.name+ ","+this.age);
}

//var gx= new Gaoxin("wojiaogaoxin",19);
// gx.show();
// gx.hello();
// alert(gx.parent);
 



//写一个公共继承类
function extend (subClass,parentClass){

     var f= function(){};

     f.prototype= parentClass.prototype;

     subClass.prototype = new f();
     subClass.prototype.constructor= subClass;

     subClass.base = parentClass.prototype;
     subClass.base.constructor= parentClass;

     if (subClass.prototype.constructor== Object.prototype.constructor){

     	subClass.prototype.constructor= subClass;
     }

}

function world(name,type){

   this.name  =name;
   this.type= type;
}
world.prototype.say = function(){

	 alert("parent:" + this.name+",type:"+this.type);
}


function chinese(name,age){
this.constructor.base.constructor.call(this,name);
  this.age= age;
  this.show= function(){
        alert("chinese:"+ this.name +","+ this.age); 

  }
}

extend(chinese,world);
var test= new chinese("hello",18);


test.show();
test.say();

