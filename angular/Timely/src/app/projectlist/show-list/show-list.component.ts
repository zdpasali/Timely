import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

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

  }

  endTimerClick(){
  }

  saveButtonClick(){
  }

}
