import { useState } from "react";
import { Container } from "./styles";
import { FaStar } from "react-icons/fa";
import { useTheme } from "styled-components";

export function StarRate({ numberOfStars = 5, ...rest }) {
  const [rating, setRating] = useState(null);
  const theme = useTheme();

  return (
    <Container>
      {new Array(numberOfStars).fill().map((star, index) => (
        <FaStar
          key={`${index}-${Math.random()}`}
          color={index + 1 <= rating ? theme.COLORS.MAIN : "grey"}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </Container>
  );
}
