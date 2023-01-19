import "./styles.css"
import PropTypes from "prop-types"

export const Link = ({title, href, onClick}) => {
  return (
    <a target="_blank" rel="noreferrer" href={href} onClick={onClick}>{title}</a>
  )
}

Link.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}