import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
border-radius: 10px;

background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.FONTGRAY_900}` : "none"};

> input {  
    height: 56px;
    padding: 12px;
    border: none;
    background: transparent;
    
    color: ${({ theme }) => theme.COLORS.FONTWHITE};
}

.button-delete, .button-add {
    border: none;
    background: none;
    font-size: 20px;
    padding-right: 16px;
    color: ${({ theme }) => theme.COLORS.MAIN};
}

`