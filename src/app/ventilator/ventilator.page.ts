import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { ModalController } from '@ionic/angular';
import { CreatePointPage } from '../modal/create-point/create-point.page';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-ventilator',
  templateUrl: './ventilator.page.html',
  styleUrls: ['./ventilator.page.scss'],
})
export class VentilatorPage implements OnInit {
  map: Map;
  data: any;
  list: any;

  labels = [
    "https://i.ibb.co/f11hTdd/hospital.png",
    "https://i.ibb.co/SyCyrw0/medical-mask.png"]

  constructor(
    public modalController: ModalController,
    public router: Router,
    private db: AngularFireDatabase,
    ) {
      try{
        this.list = this.db.list("/items").valueChanges();
        this.list.subscribe( valueOfItems => {
              this.data = valueOfItems;
              console.log(this.data)
              if (this.data.length == 0) {
                return
              }
              this.data.forEach(element => {
                console.log(element.lat)
                const icon = element['item'] == 'ventilator'?this.labels[0]: this.labels[1]
                const note = element.quantity + ' ' + element['item'] + ' available in ' + element.address + '\n' + element.note
                this.mapPoint(Number(element.lat), Number(element.lon), note, icon)
              });
          }, );
        }
        catch{
        }
    }

  ngOnInit() {
    this.leafletMap()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreatePointPage,
    });
    return await modal.present();
  }

  mapPoint(lat: number, lon: number, text, icon) {
    const markPoint = marker([lat, lon]);

    var myIcon = L.icon({
      iconUrl: icon,
      shadowUrl: icon
    });
    markPoint.bindPopup(text);
    markPoint.setIcon(myIcon)
    this.map.addLayer(markPoint)
  }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([20.5937, 78.9629], 3); 
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | RoboMx',
      maxNativeZoom: 18,
      maxZoom: 50
    }).addTo(this.map);

    var legend = new L.Control({position: 'topright'});
    legend.onAdd = function(map) {
      var div = L.DomUtil.create('div', 'info legend'),
      item = ["Ventilator", "Mask"]
      var labels = [
        "https://i.ibb.co/f11hTdd/hospital.png",
        "https://i.ibb.co/SyCyrw0/medical-mask.png"]
      
      div.innerHTML = "<h4>Realtime Data</h4>"
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < item.length; i++) {
          div.innerHTML +=
              " <img height='30px' src="+ labels[i] + "/><span style='font-size: 20px'>" +item[i] +'</span><br>';
      }

      div.style.padding = '6px 8px';
      div.style.width = '200px'
      div.style.background = ' rgba(255, 255, 255, 0.8)';
      div.style.lineHeight = '24px';
      div.style.color = '#555'

      return div;
    };
    legend.addTo(this.map)
    this.map.flyTo([20.5937, 78.9629], 5);
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  async addData() {
    const modal = await this.modalController.create({
      component: CreatePointPage,
    });
    return await modal.present();
  }
}
