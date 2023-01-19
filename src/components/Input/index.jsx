import "./styles.css"
import PropTypes from 'prop-types'

export const Input = ({type, label, onChange, value}) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} onChange={onChange} value={value}/>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
}



