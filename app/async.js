if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
     return new Promise(function(resolve,reject){
       resolve(value);
     });
    },

    manipulateRemoteData : function(url) {
        var arr=[];
        return new Promise(function(resolve,reject){
            $.ajax({
                type:"GET",
                url:url,
                success:function(data){
                for(i=0;i<data.people.length;i++)
                  arr.push(data.people[i].name);
                resolve(arr.sort());
                }
            });
        })
    }
  };
});
