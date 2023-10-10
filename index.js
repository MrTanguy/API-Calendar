module.exports = getAllDaysOfMonth;

function getAllDaysOfMonth (month, year) {

    let nextMonth = new Date(year, month + 1, 1);

    let lastDayOfMonth = new Date(nextMonth - 1);

    let days = [];

    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
        days.push(new Date(year, month, day));
    }

    console.log(days)

    return days;
}
