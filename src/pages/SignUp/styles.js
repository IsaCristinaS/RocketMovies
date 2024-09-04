import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.div`
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: left;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.MAIN};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    font-weight: 400;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.FONTGRAY_900};
  }

  input {
    border-radius: 0 10px 10px 0 !important;
  }

  main svg {
    height: 58px;
    width: 30px;
    padding-left: 10px;
    border-radius: 10px 0 0 10px;
    color: ${({ theme }) => theme.COLORS.FONTGRAY_900};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

   .button {
    padding: 24px 0 42px;
  }

  .buttonText{
    align-self: center;
  }

`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
