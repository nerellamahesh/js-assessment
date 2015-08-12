if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return ((1==((num >> bit-1) &1)) ? 1 : 0);
    },

    base10: function(str) {
      return parseInt(str,2);
    },

    convertToBinary: function(num) {
        var bits = [];
        for (var i = 0; i < 8; i++) {
            bits.push(num % 2);
            num = (num - num % 2) / 2;
        }
        bits.reverse();
        return bits.join("");

    },

    multiply: function(a, b) {
    var result = a*b;

        Number.prototype.countDecimals = function () {
            if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
            return this.toString().split(".")[1].length || 0;
        }

       return parseFloat(result.toFixed(b.countDecimals()));

    }
  };
});

