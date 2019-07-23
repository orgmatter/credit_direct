export const formatAmount = (value) => {

    //validate amount to be a valid number
    if (isNaN(parseFloat(value))) {
        return 'NaN';
    }

    //convert to float and strip to 2 dec. pl.
    let amount = parseFloat(value).toFixed(2);

    let [majorPart, minorPart] = amount.split('.');

    majorPart = majorPart.split('');
    majorPart.reverse();

    let temp = [];
    let count = 0;

    majorPart.map(item => {

        if (count == 3) {
            temp.push(',');
            count = 0;
        }
        temp.push(item);
        count++;
    });

    temp.reverse();

    return temp.join('') + '.' + minorPart;
}

export const formatAmountMajor = (value) => {

    //validate amount to be a valid number
    if (isNaN(parseInt(value))) {
        return 'NaN';
    }

    //convert to float and strip to 2 dec. pl.
    let amount = value;

    let majorPart = amount;

    majorPart = majorPart.split('');
    majorPart.reverse();

    let temp = [];
    let count = 0;

    majorPart.map(item => {

        if (count == 3) {
            temp.push(',');
            count = 0;
        }
        temp.push(item);
        count++;
    });

    temp.reverse();

    return temp.join('');
}