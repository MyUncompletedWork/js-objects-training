/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE
function daysUntilDate(dob){
  var currentDate = new Date();
  var bDay= new Date(dob);
  var yrsDiff = currentDate.getYear() - bDay.getYear();
  var dayDiff = yrsDiff * 365;
  var diff = Math.abs(bDay-currentDate);
  var days = diff/(1000*60*60*24);
  days=Math.round(days);
  days=days-dayDiff;
  days=Math.abs(days)
  return days;
}

function birthdayReminder(x){
  for(var i = 0; i<x.length; i++){
    console.log(x[i].name+"'s'"+ "birthday" + " " + "is" + " " + "in" + " " +daysUntilDate(x[i].dob));
  }
}

peopleBirthDay = ([
  {
    name: "Jack",
    dob: "10/31/2013"
  },
  {
    name: "Jill",
    dob: "4/01/1975"
  }
]);

birthdayReminder(peopleBirthDay);
