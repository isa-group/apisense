import { Component, OnInit, Input} from '@angular/core';
import JSONFormatter from 'json-formatter-js'

@Component({
  selector: 'app-http-data',
  templateUrl: './http-data.component.html',
  styleUrls: ['./http-data.component.css']
})
export class HttpDataComponent implements OnInit {

  @Input() dataObject: object;
  @Input() fullUIDIndex: string;
  Object = Object;


  docsCreated = {}

  constructor() { }

  ngOnInit() {
  }


  getJSONData(dataObject, fullUIDIndex): boolean {
    fullUIDIndex = fullUIDIndex.toString()
    if (dataObject) {
      var newDoc;
      try{
      newDoc= new JSONFormatter(JSON.parse(dataObject)).render();
      } catch (e){
        newDoc = document.createElement('span');
        newDoc.textContent = JSON.stringify(dataObject)
      }
      let docElem = document.getElementById("jsonView" + fullUIDIndex)
      if (!this.docsCreated[fullUIDIndex]) {
        if (docElem) {
          docElem.appendChild(newDoc);
          this.docsCreated[fullUIDIndex] = newDoc
        }
      }
    }
    return true;
  }


}
