import "./styles.css"
import PropTypes from 'prop-types'

export const Input = ({type, label}) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type}/>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string
}



