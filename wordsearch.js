const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = ['','','','','','','',''];

    for (let i = 0; i < horizontalJoin.length; i++){
        for(let j = 0; j < horizontalJoin[i].length; j++){
            verticalJoin[j] += horizontalJoin[i][j];
        }
    }   
    for (let string of horizontalJoin) {
        if (string.includes(word)) { 
            console.log("its true");
            return true 
        }
    }
    for (let string of verticalJoin) {
        if (string.includes(word)) {
            console.log("its true");
            return true
        }
    }
    return false;
}
module.exports = wordSearch