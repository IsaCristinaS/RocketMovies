import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 8px;

  > input {
    width: 100%;
    padding: 20px 24px;

    border: 0;
    border-radius: 10px;

    font-size: 15px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.FONTWHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.FONTGRAY_900};
    }
  }
`;
