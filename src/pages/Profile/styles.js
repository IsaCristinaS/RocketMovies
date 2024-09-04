import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  header {
    display: flex;
    align-items: center;
    height: 145px;
    padding: 0 10%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 340px;
  margin: auto;

  input {
    border-radius: 0 10px 10px 0 !important;
  }

  svg:not(label svg) {
    height: 58px;
    width: 35px;
    padding-left: 10px;
    border-radius: 10px 0 0 10px;
    color: ${({ theme }) => theme.COLORS.FONTGRAY_900};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  div:nth-child(4),
  button {
    margin-top: 15px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -100px auto 32px;

  width: 186px;
  height: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.MAIN};
    border-radius: 50%;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;
