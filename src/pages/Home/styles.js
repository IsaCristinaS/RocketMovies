import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  `;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  padding: 40px 120px;
  
  > h1 {
      padding-bottom: 32px;
    }
    `;

export const NewNote = styled(Link)`
width: 200px;
`

export const Content = styled.div`
  overflow-y: scroll;
  max-height: 70vh;

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.MAIN};
    border-radius: 6px;
    };
    
    &::-webkit-scrollbar { 
      width: 10px;
    }

`;
