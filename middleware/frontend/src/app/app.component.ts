import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
@Injectable()
export class AppComponent {
  Object = Object;
  title = 'apix-front';
  search = <any>{}
  datas;
  localStoredData = {};
  lastSearchData = {}
  currentSearchResult;
  urlService = ""


  get mySearchDataFunc() {
    return this.searchData.bind(this);
}

  constructor(private http: HttpClient) {
    
   }

  callAndStoreData(url, updateSearchData): Promise<any>  {
    var that = this;
    return new Promise(function (resolve, reject){
    that.http.get(url).subscribe((res) => {
     // console.log(res)
     if (updateSearchData){
       that.lastSearchData = {};
     }
      that.datas = res;
      for (var x of that.datas) {
        var request = {};
        request["date"] = new Date(x.timestamp).toISOString()
        if (x.data.headers && x.data.url) {
        request["url"] = x.data.headers.host + x.data.url
        }
        for (var k in x){
          request[k] = x[k]
        }
        if (!that.localStoredData[x.dataType]){
          that.localStoredData[x.dataType] = []
        }
        if (!that.localStoredData[x.dataType].find(x=> x["_id"] === request["_id"])){
        that.localStoredData[x.dataType].push(request)
        }
        if (!that.lastSearchData[x.dataType]){
          that.lastSearchData[x.dataType] = []
        }
        if (updateSearchData){
          that.lastSearchData[x.dataType].push(request)
          }
      }
      resolve()
    });
  //  console.log("DATA:" + JSON.stringify(this.localStoredData))
  }
    )
}

  searchData(): Promise<any>  {
   // console.log("Searching")
    var url = this.urlService + "/apisense/data?"
    if (this.search["anyId"]) {
      url += "anyId="+  this.search["anyId"] + "&"
    }
    url += "dataType=Request-Received"
    
   return this.callAndStoreData(url, true)
   

  }

  //dataObject-> Object with datas to find in.
  searchInObjectData(dataObject, mapFind, dataType): void{
   

    var elementsToSearch;
    if (dataType != null){
   elementsToSearch = dataObject[dataType]
    }
    else{
      elementsToSearch = []
      Object.values(dataObject).forEach(x=> elementsToSearch= elementsToSearch.concat(x))
      //console.log("Elements to Search: " + JSON.stringify(elementsToSearch))
    }

   if (mapFind && elementsToSearch){
     elementsToSearch = elementsToSearch.filter(x=>{
       var result = true;
       for(var k in mapFind){
         if (x[k] !== mapFind[k]){
          result = false;
          break;
         }
       }
       return result;
     })
   }
   return elementsToSearch ? elementsToSearch.slice().sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1).reverse() : [] //Return empty list if no data
  }

  getAllInfoFor(sid): void{
   // console.log(sid)
    var url = this.urlService + "/apisense/data?sid=" + sid
    this.callAndStoreData(url, false)
  }

  ngOnInit() {
    this.updateSearch()
    
  }

  updateSearch(){
    var that = this;
    that.searchData().then(function(){
      that.currentSearchResult = that.searchInObjectData(that.lastSearchData, null, 'Request-Received');
    }) 
  }


  toConsoleFormat(datasConsole){
   return datasConsole.map(x=>x.data).join("")
  }
  




}


