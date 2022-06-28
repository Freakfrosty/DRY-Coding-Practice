function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum;
  if (checkIsGreater(num1, num2)) {
    bigNum = num1;
    return bigNum * 2;
  }
  bigNum = num2;
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum;
  if (checkIsGreater(num1, num2)) {
    bigNum = num1;
    return bigNum / 3;
  }
  bigNum = num2;
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum;
  if (checkIsGreater(sum1, sum2)) {
    bigNum = sum1;
    return `I ate ${bigNum} tacos.`;
  }
  bigNum = sum2;
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  if (checkIsGreater(weight2, weight1)) {
    smallDog = weight1;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  }
  smallDog = weight2;
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

function checkIsGreater(value1, value2){
  if(value1 > value2){
    return true;
  }
  else{
    return false;
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
