import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button";
import { Title } from "../../components/Title"
import "./styles.css"

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="container-wrapper">
        <Title text="Bem-vindo(a) a Home"/>
        <Button
          title="< Voltar"
          onClick={() => navigate("/")}
          bgColor="#454D6A"
        />
      </div>
    </div>
  )
}