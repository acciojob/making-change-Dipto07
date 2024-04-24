function makeChange(c) {
    var Q = 25;
    var D = 10;
    var N = 5;
    var P = 1;

    var q = Math.floor(c / Q);
    c = c % Q;

    var d = Math.floor(c / D);
    c = c % D;

    var n = Math.floor(c / N);
    c = c % N;

    var p = Math.floor(c / P);

    return {"q": q, "d": d, "n": n, "p": p};
}

console.log(makeChange(47));  
console.log(makeChange(24));  
