import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  list: string ='';
  
  tasksDone: any[]=[
   
  ];
  
  

  tasksPending: any[]=[
    
  ];
  
  constructor() { 
    
  }
  newtask(){
      this.tasksPending.push({'title':this.list,isDone:false,delete:false,favorites:false})
      console.log(this.tasksPending);
    
  }
  
  done(){
    for (let index = 0; index < this.tasksPending.length; index++) {
      let task = this.tasksPending[index];
      console.log(task);
      
      if(task.isDone===true){this.tasksDone.push({'title':task.title,isDone:true,delete:false,favorites:false})}
      console.log(this.tasksDone);
    }
    for (let index = 0; index < this.tasksPending.length; index++) {
      let task = this.tasksPending[index];
      console.log(task);
      
      if(task.isDone===true){
      this.tasksPending.splice(index,1)
      console.log(this.tasksDone);
    }
  }
}
  noDone(){
    for (let index = 0; index < this.tasksDone.length; index++) {
      const taskDone = this.tasksDone[index];
      if(taskDone.isDone===false){this.tasksPending.push({'title':taskDone.title,isDone:false,delete:false,favorites:false})}
      console.log(this.tasksPending);
    }
    for (let index = 0; index < this.tasksDone.length; index++) {
      const taskDone = this.tasksDone[index];
      if(taskDone.isDone===false){
      this.tasksDone.splice(index,1)
      console.log(this.tasksPending);
    }
  }
}
delet(){
  for (let index = 0; index < this.tasksPending.length; index++) {
    let task = this.tasksPending[index];
    console.log(task);
    
    if(task.delete===true){this.tasksPending.splice(index,1)
  }
}
}
delet2(){
  for (let index = 0; index < this.tasksDone.length; index++) {
    let taskDone = this.tasksDone[index];
    console.log(taskDone);
    
    if(taskDone.delete===true){this.tasksDone.splice(index,1)
  }
}
}
favorites(){
  for (let index = 0; index < this.tasksPending.length; index++) {
    let task = this.tasksPending[index];
    console.log(task);
    
    if(task.favorites===true){this.tasksPending.unshift(task)
    this.tasksPending.splice(index+1,1)

  }
}
}
  ngOnInit(): void {
  }

}
