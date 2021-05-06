import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPracticeApp1';
  /*arr:string[]=[];
  sendData(d){
    this.arr.push(d);
  }
  status:boolean=true;
  changeStatus(){
    this.status=!this.status;
  }*/
  //Assignment-2
  users=[];
  addUserData(ref:NgForm){
    let userObject=ref.value;
    //push into user array
    this.users.push(userObject);
   //console.log(userObject);
    ref.reset();
  }
  deleteUser(ind){
    this.users.splice(ind,1);
  }
}
