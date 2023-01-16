import "./styles.css"

export function Link({title, href}) {
  return (
    <a target="_blank" rel="noreferrer" href={href}>{title}</a>
  )
}