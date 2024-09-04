import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;
`;

export const Section = styled.div`
padding: 0 10%;

.button {
    padding: 40px 0 24px;
}

.tags {
    padding: 40px 0;
    & > * {
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700} ;
    }
}

header {

}

main {
    p {
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
        color: ${({ theme }) => theme.COLORS.FONTWHITE};
    }
}

`
