import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {GlobalService} from './global.service'
import { Data } from './data.model';
import{ Resdetail} from './resdetail.model';

@Injectable()
export class MemberService {

  constructor(private afs: AngularFireDatabase, public afAuth:AngularFireAuth, private global:GlobalService) {}

  remove(element){
    console.log(element.orderno);
      this.afs.list('/restaurants/' + this.global.key + '/order', ref =>ref.orderByChild('orderno').equalTo(element.orderno)).remove();
  }

  getinmaking(){
    var inmaking = this.afs.list('/restaurants/' + this.global.key + '/inmaking', ref => ref.orderByChild('orderno')).valueChanges();
    return inmaking;
  }

  getprepared(){
    var prepared = this.afs.list('/restaurants/' + this.global.key + '/prepared', ref => ref.orderByChild('orderno')).valueChanges();
    return prepared;
  }

  getreservation(){

    return this.afs.list('/reservations', ref => ref.orderByChild('name').equalTo(this.global.rest)).valueChanges();
  }
 
  getResturants(){
    console.log(this.global.key);
   return this.afs.list('/restaurants/'+ this.global.key +'/orders',ref =>ref.orderByChild('orderno')).valueChanges();
  }

  getbookedtables(){
    var date = new Date();
    var hour = date.getHours();
    console.log(hour);
    return this.afs.list('/restaurants/' + this.global.key +'/slots', ref =>ref.orderByKey().equalTo(hour.toString())).valueChanges();
  }
  
}

