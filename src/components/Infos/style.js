import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    
    h1 {
      padding: 0 24px 24px 0;
      font-weight: 500;
      font-size: 36px;
    }
    
    svg {
      font-size: 18px;
    }
  }
  
  section {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
    
      svg {
        color: ${({ theme }) => theme.COLORS.MAIN};
        }
  }

  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  p {
    padding-right: 15px;
  }
`;
