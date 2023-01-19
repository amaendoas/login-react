import "./styles.css"

export const Subtitle = ({text}) => {
  return (
    <label className="subtitle">Usuário: <span>{text}</span></label>
  )
}