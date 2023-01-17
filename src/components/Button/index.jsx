import "./styles.css"

export function Button({title, onClick}) {
  return (
      <button onClick={onClick}>{title}</button>
  )
}