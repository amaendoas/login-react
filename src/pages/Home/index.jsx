import { useNavigate } from "react-router-dom"
import { Link } from "../../components/Link"
import { Title } from "../../components/Title"
import "./styles.css"

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Title text="Bem-vindo(a) a Home"/>
      <Link title="< Voltar" onClick={() => navigate("/")}/>
    </div>
  )
}