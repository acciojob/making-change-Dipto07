const makeChange = (c) => {
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    c = parseFloat(c); 

    const quarters = Math.floor(c / quarterValue);
    c %= quarterValue;

    const dimes = Math.floor(c / dimeValue);
    c %= dimeValue;

    const nickels = Math.floor(c / nickelValue);
    c %= nickelValue;

    const pennies = Math.round(c / pennyValue);

    return { q: quarters, d: dimes, n: nickels, p: pennies };
};

const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

module.exports = makeChange;
