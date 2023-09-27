const formatter = (local, currency, value) => {
    let formattedValue = new Intl.NumberFormat(local, {
        style: "currency",
        currency: currency,
    }).format(value);
    return formattedValue;
};

// Output to HTML
const printHTML = (finalTax) => {
    const taxTable = document.createElement("table");
    taxTable.innerHTML = `
        <tr>
            <td>Sum before tax</td>
            <td>${finalTax.sum}</td>
        </tr>
        <tr>
            <td>Tax percentage</td>
            <td>${finalTax.percentage}</td>
        </tr>
        <tr>
            <td>Tax</td>
            <td>${finalTax.tax}</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>${finalTax.total}</td>
        </tr>
    `;
    document.querySelector("main").append(taxTable);
}

const taxCalculator = (sum, percentage, local, currency, callBack) => {
    let tax = sum * (percentage / 100);
    let total = sum + tax;

    const finalTax = {
        sum         :   formatter(local, currency, sum),
        percentage  :   percentage + "%",
        tax         :   formatter(local, currency, tax),
        total       :   formatter(local, currency, total)
    }

    callBack(finalTax);
};

taxCalculator(100, 18, "en-US", "USD", printHTML);