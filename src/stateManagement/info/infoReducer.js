/**
 * Main reducer for the state.info key.
 */

import * as error from "./message"
import * as progress from "./progress"

const initialInfo = {
  progress: false,
  error: null,
  success: null
}

export function reducer(info = initialInfo, action) {
  info = progress.reducer(info, action)
  info = error.reducer(info, action)
  return info
}
