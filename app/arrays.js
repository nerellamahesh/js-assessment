if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
    return arr.indexOf(item);
    },

    sum : function(arr) {
      var result=0;
      for(var i=0;i<arr.length;i++)
      result= result+arr[i];

      return result;
    },


    remove : function(arr, item) {
      for(var i=0;i<arr.length;i++)
      {
        if(arr[i] == item)
        arr.splice(i,1);
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      for(var i=0;i<arr.length;i++)
      {
        if(arr[i]==item && arr[i+1]==item)
        {
          arr.splice(i,1);
          i=-1;
        }
        else if(arr[i] == item)
          arr.splice(i,1);
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.splice(arr.length-1,1);
      return arr;
    },

    prepend : function(arr, item) {
    arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.splice(0,1);
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
       arr.splice(index,0,item);
          return arr;
    },

    count : function(arr, item) {
      var count=0;
      for(var i=0;i<arr.length;i++) {
        if(arr[i]===item)
          count++;
      }
      return count;
    },

    duplicates : function(arr) {
      var newArray=[];
      arr.sort();
      for(i=0;i<arr.length;i++)
      {
        if(arr[i] == arr[i+1])
        {
          if(newArray.indexOf(arr[i])== -1)
            newArray.push(arr[i])
        }
      }
      return newArray;
    },

    square : function(arr) {
      var squareArray= [];
      for(i=0;i<arr.length;i++) {
        squareArray.push(arr[i]*arr[i]);
      }
      return squareArray;
    },

    findAllOccurrences : function(arr, target) {
      var Indexes=[];
      for(i=0;i<arr.length;i++) {
        if(arr[i] == target)
        Indexes.push(i);
      }
      return Indexes;
    }
  };
});
