import { Container, Content, Section, NewNote } from "./styles";

import { GoPlus } from "react-icons/go";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";


import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header />

      <Section>
        <h1> Meus filmes </h1>
        <NewNote to="/new">
          <Button icon={GoPlus} title="Adicionar filme" />
        </NewNote>

        <Content>
          <Link to="/details/:id">
          <Note
            data={{
              title: "Interestelar",
              resume:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsa, accusamus officia dolorum quo dignissimos alias perferendis eum eligendi id commodi consequuntur sunt architecto voluptas, at modi repellat quod aliquid",
              tags: [
                { id: "1", name: "Drama" },
                { id: "2", name: "Suspense" },
              ],
            }}
          />
          </Link>

          <Link to="/details/:id">
          <Note
            data={{
              title: "Avatar",
              resume:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsa, accusamus officia dolorum quo dignissimos alias perferendis eum eligendi id commodi consequuntur sunt architecto voluptas, at modi repellat quod aliquid",
              tags: [
                { id: "1", name: "Action" },
                { id: "2", name: "Suspense" },
              ],
            }}
          />
          </Link>

        </Content>
      </Section>
    </Container>
  );
}
