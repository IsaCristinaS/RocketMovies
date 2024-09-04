import styled from "styled-components";

export const Container = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 300;

  padding: 5px 16px;
  margin-right: 6px;
  border-radius: 10px;
  
  color: ${({ theme }) => theme.COLORS.FONTGRAY_800};
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;
