import PropTypes from "prop-types"

const infoShape = {
  progress: PropTypes.bool.isRequired, // data are currently requested from a server
  error: PropTypes.string, // null or error string
  success: PropTypes.string // null or success string
}
export default infoShape
