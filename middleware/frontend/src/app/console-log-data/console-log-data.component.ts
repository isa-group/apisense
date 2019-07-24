import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-console-log-data',
  templateUrl: './console-log-data.component.html',
  styleUrls: ['./console-log-data.component.css']
})
export class ConsoleLogDataComponent implements OnInit {
  @Input() dataObject: object;
  @Input() fullUIDIndex: string;
  Object = Object;
  constructor() { }

  ngOnInit() {
  }

}
