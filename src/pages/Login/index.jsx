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
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([
    {
      username: "joao",
      password: "oidevs",
    },
    {
      username: "jady",
      password: "oidevs",
    },
  ]);

  const goToHome = () => {
    const validUser = users.find(user => user.username === username && user.password === password);
    if(validUser) {
      navigate("/home")
    } else {
      alert('Credenciais incorretas')
    }
  }

  const changeTitle = () => {
    setTitle("Mudei o título")
  }

  const handleInputChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="container">
      <div className="container-wrapper">
        <Title text={title}/>
        {username && <Subtitle text={username}/>}
        <Input type="text" label="Usuário" onChange={handleInputChange}/>
        <Input type="password" label="Senha" onChange={handlePasswordChange}/>
        <Button title="Entrar" onClick={goToHome}/>
        <Button title="Alterar título" onClick={changeTitle} bgColor="#454D6A"/>
        <Link title="Esqueceu sua senha?" href="https://www.google.com.br/"/>
      </div>
    </div>
  )
}