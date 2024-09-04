import styled from "styled-components";

export const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;

width: 100%;
height: 56px;

background-color: ${({ theme, Delete }) => Delete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.MAIN};
color: ${({ theme, Delete }) => Delete ? theme.COLORS.MAIN : theme.COLORS.BACKGROUND_900};


border: none;
border-radius: 10px;
font-weight: bold;

&:disabled {
    opacity: 0.5;
}
`