import { Container } from "./style";

import { StarRate } from "../../components/StarRate";
import { FaRegClock } from "react-icons/fa";

export function Infos(){
    return(
    <Container>
        <header>
             <h1>Interestellar</h1>
             <StarRate/>
        </header>

        <section>
     
           <img
            src="https://github.com/IsaCristinaS.png"
            alt="Foto do usuário"
          />
          <p>Por Isabella Cristina</p>
      

            <FaRegClock/>
            <p>02/09/24 às 08:00</p>

        </section>
       

    </Container>
    )
}