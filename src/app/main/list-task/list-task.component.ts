import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  @Input() placeholder=''
  constructor() { }

  ngOnInit(): void {
  }

}
