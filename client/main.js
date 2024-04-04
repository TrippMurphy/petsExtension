document.addEventListener('DOMContentLoaded', () => {
  const commandLine = document.querySelector('form');
  const userCommand = document.getElementById('newCommand');

  let head = new Head;

  commandLine.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = split(userCommand.value);

    if(input[0] === 'add') head = add(input[1], head);
    else if(input[0] === 'feed') feed(head);
    else if(input[0] === 'move') move(head);
    else if(input[0] === 'party') party(head);
    else if(input[0] === 'congaLine') congaLine(head);

    userCommand.value = '';
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
function add(value, head){
  const cache = head;
  head = new Pets(value);
  head.next = cache;
  return head;
}
function feed(head){
  let cache = head;
  if(cache.size <= 60){
    while(cache.next !== null){
      cache.size += 5;
      cache.petIMG.setAttribute('style', `width: ${cache.size}px; height: ${cache.size}px; text-align: center`);
      cache = cache.next;
    }
  }
}
function move(head, speed = 5){
  const grass = document.querySelector('.grass');
  const grassStyle = window.getComputedStyle(grass);
  const width = grassStyle.getPropertyValue('width');
  const height = grassStyle.getPropertyValue('height');  

  let cache = head;
  let i = 2;
  // console.log(width, height);
  while(cache.next !== null){
    const newX = Math.random() * (400 - cache.size * i);
    // - (cache.size * i);
    const newY = Math.random() * (400 - cache.size);

    // const newX = Math.random() * (width - cache.size);
    // const newY = Math.random() * (height - cache.size);

    // console.log('x', newX, ' y', newY);
    cache.petIMG.style.transition = `transform ${speed}s linear`;
    cache.petIMG.style.transform = `translate(${newX}px, ${newY}px)`;
    cache = cache.next;
    i++;
  }
  setTimeout(() => {
    move(head);
  }, speed * 1000); 
}
function party(head){
  const allPets = ['adeeb', 'amy', 'howard', 'jea', 'karol', 'kelly', 'lillian', 'maya', 'neul', 'ricardo', 'ryan', 'sang', 'sean', 'tripp1', 'tripp2'];
  for(let i = 0; i < allPets.length; i++){
    head = add(allPets[i], head);
  }
  // console.log('running', head);
  // return 
  move(head, 2);

}
function congaLine(head){
  // let cache = head;
  //store heads position
  // let storedPos1 = head.split(JSON.stringify(cache.petIMG.style.transform));

  //move head
    
  //go to next node
  // store next nodes position
  //move next node to stored heads position
  //go to next node
  //store next nodes position
  //move next node


  // console.log(JSON.stringify(cache.petIMG.style.transform));
  // let cache = head;
  // let pastLeftPosition;
  // let pastTopPosition;
  // while(cache !== null){
     
  // }

  // let cache = head;
  // let x = 250;
  // let y = 250;
  // let i = 0;
  // console.log('parseInt, ', parseInt(cache.petIMG.style.transform.match(/translateX\((.*?)px\)/)[0]));
  // //.match(/translateX\((.*?)px\)/)[1]
  // // // Calculate the position of the head pet
  // while (cache.next !== null) {
  //   x += parseInt(cache.petIMG.style.transform);
  //   y += parseInt(cache.petIMG.style.transform);
  //   i++;
  //   cache = cache.next;
  // }
  // x = y / i;
  // y = y / i;

  // // Move all pets to the calculated position
  // cache = head;
  
  // while (cache.next !== null) {
  //   // cache.p
  //   // cache.petIMG.style.transition = 'transform 1s linear'; // Adjust the animation duration if needed
  //   cache.petIMG.style.transform = `translate(${x}px, ${y}px)`;
  //   cache = cache.next;
  // }
  // return;

  //on arrow key press(not backwards)
  //cache head
  //current position = cache x, y
  //move cache in arrow direction
  //move cache down the line
}
  // bodyMove(topPosition, leftPosition){
  //   let index = this.next;
  //   let pastTopPosition;
  //   let pastLeftPosition;
  //   while(index !== null){
  //     pastTopPosition = index.topPosition;
  //     pastLeftPosition = index.leftPosition;

  //     index.topPosition = topPosition;
  //     index.leftPosition = leftPosition;

  //     index.node.setAttribute('style', `left: ${index.leftPosition}px; top: ${index.topPosition}px`);

  //     topPosition = pastTopPosition;
  //     leftPosition = pastLeftPosition;

  //     index = index.next;
  //   }
  // }
// }

//functionality:
//creates and utilizes each object instance
//all command functions here (add, move)
  //add function: new instance of pets, linked list functionality
  //move animation stuff, update each pets location

  //look up TODO list push onto page

  class Head{
    constructor(){
      this.next = null;
    }
  }
  class Pets{
    constructor(petName){
      this.size = 30;
      this.petIMG = document.createElement('img');
      this.petIMG.setAttribute('src', `assets/images/${petName}.png`);
      this.petIMG.setAttribute('style', `width: ${this.size}px; height: ${this.size}px; text-align: center`);
      this.petIMG.setAttribute('alt', `${petName}'s pet`);

      this.petIMG.classList.add('pet');

      document.querySelector('.grass').appendChild(this.petIMG);
      this.next = null;
    }
  }
  //functionality:
//Object that contains all properties a pet would need
    //name, source image
    //linked list properties???
//move method