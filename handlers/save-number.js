function saveNumberHandler() {
  debugger;
  // read new number from user input
  
  const curr = document.getElementById('input').value;

  // read from state the data you will need for the next step
  const oldBiggest = document.getElementById('biggest').innerHTML ;
  const oldSmallest = document.getElementById('smallest').innerHTML;
  const past = numbers.current;

  // find the new biggest and smallest values  
if(curr > oldBiggest){
  numbers.current = curr;
  numbers.biggest = curr;
  numbers.smallest = oldSmallest;
  document.getElementById('biggest').innerHTML = curr;
  document.getElementById('smallest').innerHTML = oldSmallest;
}
else if(curr < oldBiggest && curr > oldSmallest){
  numbers.current = curr;
  numbers.biggest = oldBiggest;
  numbers.smallest = oldSmallest;
  document.getElementById('biggest').innerHTML = oldBiggest;
  document.getElementById('smallest').innerHTML = oldSmallest;
}
else if(curr < oldBiggest && curr < oldSmallest){
  numbers.current = curr;
  numbers.biggest = oldBiggest;
  numbers.smallest = curr;
  document.getElementById('biggest').innerHTML = oldBiggest;
  document.getElementById('smallest').innerHTML = curr;
}


  // update state: new biggest, new smallest, new current & save the last current

  // re-render the user interface with values stored in state
 document.getElementById('input').value = curr;




  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    numbers: JSON.parse(JSON.stringify(curr))
  });
}
