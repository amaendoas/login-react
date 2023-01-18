import "./styles.css"
import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "../../components/Link"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="login">
        <Title text="Login"/>
        <Input type="text" label="Usuário"/>
        <Input type="password" label="Senha"/>
        <Button title="Entrar" onClick={() => navigate("/home")}/>
        <Link title="Esqueceu sua senha?" href="https://www.google.com.br/"/>
      </div>
    </div>
  )
}