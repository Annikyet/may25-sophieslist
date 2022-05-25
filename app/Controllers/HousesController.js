import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";


function _drawHouses(){
  // get all the houses and build a template
  let html = ''
  for (let i = 0; i < ProxyState.houses.length; i++) {
    html += ProxyState.houses[i].Template
  }
  document.getElementById('listings').innerHTML = html
}


export class HousesController{
 constructor(){
   console.log('Houses controller loaded', ProxyState.houses);
   ProxyState.on('houses', _drawHouses)
 }

 viewHouses(){
  //  Get Car Form and inject into modal body
  document.getElementById('form-body').innerHTML = getHouseForm()
  _drawHouses()
 }

 delete(id) {
  housesService.delete(id)
 }
}