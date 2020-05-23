import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-point',
  templateUrl: './create-point.page.html',
  styleUrls: ['./create-point.page.scss'],
})
export class CreatePointPage{

  address = ''
  lat = ''
  lon = ''
  item = ''
  quantity = 0
  note = ''


  constructor(
    private modal: ModalController,
    private httpClient: HttpClient,
    private route: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private toastCtrl: ToastController)
  { }

  close() {
    this.modal.dismiss();
  }

  search() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + this.address;

    this.httpClient.get(url).subscribe((res) => {
      console.log(res)
          var p = document.getElementById('output')
          // @ts-ignore
          if (res.length == 0) {
            p.innerHTML = '<b>No result found</b>'
          } else {
            p.innerHTML = ''
            this.lat = res[0].lat
            this.lon = res[0].lon
          }
          // @ts-ignore
          res.forEach((elem, i) => {
            p.innerHTML += '<b id="text' + i + '">' + elem['display_name'] + '<b><br/><br/>'
          })
    }, (err) => {
      console.log(err)
      var p = document.getElementById('output')
      p.innerHTML = '<b>No result found</b>'
    })
  }

  add() {
    if (this.lat.length == 0) {
      this.presentToast('Check your address!')
      return
    }
    this.db.list('items').push({ 
      address: this.address,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      lat: this.lat,
      lon: this.lon,
      quantity: this.quantity,
      note: this.note,
      item: this.item
    }).then((res) => {
      console.log(res)
      if (res !== undefined) {
        this.presentToast('Data added!')
        this.close()
      }
    });

  }

  async presentToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });  
    toast.present();
  }
}
