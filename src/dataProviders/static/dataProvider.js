/**
 * Static data provider for testing without real server.
 */

import bookmarks from "./sampleData"
import * as config from "../../config"

/**
 * Simulates response with delay and/or error as configured.
 */
function simulateResponse(data) {
  return new Promise(
    (resolve, reject) => setTimeout(
      () => {
        if (config.debug.simulateErrors) {
          reject("Simulated error")
        } else {
          resolve(data)
        }
      },
      config.debug.staticDataProviderPauseMillis
    )
  )
}

export default class DataProvider {
  read() { return simulateResponse(bookmarks) }
  update() { return simulateResponse() }
  delete() { return simulateResponse() }
}
