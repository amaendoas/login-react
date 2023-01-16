import "./App.css"
import { Title } from "./components/Title";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Link } from "./components/Link";

function App() {
  return (
    <div className="container">
      <div className="login">
        <Title text="Login"/>
        <Input type="text" label="Usuário"/>
        <Input type="password" label="Senha"/>
        <Button title="Login" href="https://discord.com/channels/1014299053149929473/1062175752612745266"/>
        <Link title="Esqueceu sua senha?" href="https://www.google.com.br/"/>
      </div>
    </div>
  )
}

export default App;
