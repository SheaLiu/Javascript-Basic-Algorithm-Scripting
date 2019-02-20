

function palindrome(str) {
  var myReg = /[^\w\s]|_/g;  //去除字符串中的标点符号以及下划线 
  var strs;
  strs = str.replace(myReg,'').replace(/\s/g,'').toLowerCase();
  if(strs.split('').reverse().join('') == strs){  //reverse()是对数组中元素的翻转
    return true;
  }else{
    return false;
  }
}
palindrome("eye");
