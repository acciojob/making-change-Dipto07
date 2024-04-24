const makeChange = (c) => {
 
   const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    c = parseFloat(c); 

    let quarters = Math.floor(c / quarterValue);
    c %= quarterValue;

    let dimes = Math.floor(c / dimeValue);
    c %= dimeValue;

    let nickels = Math.floor(c / nickelValue);
    c %= nickelValue;

    let pennies = Math.floor(c / pennyValue);

    return { q: quarters, d: dimes, n: nickels, p: pennies };
}
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

module.exports = makeChange;
