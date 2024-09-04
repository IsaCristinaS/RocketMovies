import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  main {
    padding: 0 10%;

    header {
      display: flex;
      padding: 40px 0;

      a {
        color: ${({ theme }) => theme.COLORS.MAIN};
      }
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  > :nth-child(1), 
  > button {
    flex: 1;
    min-width: 33%;
  }

  > :nth-child(2) {
    flex: 1;
    min-width: 33%;
  }

  > :nth-child(3) {
    width: 100%;
  }

  .input-number::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

`;

export const Section = styled.div`
  width: 100%;
  
  > h3 {
    padding-bottom: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.FONTGRAY_900};
  }
  
  .tags {
    display: flex;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;
