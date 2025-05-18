console.log('------------------- Basic Task 5 -------------------');


enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek): boolean => { 
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

const isMonday = isWeekend(DayOfWeek.Monday);
const isTuesday = isWeekend(DayOfWeek.Tuesday);
const isWednesday = isWeekend(DayOfWeek.Wednesday);
const isThursday = isWeekend(DayOfWeek.Thursday);
const isFriday = isWeekend(DayOfWeek.Friday);
const isSaturday = isWeekend(DayOfWeek.Saturday);
const isSunday = isWeekend(DayOfWeek.Sunday);

console.log('Is Monday a weekend? - ' + isMonday);
console.log('Is Tuesday a weekend? - ' + isTuesday);
console.log('Is Wednesday a weekend? - ' + isWednesday);
console.log('Is Thursday a weekend? - ' + isThursday);
console.log('Is Friday a weekend? - ' + isFriday);
console.log('Is Saturday a weekend? - ' + isSaturday);
console.log('Is Sunday a weekend? - ' + isSunday);
