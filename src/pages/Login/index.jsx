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
      id: 1,
      username: "joao",
      password: "oidevs",
    },
    {
      id: 2,
      username: "jady",
      password: "oidevs",
    },
    {
      id: 3,
      username: "amanda",
      password: "oidevs",
    },

  ]);

const [alertMsg, setAlertMsg] = useState('');
const [inputColor, setInputColor] = useState("#d5d4d4")

  const goToHome = () => {
    const validUser = users.find(user => user.username === username && user.password === password);
    if(validUser) {
      navigate("/home", { state: { users: users } })
      
    } else {
      setAlertMsg('Credenciais incorretas')
      setInputColor('#ca3057')
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
        {alertMsg && <Subtitle text={alertMsg}/>}
        <Input type="text" label="Usuário" onChange={handleInputChange} color={inputColor}/>
        <Input type="password" label="Senha" onChange={handlePasswordChange} color={inputColor}/>
        <Button title="Entrar" onClick={goToHome}/>
        <Button title="Alterar título" onClick={changeTitle} bgColor="#454D6A"/>
        <Link title="Esqueceu sua senha?" href="https://www.google.com.br/"/>
      </div>
    </div>
  )
}