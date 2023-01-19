import "./styles.css"
import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "../../components/Link"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Subtitle } from "../../components/Subtitle"

export const Login = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const [username, setUsername] = useState("");

  const goToHome = () => {
    navigate("/home")
  }

  const changeTitle = () => {
    setTitle("Mudei o título")
  }

  const handleInputChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <div className="container">
      <div className="container-wrapper">
        <Title text={title}/>
        {username && <Subtitle text={username}/>}
        <Input type="text" label="Usuário" value={username} onChange={handleInputChange}/>
        <Input type="password" label="Senha"/>
        <Button title="Entrar" onClick={goToHome}/>
        <Button title="Alterar título" onClick={changeTitle} bgColor="#454D6A"/>
        <Link title="Esqueceu sua senha?" href="https://www.google.com.br/"/>
      </div>
    </div>
  )
}