
export const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


export const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];


export const getDaysArray = (month, year) => {

    let currentMonthEntries = getDaysInMonth(month, year, true);


    let previousMonth = month - 1;
    let previousYear = year;
    if (previousMonth < 0) {
        previousMonth = 11;
        previousYear = previousYear - 1;
    }
    let previousMonthEntries = getDaysInMonth(previousMonth, previousYear, false);


    let nextMonth = month + 1;
    let nextYear = year;
    if (nextMonth > 11) {
        nextMonth = 0;
        nextYear = nextYear + 1;
    }
    let nextMonthEntries = getDaysInMonth(nextMonth, nextYear, false);

    let leftOffset = currentMonthEntries[0].weekDay;

    let rightOffset = 6 - currentMonthEntries[currentMonthEntries.length - 1].weekDay;



    return [
        ...previousMonthEntries.slice(previousMonthEntries.length - leftOffset),
        ...currentMonthEntries.slice(),
        ...nextMonthEntries.slice(0, rightOffset)
    ];
}


function getDaysInMonth(month, year, thisMonth) {
    var result = [];
    // Since no month has fewer than 28 days
    var date = new Date(year, month, 1);

    while (date.getMonth() === month) {

        result.push({
            day: date.getDate(),
            weekDay: date.getDay(),
            thisMonth: thisMonth
        })

        date.setDate(date.getDate() + 1);
    }
    return result;
}


