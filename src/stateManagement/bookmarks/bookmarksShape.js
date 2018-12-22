import PropTypes from "prop-types"

const bookmarkShape = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default bookmarkShape
