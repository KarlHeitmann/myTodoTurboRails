import "leaflet-css"
// map_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "placeholder" ]

  connect(){
    console.log("conectando...")
    import("leaflet").then( L => {
      // OJO: "L" es la librería de "leaflet". 

      const lat = this.data.get("lat")
      const lon = this.data.get("lon")
      console.log(lat, lon)

      this.map = L.map(this.placeholderTarget,{zoomDelta:0.5,zoomSnap:0.5}).setView([ lat, lon ], 10);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    });
  }

  disconnect(){
    this.map.remove()
  }

}