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
    if (redemption <= 350) {
      discount = '0%';
    } else if (redemption >= 351 && redemption <= 1350){
      discount = '15%'
    } else if (redemption >= 1351 && redemption <= 2700) {
      discount = '30%'
    } else if (redemption >= 2701 && redemption <= 6500) {
      discount = '45%'
    }
  
    return discount;
  }

  console.log(calculateDiscount(400))
  
  /** TODO
   * implement factorial algorithm using for, while, do..while operators
   */
  {
    const i = 10; //10! = 3628800
  }
// with FOR
  function factorial(num) {
    for (let i = num - 1; i >= 1; i -= 1) {
      num *= i;
    }
    return num
  }
  
  // console.log(factorial(10))

  // with while
  function factorial(num) {
    let i = num - 1
    while (i >= 1) {
      num = num * i;
      i -= 1; 
    }
    return num
  }
  
  console.log(factorial(10))

  //with DO..WHILE
  function factorial(num) {
    let i = num - 1
    do {
      num = num * i;
      i -= 1; } while (i >= 1);
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
  
  // console.log(concatened)

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

    // function incomeOfCertainPerson(object) {
    //   if (object.value !== undefined) {
    //     object.value
    //   }

    // }
  