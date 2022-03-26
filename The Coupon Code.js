// March 25th - 7 kyu
/*Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    // if enteredCode doesn't equal correctCode the function returns false 
    if (enteredCode !== correctCode) return false 
    // create arrays from the expirationDate and currentDate strings, removing the ','
    let expirationDateArr = expirationDate.replace(',', '').split(' '), currentDateArr = currentDate.replace(',', '').split(' ')
    // create an array of all months
    let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // set variables for the array index of the current date month and expiration date month
    let currentDateIndex = months.indexOf(currentDateArr[0]), expirationDateIndex= months.indexOf(expirationDateArr[0])
    if (currentDateArr[2] < expirationDateArr[2]) {
      // if the current year is less than expiration year return the function as true
      return true
      // if the current year is after the expiration year then return the fuction as false
    } else if (Number(currentDateArr[2]) > Number(expirationDateArr[2])) {
      return false
      // if the current year equals the expiration year 
    } else {
      // if the current month comes before the expiration month return function as true
      if (currentDateIndex < expirationDateIndex) {
        return true
        //if the current month comes after the expiration month return function as false
      } else if (currentDateIndex > expirationDateIndex) {
        return false
        // if the current month is the same as the expiration month
      } else {
        // returns true if the current date day is less than or equal to the expiration date day, otherwise returns false
        return (Number(currentDateArr[1]) <= Number(expirationDateArr[1]))
      }
    }
}