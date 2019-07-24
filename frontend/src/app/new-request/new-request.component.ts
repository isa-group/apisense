import { Component, OnInit, Input, Optional } from '@angular/core';
import {AppComponent } from '../app.component';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  @Input() dataObject: object;
  @Input() fullUIDIndex: string;
  Object = Object;

  constructor(@Optional() private parent: AppComponent) { }

  ngOnInit() {
  }

  sample(){
    return [{
      "sid": "1561595515279_66dc105c36fa45f398e409c1bd5bf427",
      "tid": "1561595515279_ea15c32fc0f5422ab658a7b27e3c462b",
      "eid": "1561595515279_021e4a216abd45faaacb1572ff6bf38f",
      "timestamp": 1561595515280,
      "dataType": "Request-Received",
      "data": {
      "ip": "::1",
      "url": "/api/v1/stress/30000/10000",
      "method": "GET",
      "body": {},
      "cookies": "",
      "headers": {
      "user-agent": "PostmanRuntime/7.15.0",
      "accept": "*/*",
      "cache-control": "no-cache",
      "postman-token": "d5df1729-53b9-45dc-a0ea-6e52c438b215",
      "host": "localhost:8081",
      "accept-encoding": "gzip, deflate",
      "connection": "keep-alive"
      },
      "timestamp": 1561595515280
      },
      "_id": "pvmAvbR90vrLFTA8"
      },
    
      {
        "sid": "1561595515279_66dc105c36fa45f398e409c1bd5bf427",
        "tid": "1561595515279_ea15c32fc0f5422ab658a7b27e3c462b",
        "eid": "1561595515279_021e4a216abd45faaacb1572ff6bf38f",
        "timestamp": 1561595515387,
        "dataType": "Response-Sent",
        "data": {
        "body": "{\"problem\":\"knapsack\",\"parameters\":[{\"id\":\"itemNumber\",\"value\":30000},{\"id\":\"maxWeight\",\"value\":10000}],\"config\":{\"maxMemory\":-1,\"maxTime\":-1},\"info\":{\"initialMemory\":21.421,\"heapStats\":{\"total_heap_size\":59.195,\"total_heap_size_executable\":3,\"total_physical_size\":59.195,\"total_available_size\":1416.348,\"used_heap_size\":21.424,\"heap_size_limit\":1456.175,\"malloced_memory\":0.008,\"peak_malloced_memory\":3.03,\"does_zap_garbage\":0}},\"result\":{\"stages\":[{\"id\":\"problemGeneration\",\"duration\":35.021,\"memory\":12.623},{\"id\":\"problemSolving\",\"duration\":55.689,\"memory\":1.762}],\"total\":{\"duration\":91.156,\"memory\":14.384}}}",
        "status": 200,
        "cookies": "",
        "headers": {
        "x-powered-by": "Express",
        "apix_global_uid": "1561595515279_66dc105c36fa45f398e409c1bd5bf427$1561595515279_ea15c32fc0f5422ab658a7b27e3c462b$1561595515279_021e4a216abd45faaacb1572ff6bf38f",
        "content-type": "application/json; charset=utf-8",
        "content-length": "614",
        "etag": "W/\"266-DnhNM/QbFpGcOdYE6LGEI2oGVUo\""
        },
        "timestamp": 1561595515387
        },
        "_id": "1JOiqcwZgomt1AOz"
        }]
  }

  i2(){
    return "EH"
  }

}
