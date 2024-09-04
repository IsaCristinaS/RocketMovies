import { Container, Profile, Logo } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Logo to="/">RocketMovies</Logo>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        
        <div className="details">
          <Link to="/profile">
            <strong>Isabella Cristina</strong>
          </Link>
          <a href="#">sair</a>
        </div>

        <div className="avatar">
          <Link to="/profile">
            <img
              src="https://github.com/IsaCristinaS.png"
              alt="Foto do usuário"
            />
          </Link>
        </div>

      </Profile>
    </Container>
  );
}
