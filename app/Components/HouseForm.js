import { getStateSelect } from "./StateSelect.js";

export function getHouseForm() {
  return `
    <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.housesController.createHouse()">
      <h3>List a House</h3>
      <div class="row">
        <div class="col-12 mb-2 p-1">
          <label for="address" class="form-label"></label>
          <input required type="text" name="address" id="address" placeholder="Street Address" maxlength="15"
            minlength="3" class="form-control" aria-describedby="helpId"
            title="Please enter an address">
        </div>
        <div class="col-4 mb-2 p-1">
          <input required type="text" name="city" id="city" placeholder="City" maxlength="15"
            minlength="3" class="form-control" aria-describedby="helpId"
            title="Please enter a city">
        </div>
        <div class="col-4 mb-2 p-1">
          <select required name="state" id="state" class="form-control form-select"
          aria-describedby="helpId" title="Please select a state">
            <option selected>State</option>
            ${getStateSelect()}
          </select>
        </div>
        <div class="col-4 mb-2 p-1">
          <input required type="text" name="zipcode" id="zipcode" placeholder="Zipcode" maxlength="10"
            minlength="4" class="form-control" aria-describedby="helpId"
            title="Please enter a zipcode">
        </div>
        <div class="col-4 mb-2 p-1">
          <div class="input-group">
            <label for="price" class="form-label"></label>
            <span class="input-group-text">$</span>
            <input required type="number" name="price" id="price" placeholder="Price"
              min="1" class="form-control" aria-describedby="helpId"
              title="please enter a price">
          </div>
        </div>
        <div class="col-4 mb-2 p-1">
          <div class="input-group">
            <label for="" class="form-label"></label>
            <input required type="text" name="sqft" id="sqft" placeholder="Square Feet"
              min="1" class="form-control" aria-describedby="helpId"
              title="please enter a square footage">
            <span class="input-group-text">ft²</span>
          </div>
        </div>
        <div class="col-4 mb-2 p-1">
          <div class="input-group">
            <label for="" class="form-label"></label>
            <span class="input-group-text">$</span>
            <input required type="number" name="make" id="make" placeholder="HOA Fee"class="form-control"
            value="0" min="0" aria-describedby="helpId" title="please enter an HOA fee">
          </div>
        </div>
        <div class="col-4 mb-2 p-1">
          <input required type="text" name="make" id="make" placeholder="Bedrooms" maxlength="15"
            minlength="3" class="form-control" aria-describedby="helpId"
            title="please enter a model">
        </div>
        <div class="col-4 mb-2 p-1">
          <input required type="text" name="make" id="make" placeholder="Bathrooms" maxlength="15"
            minlength="3" class="form-control" aria-describedby="helpId"
            title="please enter a model">
        </div>
        <div class="col-4 mb-2 p-1">
          <input required type="text" name="make" id="make" placeholder="Image" maxlength="15"
            minlength="3" class="form-control" aria-describedby="helpId"
            title="please enter a model">
        </div>
      </div>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary px-3 py-2" title="Create Listing"><i
          class="mdi mdi-plus"></i>
        Create</button>
    </form>`
}