if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
      return (a || b) ? true : false;
    },

    and : function(a, b) {
    if(a && b)
      return true;
    else
      return false;
    }
  };
});
