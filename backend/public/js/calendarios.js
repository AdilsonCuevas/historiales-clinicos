let montNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembe', 'Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');
let prevMonth = document.getElementById('prev__month');
let nextMonth = document.getElementById('next__month');

month.textContent = montNames[monthNumber];
year.textContent = currentYear.toString();

prevMonth.addEventListener('click', ()=>lastMonth());
nextMonth.addEventListener('click', ()=>nexMont());

writeMonth(monthNumber);

function writeMonth(month) {
    for (let i=startDay(); i>0; i--){
        var a = getTotalDays(month-1)-(i-1);
        dates.innerHTML += "<div class='calendar__item last_day cal_day'>" + a + "</div>";
    }

    for (let i=1; i<=getTotalDays(month); i++){
        if (i===currentDay){
            dates.innerHTML += "<div class='calendar__item today'>" + i + "</div>";
        }
    else {
            dates.innerHTML += "<div class='calendar__item cal_day'>" + i + "</div>";
    }
    }
}

function getTotalDays(month) {
    if (month === -1) {month=11;}
    if (month ==0 || month ==2 || month ==4 || month ==6 || month ==7 || month ==9 || month ==11) {return 31;}
    else if (month ==3 || month ==5 || month ==8 || month ==10) {return 30;}
    else {return isLeap() ? 29:28;}
}
function isLeap() {
    return ((currentYear % 100 !==0) && (currentYear % 4 ===0) || (currentYear % 400 ===0))
}
function startDay() {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) ===-1) ? 6 : start.getDay()-1;
}
function lastMonth() {
    if (monthNumber!==0){ monthNumber--;}
    else {monthNumber = 11; currentYear--;}
    setNewDate();
}
function nexMont() {
    if (monthNumber!==11){ monthNumber++;}
    else {monthNumber = 0; currentYear++;}
    setNewDate();
}
function setNewDate() {
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    month.textContent = montNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}