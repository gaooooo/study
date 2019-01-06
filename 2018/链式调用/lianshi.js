Function.prototype.method = function(name,fn){
     this.prototype[name]= fn;
     return this;

};


var abc= (function(){
     
     function _$(selector){ 
           debugger;
           //var a= el;

            var _el =document.getElementById(selector[0])
            this.el= _el; 


     }

     _$.onready = function(fn,_obj){
          
           _obj.$ = function(){
               return new _$(arguments);
               
           }
          fn();

     }

     
     _$.method("addEvent",function(type,fn){
    
       //this.el[type]= fn;
     	 // this.el.addEvent(type)
       debugger
          this.el.addEventListener(type, fn, false);

      //
     	 //  _object[type]= fn; 
            //fn();
            //_object.click();

     }).method("getEvent",function(fn,e){
     	fn();
     }).method("addClass",function(className){


     });


     _$.onready(function(){
        
           $("btnclick").addEvent("click",function(){

           	document.write("addEvent click");
           })

     },this)





});


window.onload= abc;