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
        <Button title="Login"/>
        <Link title="Esqueceu sua senha?"/>
      </div>
    </div>
  )
}

export default App;
