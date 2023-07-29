function solution(picture: string[]): string[] {

    const arrNew: string[] = [];

    for (let i:number = 0; i < picture.length+2; i++) {
        let asterisk: string = "";
        for (let j = 0; j < picture[0].length+2; j++) {
            arrNew[i] = asterisk+= "*"
        }
    }

    console.log(arrNew)

    function replaceCharacter(string : string, index: number, replacement: string): string {
        return string.slice(0, index) + replacement + string.slice(index + 1);
      }
      

    for (let i:number = 1; i < arrNew.length-1; i++) {

        for (let j = 0; j < picture[0].length; j++) {
            console.log(arrNew[i].charAt(j+1).replace("*",picture[i-1].charAt(j)))
            arrNew [i] = replaceCharacter(arrNew[i] , j+1 , picture[i-1].charAt(j) )
        }
    }

    return arrNew
}