import "./styles.css"
import PropTypes from "prop-types"

export const Title = ({text}) => {
  return (
    <h1 className="title">{text}</h1>
  )
}

Title.propTypes = {
  text: PropTypes.string
}