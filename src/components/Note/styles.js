import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};
  
  border: none;
  border-radius: 16px;
  
  margin-bottom: 20px;
  padding: 32px;
  
  
  > h2 {
    text-align: left;
    font-weight: bold;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.FONTWHITE};
  }
  
  > p {
    text-align: left;
    padding-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.FONTGRAY_900};
  }
`;
