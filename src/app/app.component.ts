
import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
    
  name: string;
  age: number;
  email:string;
  password:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public UserList:User[] =[
{
  name:'beesan',age:21,email:'beesan@gmail.com',password:'123bb'
},
{
  name:'sara',age:12,email:'sara@gmail.com',password:'567sss'
},
{
  name:'ali',age:33,email:'ali@gmail.com',password:'567shdss'
}

];
public NewUser:User={name:'',age:0,email:'',password:''};
newUserName:string='';



deleteUser(user:User){
let x =this.UserList.indexOf(user);
if(x>=0){
  this.UserList.splice(x ,1);
}
}
}


