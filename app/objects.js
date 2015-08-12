if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.bind(obj)();
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
     var arr = [];
      for (var property in obj) {
        if (obj.hasOwnProperty(property))
          arr.push(property + ": " + obj[property]);
      }
      return arr;
    }
  };
});
