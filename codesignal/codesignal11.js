function solution(n) {
    var half = n.toString().length / 2;
    var firstSum = 0;
    var secondSum = 0;
    for (var i = 0; i < half; i++) {
        firstSum += parseInt(n.toString().charAt(i));
    }
    for (var i = half; i < n.toString().length; i++) {
        secondSum += parseInt(n.toString().charAt(i));
    }
    if (firstSum === secondSum) {
        return true;
    }
    else {
        return false;
    }
}
console.log(solution(1230));
