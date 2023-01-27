import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button";
import { Title } from "../../components/Title"
import "./styles.css"

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { users } = location.state;

  const goToLogin = () => {
    navigate("/")
  }
  
  return (
    <div className="container">
      <div className="container-wrapper">
        <Title text="Bem-vindo(a) a Home"/>
         <h3>
          Esta é a lista de usuários cadastrados:
        </h3>
        <ul>
          {
            users.map((user) => (
              <li key={user.id}>
                {user.username}
              </li>
            ))
          }
        </ul>
        <Button
          title="< Voltar"
          onClick={goToLogin}
        />
      </div>
    </div>
  )
}