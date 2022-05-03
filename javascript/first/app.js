
function fubbo(findnum) {
    console.log('findnum value for :' + findnum);
    const number = findnum;
    var n1 = 0, n2 = 1, nextTerm;
    for (var i = 1; i <= number; i++) {        
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
fubbo(10);
