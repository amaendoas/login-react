import "./styles.css"

export function Link({title, href, onClick}) {
  return (
    <a target="_blank" rel="noreferrer" href={href} onClick={onClick}>{title}</a>
  )
}