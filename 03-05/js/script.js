const taxCalculator = (sum, percentage, currency, prefix) => {
    let tax = sum * (percentage / 100);
    let total = sum + tax;
    if(prefix) {
        console.log(`
            sum before tax  : ${currency}${sum}
            tax percentage  : ${percentage}%
            tax             : ${currency}${tax.toFixed(2)}
            Total           : ${currency}${total.toFixed(2)}
        `);
    } else {
        console.log(`
            sum before tax  : ${sum}${currency}
            tax percentage  : ${percentage}%
            tax             : ${tax.toFixed(2)}${currency}
            Total           : ${total.toFixed(2)}${currency}
        `);
    }
    
};

taxCalculator(100, 18, "€", false);