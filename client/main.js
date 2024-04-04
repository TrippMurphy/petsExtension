
document.addEventListener('DOMContentLoaded', () => {
  
  const grass = document.querySelector('.grass');

  const commandLine = document.querySelector('form');
  const userCommand = document.getElementById('newCommand');

  const functions = {
    add: add(),
  }

  commandLine.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const input = split(userCommand.value);

    if(input[0] === 'add') add(input[1]);

    userCommand.value = ''; // Reset input field
  });
    
});
function split(value){
  let output = [];
  let start = 0;
  for(let i = 0; i < value.length; i++){
    if(value.charAt(i) === '(' || value.charAt(i) === ')'){
      output.push(value.slice(start, i));
      start = i + 1;
    }
  }
  return output;
}
function add(value){
  const h1 = document.createElement('h1');
  h1.innerText = value, 'add running';
  document.querySelector('body').appendChild(h1);
}

//functionality:
//creates and utilizes each object instance
//all command functions here (add, move)
  //add function: new instance of pets, linked list functionality
  //move animation stuff, update each pets location

  //look up TODO list push onto page