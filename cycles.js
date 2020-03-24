/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
    let discount;
    if (redemption > 0 && redemption <= 350) {
      discount = '0%';
    } else if (redemption > 350 && redemption <= 1350){
      discount = '15%'
    } else if (redemption > 1350 && redemption <= 2700) {
      discount = '30%'
    } else if (redemption > 2700 && redemption <= 6500) {
      discount = '45%'
    }
  
    return discount;
  }

  console.log(calculateDiscount(350.5))
  
  /** TODO
   * implement factorial algorithm using for, while, do..while operators
   */
  {
    const i = 10; //10! = 3628800
  }
// with FOR
  function factorialCalc(num) {
    let factorial = num
    for (let i = num - 1; i >= 1; i --) {
      factorial *= i;
    }
    return factorial
  }
  
  console.log(factorialCalc(10))

  // with while
  function factorial(num) {
    let i = num - 1
    while (i >= 1) {
      num = num * i;
      i -- 1; 
    }
    return num
  }
  
  console.log(factorial(10))

  //with DO..WHILE
  function factorial(num) {
    let i = num - 1
    do {
      num = num * i;
      i --; } while (i >= 1);
    return num
  }
  
  console.log(factorial(10))


  /**
   * return concatenated string from an array of substring
   */
  {
    const substr = ["I", " love", " JS"];
  }
  const substr = ["I", " love", " JS"];
  let concatened = substr.join('')
  
  console.log(concatened)

  //with FOR 
  const substr = ["I", " love", " JS"];
  function join(array, separator) {
    let convertedToString
    for (let i = 0; i < 1; i++) {
        convertedToString = array[i]
      }
    for (let i = 1; i < array.length; i++) {
        convertedToString += separator + array[i]
      }
    return convertedToString
}

console.log(join(substr, ""))

//with FOR OF
const substr = ["I", " love", " JS"];
let str = "";
for (let element of substr) { str += element}
console.log(str)

  /**
   * calculate a total of income of certain person
   */
  // {
  //   const personIncomes = {
  //     salary: 1985,
  //     rent: -600,
  //     interestOnDeposit: 250,
  //     otherExpences: -300
  //   };
  // }
  
  // module.exports = calculateDiscount;

      const personIncomes = {
      salary: 1985,
      rent: -600,
      interestOnDeposit: 250,
      otherExpences: -300
    };
    let incomes = 0
    for (let key in personIncomes) {
      incomes += personIncomes[key]
    }
    console.log(incomes)

    function incomeOfCertainPerson(object) {
      if (object.value !== undefined) {
        object.value
      }

    // }
  