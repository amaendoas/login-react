import "./styles.css"

export const Input = ({type, label}) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type}/>
    </div>
  )
}