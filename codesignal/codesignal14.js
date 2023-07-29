function solution(a) {
    var counter1 = 0;
    var counter2 = 0;
    for (var i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            counter1 += a[i];
        }
        else {
            counter2 += a[i];
        }
    }
    var arrFinal = [counter1, counter2];
    return arrFinal;
}
