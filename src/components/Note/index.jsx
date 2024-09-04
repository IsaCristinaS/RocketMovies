import { Container } from "./styles";
import { StarRate } from "../StarRate";
import { Tag } from "../../components/Tag";

import { Link } from "react-router-dom";

export function Note({ data, ...rest }){
    return(
        <Container {...rest}> 
        <h2>{data.title}</h2>
        <StarRate/>
        <p>{data.resume}</p>

        {data.tags && (
            <footer>
                {data.tags.map(tag => 
                <Tag
                key={tag.id}
                title={tag.name}/>)}
            </footer>
        )}
        
        </Container>
    )
}