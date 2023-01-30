import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button";
import { Title } from "../../components/Title"
import "./styles.css"

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { users } = location.state;
  const [listOfUsers, setListOfUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [showMsg, setShowMsg] = useState(false)

  const goToLogin = () => {
    navigate("/")
  }

  const renderUser = () => {
    const arr = JSON.parse(localStorage.getItem("users"));
    if(!users[count]) {
      setShowMsg(true)
      return
    }
    setCount(prevState => prevState + 1)
    arr.push(users[count])
    setListOfUsers(arr)
  }


  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(listOfUsers))

    return () => {
      localStorage.removeItem("users")
    }
  }, [listOfUsers])
  
  return (
    <div className="container">
      <div className="container-wrapper">
        <Title text="Bem-vindo(a) a Home"/>
         <h3>
          Esta é a lista de usuários cadastrados:
        </h3>
        <ul>
          {
            listOfUsers.length === 0 ? <p className="msg">Clique no <span>contador</span> abaixo para exibir os usuários </p> : listOfUsers.map((user) => (
              <li key={user.id}>
                {user.username}
              </li>
            ))
          }
        </ul>
        <div>
        <Button title={`Contador: ${count}`} onClick={renderUser}/>
        {
          showMsg &&
        <p className="finish-msg">Esses são todos os usuários cadastrados!</p>
        }
        </div>
        <Button
          title="< Sair"
          onClick={goToLogin}
          bgColor="#454D6A"
        />
      </div>
    </div>
  )
}