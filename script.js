const date = 2050;
const status = 'student';
let count = 0;

if (date === 2050) {
  console.log('January', 'New Year’s Day');
  console.log('March', 'Human Rights Day');
  const month = 'April';
  console.log(month, 'Family Day');
  console.log(month, 'Freedom Day');
  count += 4;

  if (status === 'student') {
    console.log('June', 'Youth Day');
    count += 1;
  }

  console.log('August', 'Women’s Day');
  console.log('September', 'Heritage Day');
  const december = 'December';
  console.log(december, 'Day of Reconciliation');
  count += 3;

  if (status === 'parent') {
    console.log(december, 'Christmas Day');
    count += 1;
  }

  console.log(december, 'Day of Goodwill');
  count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);
