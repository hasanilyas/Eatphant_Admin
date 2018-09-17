import { Component, OnInit,ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, AngularFireList, snapshotChanges} from 'angularfire2/database';
import {GlobalService} from '../global.service'
import * as firebase from 'firebase/app';
import { MemberService } from '../member.service';
import { Data } from '../data.model';
import{ Resdetail} from '../resdetail.model';
import { query } from '@angular/animations';
import {MatPaginator,MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  //public name : any;
  state: string='';
  making:any;
  public rest:any;
  
  //employeeList: AngularFireList<any>;
  
  displayedColumns = ['orderno.', 'name','contact', 'description','price', 'make'];
  reservationColumns = ['username', 'phoneno', 'date','time', 'partysize'];
  bookedtable = ['description', 'slots', 'button'];
  

  reservationdataSource = new ReservationDataSource(this.order);
  inmakingdataSource= new InmakingDataSource(this.order);
  prepareddataSource = new PreparedDataSource(this.order);
  bookedslots = new BookedSlots(this.order);
  dataSource = new OrderDataSource(this.order);

  constructor(public afAuth:AngularFireAuth,private router: Router,private order:MemberService, private afs: AngularFireDatabase, private global:GlobalService) {

  }

  date(element){

    console.log(element);
    var date=new Date();
    var hour= date.getHours().toString();
    var min = date.getMinutes();
    var day= date.getDay();

    console.log(day);
    var time = hour +':'+ min;
    var count = element.counter + 1;
    console.log(count);
    this.afs.list('restaurants/' + this.global.key + '/slots').update(hour ,{counter: count});
    console.log(time);
     
  }
 

  inmaking(element){
    console.log(element);
    this.afs.list('/restaurants/' + this.global.key + '/inmaking').push(element);
    //this.order.remove(element); 
  }

  prepared(element){
    this.afs.list('/restaurants/' + this.global.key + '/prepared').push(element);
  }

  profile(){
    this.router.navigateByUrl('/profile');
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {

  }

}

export class BookedSlots extends DataSource<any> {

  constructor(private order1: MemberService) {
  super()
  }

  connect() {
    var as=this.order1.getbookedtables();
    return as;

  }

  disconnect() {

  }
}

export class OrderDataSource extends DataSource<any> {

  constructor(private order1: MemberService) {
  super()
  }

  connect() {
    var as=this.order1.getResturants();
    return as;

  }

  disconnect() {

  }
}

export class InmakingDataSource extends DataSource<any> {

  constructor(private order1: MemberService) {
  super()
  }

  connect()
  {
    var ad=this.order1.getinmaking();
    return ad;
  }

  disconnect() {

  }
}

export class PreparedDataSource extends DataSource<any> {

  constructor(private order1: MemberService) {
  super()
  }

  connect()
  {
    var ad=this.order1.getprepared();
    return ad;
  }

  disconnect() {

  }
}

export class ReservationDataSource extends DataSource<any> {

  constructor(private order1: MemberService) {
  super()
  }

  connect()
  {
    var ad=this.order1.getreservation();
    return ad;
  }

  disconnect() {

  }
}



