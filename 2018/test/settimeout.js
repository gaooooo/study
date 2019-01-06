setTimeout(function(){
      var end = + new Date();

      console.log('setTimeout时间：'+ (end-timestart));

}, 500);


var timestart= +new Date();
for(var i=0;i<10000000000;i++){
    

}
var enddate= + new Date();
console.log('主线程时间：'+ (enddate-timestart));



