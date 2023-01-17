import { useNavigate } from "react-router-dom"
import { Link } from "../../components/Link"
import { Title } from "../../components/Title"
import "./styles.css"

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Title text="Welcome to home"/>
      <Link title="< Voltar para o Login" onClick={() => navigate("/")}/>
    </div>

  )
}