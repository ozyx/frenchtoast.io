import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  id: number = -1;
  title: string = "Default task";
  description: string = "Some boring task";
  assigned: string = "Bubsy";
  
  constructor() { }
  ngOnInit(){
  }
}
