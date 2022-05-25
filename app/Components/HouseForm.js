export function getHouseForm() {
  return `
    <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.housesController.createHouse()">
      <h3>List a House</h3>
      <div class="row">
        <div class="col-3 mb-2">
          <label for="" class="form-label">Make</label>
          <input required type="text" name="make" id="make" placeholder="Enter a car Make..." maxlength="15"
            minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
            title="please enter a model">
        </div>
      </div>
    </form>`
}