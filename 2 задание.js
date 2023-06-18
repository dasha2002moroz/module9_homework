const obj = new Object();

obj.one = 1;
obj.two = 2;
obj.three;
const check = function(obj, str){
  for(let key in obj){
    if (key == str){
      return true;
    }
    else{
      return false;
    }
  }
}
check(obj, 'one');