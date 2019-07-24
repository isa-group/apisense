import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  Object = Object;
  docsCreated = {}

  @Input() datasOfRequest: object;
  @Input() indexMain: object;
  constructor() {

  }

  ngOnInit() {


  }

 




}
