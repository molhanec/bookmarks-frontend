// Actions

const ERROR = "info.message.error"
export const error = msg => ({
  type: ERROR,
  msg
})

const SUCCESS = "info.message.success"
export const success = msg => ({
  type: SUCCESS,
  msg
})

const HIDE = "info.message.hide"
export const hide = () => ({
  type: HIDE
})

// Reducer

export function reducer(info, action) {
  switch (action.type) {
    case SUCCESS:
      return {...info, error: null, success: action.msg}
    case ERROR:
      return {...info, error: action.msg, success: null}
    case HIDE:
      return {...info, error: null, success: null}
    default:
      return info
  }
}
