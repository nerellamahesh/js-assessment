if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var arr=[];
        return (function listFiles(){
            if(data.files.length)
            {
                //for(var i=0;i<data.files.length;i++) {
                //    listFiles(data.files[i]);
                //}
            }
            else {
               // arr.push(data);
            }

        })();
    },

    permute: function(arr) {
        var permArr = [],
            usedChars = [];

        return (function permute() {
            var i, ch;
            for (i = 0; i < arr.length; i++) {
                ch = arr.splice(i, 1)[0];
                usedChars.push(ch);
                if (arr.length == 0) {
                    permArr.push(usedChars.slice());
                }
                permute(arr);
                arr.splice(i, 0, ch);
                usedChars.pop();
            }
            return permArr;
        })();

    }
  };
});
