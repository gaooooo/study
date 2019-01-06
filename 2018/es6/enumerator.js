// ��������������
function *enumerable(msg){
  console.log(msg)
  var msg1 = yield msg + '  after '
  console.log(msg1)
  var msg2 = yield msg1 + ' after'
  try{
    var msg3 = yield msg2 + 'after'
    console.log('ok')
  }
  catch(e){
    console.log(e)
  }
  console.log(msg2 + ' over')
}

// ��ʼ��������
// var enumerator = enumerable('hello')
// var ret = enumerator.next() // ����̨��ʾ hello��ret��ֵ{value:'hello after',done:false}
// ret =  enumerator.next('world') // ����̨��ʾ world��ret��ֵ{value:'world after',done:false}
// ret = enumerator.next('game') // ����̨��ʾgame��ret��ֵ{value:'game after',done:false}
// // �׳��쳣��Ϣ
// ret = enumerator.throw(new Error('test')) // ����̨��ʾnew Error('test')��Ϣ��Ȼ����ʾgame over��ret��ֵΪ{done:true}

// for...of���
enumerator = enumerable('hello')
for(ret of enumerator)
  console.log(JSON.stringify(ret));
// ����̨������ʾ
// hello
// {value:'hello after',done:false}
// world
// {value:'world after',done:false}
// {value:'game after',done:false}
// game over
// {done:true}