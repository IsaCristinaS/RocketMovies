import { Container, Form, Background } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie a sua conta</h2>

        <main>

        <Input placeholder="Nome" type="text" icon={FiMail} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />
        </main>

        <div className="button">
          <Button title="Entrar" />
        </div>

        <div className="buttonText">
          <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
          
          </Link>
        </div>
      </Form>
    </Container>
  );
}
