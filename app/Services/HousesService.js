import { ProxyState } from "../AppState.js"

class HousesService {
  delete(id) {
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }
}

export const housesService = new HousesService()