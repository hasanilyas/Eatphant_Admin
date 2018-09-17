import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Router } from '@angular/router';
import {GlobalService} from '../global.service'
import { Data } from '../data.model';
import{ Resdetail} from '../resdetail.model';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  employeList: Data[];
  resdata: Resdetail[];
  resname:string;

  loginDetails = {
    email: '',
    password: ''
  }
  constructor( public afAuth:AngularFireAuth, private router: Router, private global:GlobalService, private afs:AngularFireDatabase){
  }
  login(){
    var email = this.loginDetails.email;
    var pass = this.loginDetails.password;
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(
      (success) =>{

        this.afAuth.authState.subscribe(authState =>{
          if(authState){
            this.global.name= authState.email;
            //console.log(this.name);
          }
          
        }); 
    
        var i=0;
        var z=0;
            
       
        this.afs.list('/restaurants', ref =>ref.orderByChild('email')
        .equalTo(this.global.name))
        .snapshotChanges()
        .subscribe(item=>{
        this.resdata=[];

        item.forEach(element => {     
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          console.log(element.key);
          console.log('check2');
          this.resdata.push(y as Resdetail);
          this.global.key =this.resdata[0].$key;
          this.global.rest = this.resdata[0].name;
          });
        });

        this.router.navigate(['/members']);
        
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      });
  }

  ngOnInit() {
  }

}
