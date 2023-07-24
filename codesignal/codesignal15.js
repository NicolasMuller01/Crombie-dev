function solution(picture) {
    var arrNew = [];
    for (var i = 0; i < picture.length + 2; i++) {
        var asterisk = "";
        for (var j = 0; j < picture[0].length + 2; j++) {
            arrNew[i] = asterisk += "*";
        }
    }
    console.log(arrNew);
    function replaceCharacter(string, index, replacement) {
        return string.slice(0, index) + replacement + string.slice(index + 1);
    }
    for (var i = 1; i < arrNew.length - 1; i++) {
        for (var j = 0; j < picture[0].length; j++) {
            console.log(arrNew[i].charAt(j + 1).replace("*", picture[i - 1].charAt(j)));
            arrNew[i] = replaceCharacter(arrNew[i], j + 1, picture[i - 1].charAt(j));
        }
    }
    console.log(arrNew);
}
solution(["ac", "dc"]);
