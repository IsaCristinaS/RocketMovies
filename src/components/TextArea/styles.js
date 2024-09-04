import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  
  border: none;
  background: transparent;

  border-radius: 10px;
  resize: none;

  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.FONTWHITE};
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.FONTGRAY_900};
    opacity: 0.7; 
  }
`;
