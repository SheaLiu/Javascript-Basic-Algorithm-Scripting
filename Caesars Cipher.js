function rot13(str) { // LBH QVQ VG!
  // 请把你的代码写在这里
  var res = [];
  str.split('').forEach(function (item) {
    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90){ 
      if (item.charCodeAt() + 13 > 90){
        res.push(String.fromCharCode(item.charCodeAt() - 13));
      } else {
        res.push(String.fromCharCode(item.charCodeAt() + 13));
      }
    } else {
      res.push(item);
    }
  }); 
return res.join('');
}
rot13("SERR PBQR PNZC");  // 你可以修改这一行来测试你的代码
