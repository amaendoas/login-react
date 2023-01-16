import "./styles.css"

export function Button({title, href}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button>{title}</button>
    </a>
  )
}