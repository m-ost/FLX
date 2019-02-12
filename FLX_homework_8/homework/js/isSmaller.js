function isBigger(firstNum, secondNum) {
  return firstNum > secondNum;
}

function isSmaller(firstNum, secondNum) {
  return isBigger(secondNum, firstNum);
}

isSmaller(5,-1);
