var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function solution(a) {
    var arrPosition = [];
    var arrValues = [];
    var aCopy = __spreadArray([], a, true);
    for (var i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            arrPosition.push(i);
            arrValues.push(a[i]);
        }
    }
    arrValues.sort(function (a, b) { return a - b; });
    console.log(arrValues);
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (i === arrPosition[j]) {
                aCopy[i] = arrValues[j];
            }
        }
    }
    return aCopy;
}
