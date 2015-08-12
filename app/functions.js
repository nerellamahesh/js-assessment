if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
    return fn.apply(this,arr);
    },

    speak : function(fn, obj) {
    return fn.bind(obj)();
    },

    functionFunction : function(str) {
      return function(str1)
      {
        return str +", "+ str1;
      }
    },

    makeClosures : function(arr, fn) {
      var newArr = [];
      for ( var i = 0; i < arr.length; i++ ) {
        newArr.push(
            function(args) {
              return function () {
                return fn(args);
              }
            }(arr[i])
        )
      }

      return newArr;
    },

    partial : function(fn, str1, str2) {
      return fn.bind(null,str1,str2);
    },

    useArguments : function(a,b,c,d) {
          if(a && b && c && d)
               return a +b +c +d ;
          else if(a && b && c )
                return a+b +c ;
          else if (a && b)
               return a+b;
          else if (a)
               return a;
    },

    callIt : function(fn) {
      var arr = [];
      for(i=1;i<arguments.length;i++)
      {
        arr.push(arguments[i]);
      }
      fn.apply(null,arr);

    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1)
      return function() {
        var remainingArgs = Array.prototype.slice.call(arguments)
        return fn.apply(null, args.concat(remainingArgs))
      }
    },

    curryIt : function(fn) {
      var Args = [];
      var curried = function(arg) {
        Args.push(arg);
        if (Args.length === fn.length) return fn.apply(this,Args);
        return curried;
      };
      return curried;
    }
  };
});
