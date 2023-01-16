import "./styles.css"

export function Input({type, label}) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type}/>
    </div>
  )
}