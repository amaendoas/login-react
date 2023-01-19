import "./styles.css"
import PropTypes from 'prop-types'

export const Button = ({title, onClick, bgColor}) => {
  return (
      <button
      onClick={onClick}
      style={ { backgroundColor: bgColor } }
      >{title}
      </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  bgColor: "#A23953"
}