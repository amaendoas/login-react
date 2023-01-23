import "./styles.css"
import PropTypes from 'prop-types'

export const Input = ({type, label, onChange, value, color}) => {
  return (
    <div className="input-container">
      <label style={ {color: `${color}` }}>{label}</label>
      <input type={type} onChange={onChange} value={value} style={ { borderBottom: `1px solid ${color}`}}/>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  color: "#d5d4d4"
}


