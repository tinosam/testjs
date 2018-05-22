function add(x,y) {
  return x+y
}

function substract(x,y) {
  return x-y
}

function multiply(x,y) {
  return x*y
}

function divide(x,y) {
  return x/y
}

function calculate(x, op, y) {
  switch (op){
    case "+":
      return add(x,y)
      break 
    case "-":
      return substract(x,y)
      break
    case "*":
      return multiply(x,y)
      break
    case "/":
      return divide(x,y)
      break
    default:
      null
  }
}

function execute(operation) {
  var operator = []
  var num = []

  var r = 0
  for (var i = 0; i < operation.length; i++) {
    if(i >= 3 && i%2 == 0){
      if(!isNaN(parseInt(operation[i]))){
        r = calculate(r, operation[i-1], parseInt(operation[i]))
      }
    }else if(i < 3){
      if (!isNaN(parseInt(operation[i]))) {
        num.push(parseInt(operation[i]))
      }else{
        operator.push(operation[i])
      }
      r = calculate(num[0], operator[0], num[1])
    }
    else{
      
    }
  }
  return r
}
