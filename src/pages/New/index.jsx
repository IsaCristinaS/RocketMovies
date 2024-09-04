import { Container, Form, Section } from "./styles";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { ButtonText } from "../../components/ButtonText";

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <Link to="/">
            <ButtonText icon={FiArrowLeft} title="Voltar"></ButtonText>
          </Link>
        </header>

        <Form>
          <Input placeholder="Título" type="text" />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number"
            className="input-number"
          />
          <TextArea placeholder="Observações" />

          <Section>
            <h3> Marcadores </h3>
            <div className="tags">
              <NoteItem value={"Ação"} />
              <NoteItem placeholder="Nova tag" isNew />
            </div>
          </Section>

          <Button Delete title="Excluir filme" />
          <Button title="Salvar alterações" />
        </Form>
      </main>
    </Container>
  );
}
