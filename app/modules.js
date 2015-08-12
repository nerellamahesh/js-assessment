if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      return (function(){
          var obj={};
        obj.name=str2;
        obj.greeting=str1;
        obj.sayIt= function(){
          return obj.greeting +', '+ obj.name;
        }
        return obj;
      })(str1,str2);
    }
  };
});

