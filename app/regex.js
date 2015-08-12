if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return ((/\d+/g).test(str)) ? true : false;
    },

    containsRepeatingLetter : function(str) {
      return (/([a-zA-Z]).*?\1/).test(str);
    },

    endsWithVowel : function(str) {
      return (/[a,e,i,o,u]$/i).test(str)?true :false;
    },

    captureThreeNumbers : function(str) {
      var result = ((/[0-9]{3,}/)).test(str) ? true : false;
      if(result)
        return str.match(/[0-9]{3,}/).toString().substr(0, 3);
      else
        return false;
    },

    matchesPattern : function(str) {
      return ((/^([0-9]{3}-[0-9]{3}-[0-9]{4})$/).test(str)) ? true : false;

    },
    isUSD : function(str) {
      return ((/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/).test(str)) ? true : false ;
    }
  };
});
