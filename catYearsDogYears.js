/* 

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

var humanYearsCatYearsDogYears = function (humanYears) {
  let human = humanYears;
  let cat = 0;
  let dog = 0;

  if (human) {
    human -= 1;
    cat += 15;
    dog += 15;
  }

  if (human) {
    human -= 1;
    cat += 9;
    dog += 9;
  }

  cat += human * 4;
  dog += human * 5;

  return [humanYears, cat, dog];
};
