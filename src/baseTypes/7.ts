/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  monday = 0,
  tuesday = 1,
  wednesday = 2,
  thursday = 3,
  friday = 4,
  saturday = 5,
  sunday = 6,
}

const isWeekend = (day: WeekDay): boolean => {
  return day > 4;
};

console.log(isWeekend(WeekDay.friday), "should be false");
console.log(isWeekend(WeekDay.saturday), "should be true");
