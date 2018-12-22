/**
 * Application configuration.
 * @module config
 */

import StaticDataProvider from "./dataProviders/static/dataProvider"

/**
 * Object used to retrieve/send data from/to server.
 */
export const dataProvider = new StaticDataProvider()

/**
 * Configuration useful for debugging.
 */
export const debug = {

  /**
   * Logs actions and states into the console.
   */
  reduxActionLogging: true,

  /**
   * Simulates request errors.
   * See dataProviders/static/dataProvider.js
   */
  simulateErrors: false,

  /**
   * Simulates request delay.
   * See dataProviders/static/dataProvider.js
   */
  staticDataProviderPauseMillis: 1000,

  /**
   * Logs states of invalid shape into the console.
   * See stateManagement/stateShape
   */
  validateState: true,
}
