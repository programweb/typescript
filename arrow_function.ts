let divide = (
    x,
    y
  ) => {
    let returnVar;
    if(y == 0) returnVar = 'No attempt to divide by zero';
    else returnVar = x / y;
    return returnVar;
  }