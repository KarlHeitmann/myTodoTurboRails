import "leaflet-css"
// map_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "placeholder" ]

  connect(){
    console.log("conectando...")
    import("leaflet").then( L => {
      console.log("termino de importar leaflet")
      this.map = L.map(this.placeholderTarget,{zoomDelta:0.5,zoomSnap:0.5}).setView([ 50.1960, -6.8712 ], 10);
      console.log("hasta aqui estamos bien...")
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    });
  }

  disconnect(){
    this.map.remove()
  }

}