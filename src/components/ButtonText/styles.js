import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  gap: 10px;
  background: transparent;
  border: none;
  font-size: 16px;


  color: ${({ theme }) => theme.COLORS.MAIN};
`;
