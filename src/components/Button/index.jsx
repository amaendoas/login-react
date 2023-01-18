import "./styles.css"

export const Button = ({title, onClick}) => {
  return (
      <button onClick={onClick}>{title}</button>
  )
}