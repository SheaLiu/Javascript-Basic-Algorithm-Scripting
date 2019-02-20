
// 1️⃣使用for对数组进行循环，将符合条件的赋值给longest
function findLongestWord(str) {
  var arr = str.split(' ');
  var longest = 0;
  for(var i = 0;i < arr.length; i++){
    if(arr[i].length > longest){
      longest = arr[i].length;  
    }
  }
  return longest;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// 2️⃣使用for循环，创建新数组，然后使用Math.max()得到数组中最大的数
function findLongestWord(str) {
  var arr = str.split(' ');
  var newArr = [];
  for(var i = 0;i < arr.length; i++){
    newArr.push(arr[i].length);
  }
  return Math.max.apply(null, newArr);
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// 3️⃣sort()方法,通过sort()将数组arr按由小到大排序,再用pop()获取最长字符的长度
function findLongestWord(str) {
  var arr = str.split(' ');
  arr = arr.sort(function(a, b) {  //对arr进行排序，把最长的字符排在后面，从小到大排序法
     return a.length - b.length; 
  });
  var longestString = arr.pop().length;
  return longestString;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// 4️⃣reduce()方法
function findLongestWord(str) {
  var arr = str.split(' ');
  var longestWord = arr.reduce(function(longest,currentWord){
      return longest.length > currentWord.length ? longest : currentWord;    //longest初始值为""
  },"");     
  return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// 5️⃣reduce()方法和Math.max()方法配合使用
function findLongestWord(str) {
  var arr = str.split(' ');
  return arr.reduce(function(longest, currentWord){   //// 第2步使用reduce方法，取到strSplit数组中最长的元素的length，并且返回
     return Math.max(longest, currentWord.length);
  }, 0);
}
findLongestWord("The quick brown fox jumped over the lazy dog");









