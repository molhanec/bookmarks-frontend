/**
 * Just a div wrapper for possible hiding of the content.
 * Useful component when you want to hide component without unmounting it.
 * Which in turn is useful for not loosing state of those components.
 */

import React from "react"
import PropTypes from "prop-types"

const VisibleDiv = ({visible, children}) =>
  <div style={{display: visible ? null : "none"}}>
    {children}
  </div>

VisibleDiv.propTypes = {
  visible: PropTypes.bool.isRequired
}

export default VisibleDiv
