/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x < Math.pow(-2, 31) || x > (Math.pow(2, 31) - 1)) {
        return 0;
    }

    var arr = x.toString(10).replace(/\D/g, '0').split('').map(Number);
    if (arr[0] === -1) {
        return Number(arr.shift().reverse().Number(""));
    }
    else {
        return Number(arr.reverse().join(""));
    }
};
