if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var current,timer;

      current=start;

      var printNextValue = function() {
        console.log(current);
        current++;
        if (current > end) clearInterval(timer);
      };
       timer = setInterval(printNextValue, 100);
      return { cancel: function() { clearInterval(timer); } };
    }
  };
});