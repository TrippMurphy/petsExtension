class commandLine{
  constructor(){
    this.userCommand = document.getElementById('newCommand');
    this.userCommand.addEventListener('keypress', function(event){
      if(event.key === 'Enter'){
        this.input = userCommand.value;
        console.log('userCommand: ', this.userCommand, 'input: ', this.input);
      }
    });
  }
}
// class commandLine{
//     constructor(){
//         this.userCommand = document.getElementById('newCommand');
//         this.userCommand.addEventListener('keypress', newInput(event));
//     }
    
//     newInput(event){
//         if(event.key === 'Enter'){
            
//         }
//     }

// }