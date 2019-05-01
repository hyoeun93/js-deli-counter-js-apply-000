 var number = 0;

function takeANumber2(current) {
 number++;
 current.push(number);
 
  return `Welcome, your number is ${number}.`
}

function takeANumber(current, name) {
  var curent = current.push(name);
  
  for(var i = 0; i < current.length; i++) {
    if(current[i] === name) {
      var number = i + 1;
    }
  }
  return `Welcome, ${name}. You are number ${current.length} in line.`
}

function nowServing(current) {
  if(current.length === 0) {
      return "There is nobody waiting to be served!";
    }
    
  var customer = current.shift();
    return `Currently serving ${customer}.`;
}

function currentLine(current) {
  if(current.length === 0) {
      return "The line is currently empty."
  }
  var arr = [];
  for(var i = 0; i < current.length; i++) {
    var line = i + 1
    var element = current[i];
    arr.push(line + ". " + element)
    var result = "The line is currently: " + arr.join(", ")
    }
    return result;
}