import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
var currentTimeStart = new Date();
var currentTimeStop = new Date();
var diffData="a";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private service:SharedService) { }

  ListofProjects:any=[];
  lst:any;
  ProjectName="";
  public timerOn:boolean = false;
  public timerOff:boolean = true;
  public firstTimePressed:boolean = false;

  ListOfStartTime:any=[];

  ngOnInit(): void {
    this.refreshProjectList();
    this.ProjectName=this.lst.ProjectName;
  }

  refreshProjectList(){
    this.service.getProjectList().subscribe(data=>{
      this.ListofProjects=data;
    });
  }

  startTimerClick(){
    currentTimeStart = new Date();
    this.timerOn = true;
    this.firstTimePressed = true;
    this.timerOff = false;
    this.ListOfStartTime.push(currentTimeStart);
  }

  endTimerClick(){
    currentTimeStop = new Date();
  }

  saveButtonClick(){
    var difference = new Date();
    difference.setTime(currentTimeStop.getTime() - currentTimeStart.getTime());
    var dift =(("0" + (difference.getHours() - 1)).slice(-2)   + ":" + 
    ("0" + difference.getMinutes()).slice(-2) + ":" + 
    ("0" + difference.getSeconds()).slice(-2));
    diffData = dift.toString();
    this.ListOfStartTime=[];

    var val = {ProjectName:this.ProjectName,
      StartTime:currentTimeStart,
      EndTime:currentTimeStop,
      DurationTime:diffData}

    this.service.addToProjectList(val).subscribe(res =>{this.refreshProjectList()});
    this.timerOff=true;
    this.timerOn=false;
    this.refreshProjectList();
    
  }

}
