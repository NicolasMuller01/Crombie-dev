var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function solution(sequence) {
    var counter = 0;
    var sequenceOrdered = __spreadArray([], sequence, true).sort(function (a, b) { return a - b; });
    var counterMoreThanOneDuplicated = 0;
    for (var i = 0; i < sequenceOrdered.length; i++) {
        if (sequenceOrdered[i] === sequenceOrdered[i + 1]) {
            counterMoreThanOneDuplicated++;
        }
    }
    if (counterMoreThanOneDuplicated > 1) {
        return false;
    }
    var posc = 0;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            console.log(sequence[i], sequence[i + 1]);
            counter++;
            posc = i;
        }
    }
    console.log(checkLeft(sequence, posc), checkRight(sequence, posc));
    console.log(counter);
    if (checkLeft(sequence, posc) && !checkRight(sequence, posc) && counter < 2) {
        return true;
    }
    else if (!checkLeft(sequence, posc) && checkRight(sequence, posc) && counter < 2) {
        return true;
    }
    else if (checkLeft(sequence, posc) && checkRight(sequence, posc) && counter < 2) {
        return true;
    }
    else {
        return false;
    }
}
function checkLeft(sequence, posc) {
    var sequenceCopy1 = __spreadArray([], sequence, true);
    sequenceCopy1.splice(posc, 1);
    var sequenceOrdered = __spreadArray([], sequenceCopy1, true).sort(function (a, b) { return a - b; });
    for (var i = 0; i < sequenceOrdered.length; i++) {
        if (sequenceCopy1[i] != sequenceOrdered[i]) {
            return false;
        }
    }
    return true;
}
function checkRight(sequence, posc) {
    var sequenceCopy2 = __spreadArray([], sequence, true);
    sequenceCopy2.splice(posc + 1, 1);
    var sequenceOrdered2 = __spreadArray([], sequenceCopy2, true).sort(function (a, b) { return a - b; });
    for (var i = 0; i < sequenceOrdered2.length; i++) {
        if (sequenceCopy2[i] != sequenceOrdered2[i]) {
            return false;
        }
    }
    return true;
}
solution([1, 4, 5, 2, 3]);
