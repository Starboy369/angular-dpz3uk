import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Akshay Kumar R.G.';
  projectname ="PAGER"

 data = [
   {
    "Question":"Page 1",
    "desc" : "You have entered Page 1"
   },
   {
     "Question":"Page 2",
      "desc" : "You have entered Page 2"

   },
   {
     "Question":"Page 3",
      "desc" : "You have entered Page 3"
   },
   {
     "Question":"Page 4",
      "desc" : "You have entered Page 4"
   },
   {
     "Question":"Page 5",
      "desc" : "You have entered Page 5"
   }
 ] 
 pager ={
   index :0,
   size: 1,
   count: this.data.length
 } 
 get Filetereddata(){
   return (this.data) ? this.data.slice(this.pager.index, this.pager.size) : [] ;
 }

 goto(index : number){
   if(index >= 0 && index<this.pager.count){
     this.pager.index = index;
     this.pager.size = index + 1;

   }
   

    }


}
