/* 

If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:

function sum1_10(){
  return 1+2+3+4+5+6+7+8+9+10;
}
Wow~~,looks very cool! But if we need to calculate the cumulative value from 1 to 100, the code becomes:

function sum1_100(){
  return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
  +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
  +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
  +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
}
Do you feel a bit tired? We can use a loop statement to do it:

function sum1_100(){
  var sum=0,num=1;    //Initialize two variables sum and num
  while (num<=100){   //Determine the expression in brackets, while true, 
                      //run the code block one time, while false, break the loop
    sum=sum+num;      //Each time num will be added to the current value of sum
                      //It can be simplified as:  sum+=num
    num=num+1;        //Each time the value of num increases by 1
                      //It can be simplified as:  num++
  }
  return sum;         //return the final cumulative value
}
The do..while is a variant of while. The example above can be written like this:

function sum1_100(){
  var sum=0,num=1;
  do{
    sum+=num;
    num++;
  }while (num<=100)
  return sum;
}
while judges the condition at the beginning before executing its code, so if the condition is false the code inside the while loop is never executed. In contrast, do..while always runs once, and then starts checking the condition after that.

Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions), otherwise it will turn into an infinite loop.

Ok, lesson is over. Let us do a task with while.

Task
Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.

*/

function padIt(str, n) {
  let a = str,
    num = 1;

  do {
    if (num % 2 === 1) {
      a = '*' + a;
    } else {
      a = a + '*';
    }
    num++;
  } while (num <= n);

  return a;
}
