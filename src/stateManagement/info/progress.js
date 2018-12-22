// Actions

const SHOW = "info.progress.show"
export const show = () => ({
  type: SHOW,
})

const HIDE = "info.progress.hide"
export const hide = () => ({
  type: HIDE,
})

// Reducer

export function reducer(info = {}, action) {
  switch (action.type) {
    case SHOW:
      return {progress: true}
    case HIDE:
      return {progress: false}
    default:
      return info
  }
}
