import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(houseData) {
    this.id = generateId()
    this.price = houseData.price
    this.imgUrl = houseData.imgUrl
    this.streetAddr = houseData.streetAddr
    this.cityName = houseData.cityName
    this.stateAbbr = houseData.stateAbbr
    this.zipcode = houseData.zipcode
    this.hoaFees = houseData.hoaFees
    this.squareFeet = houseData.squareFeet
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
  }

  get Template() {
    return `
      <div class=" col-6 col-md-3 ">
        <div class="card">
          <img src="${this.imgUrl}" alt="" class="card-img">
          <div class="card-body">
            <h5 class="card-title">${this.streetAddr}</h5>
            <h6 class="card-subtitle">${this.cityName}, ${this.stateAbbr} ${this.zipcode}</h6>
            <div class="d-flex justify-content-between">
              <h5 class="card-subtitle">$${this.price}</h5>
              <h6 class="card-subtitle">${this.squareFeet}</h6>
            </div>
            ${this.hoaFees > 0 ? `<p class="card-text">HOA: $${this.hoaFees}/mo</p>` : ``}
            <div class="d-flex justify-content-between">
              <p class="card-text">${this.bedrooms} bed${this.bedrooms > 1 ? "s" : ""}</p>
              <p class="card-text">${this.bathrooms} bath${this.bathrooms > 1 ? "s" : ""}</p>
            </div>
            <button class="btn btn-danger" onclick="app.housesController.delete('${this.id}')"><i class="mdi mdi-delete"></i></button>
            <button class="btn btn-primary">Contact Seller</button>
          </div>
        </div>
      </div>`
  }
}