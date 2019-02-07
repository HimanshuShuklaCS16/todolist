export class Init{
  load(){
    if(localStorage.getItem('todos')===null||localStorage.getItem('todos')==undefined){
      console.log('no todos found . . .creating');
      var todos=[
        {text:'himanshu'},
        {text:'himanshu'},
        {text:'himanshu'},
        {text:'himanshu'},
        {text:'himanshu'},
        {text:'himanshu'}
      ];
      localStorage.setItem('todos',JSON.stringify(todos));
      return;
    }
    else
    {
      console.log('found todos');
    }

  }

}
