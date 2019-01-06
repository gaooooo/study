
/**
 * Module dependencies.
 */

var logger = require('koa-logger');
var serve = require('koa-static');
var parse = require('co-busboy');
var koa = require('koa');
var fs = require('fs');
var app = koa();
var os = require('os');
var path = require('path');
var body = require('koa-better-body')
// log requests

app.use(logger());
app.use(body());

// custom 404

app.use(function *(next){
  yield next;
  if (this.body || !this.idempotent) return;
  this.redirect('/404.html');
});

// serve files from ./public
console.log(__dirname);

// handle uploads

app.use(function *(next){

    debugger
  // ignore non-POSTs
  if ('POST' != this.method) return yield next;
  
   var files=this.body.files.file;  
        if(files.length>0){  
            for(var item in files){  
                var tmpath= files[item]['path'];  
                var tmparr =files[item]['name'].split('.');  
                var ext ='.'+tmparr[tmparr.length-1];  
                var newpath =path.join('public', parseInt(Math.random()*100) + Date.parse(new Date()).toString() + ext);  
                console.log(tmpath);  
                console.log(newpath);  
                var stream = fs.createWriteStream(path.join(__dirname,newpath));//创建一个可写流  
                fs.createReadStream(tmpath).pipe(stream);//可读流通过管道写入可写流  
            }  
        }  
  

//   // multipart upload
//   var parts = parse(this);
//   var part;

//   while (part = yield parts) {
//     var stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
//     part.pipe(stream);
//     console.log('uploading %s -> %s', part.filename, stream.path);
//   }

  this.redirect('/');
});

// listen

app.listen(3000);
console.log('listening on port 3000');
