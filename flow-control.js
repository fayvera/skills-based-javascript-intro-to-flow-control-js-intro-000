var basicTeenager = function(age){
    if (13 < age && age < 19){
      return ('You are a teenager!');
    }
}

function teenager(age) {
    if (13 =< age =< 19){
      return ('You are a teenager!');
    }
    else {
      return ('You are not a teenager');
    }
};

function ageChecker(age) {
  if(age >= 13 && age <=19){
    return ('You are a teenager!')
  }
  else if(age <= 12){
    return ('You are a kid')
  }
  else(age >= 20)
    return ('You are a grownup')
};

function ternaryTeenager(age) {
  return ((age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager");
}

function switchAge(age) {
  switch (age) {
    case 13:
      console.log("You are a teenager");
      break;
    case age = 14:
      console.log("You are a teenager");
      break;
    case age = 15:
      console.log("You are a teenager");
      break;
    case age = 16:
      console.log("You are a teenager");
      break;
    case age = 17:
      console.log("You are a teenager");
      break;
    case age = 18:
      console.log("You are a teenager");
      break;
    case age = 19:
      console.log("You are a teenager");
      break;
    default: {
      console.log("You have an age");
    }
  }
}
