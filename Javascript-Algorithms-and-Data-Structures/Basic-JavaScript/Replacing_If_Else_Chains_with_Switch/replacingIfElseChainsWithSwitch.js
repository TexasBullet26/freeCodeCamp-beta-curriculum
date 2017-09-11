function chainToSwitch(val)
{
  var answer = "";

  switch(val)
  {
    case "bob":
      answer = "Marley";
      break;

    case 1:
      answer = "There is no #1";
      break;

    case 7:
      answer = "Ate Nine";
      break;

    case 42:
      answer = "The Answer";
      break;

    case 99:
      answer = "Missed me by this much!";
      break;
  }

  return answer;

}

// Tests
chainToSwitch(7);
