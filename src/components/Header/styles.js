import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.header`
display: flex;
justify-content: space-between;
gap: 64px;

height: 100px;
width: 100%;
padding: 0 6%;

border-bottom: 1px solid ${({ theme }) => theme.COLORS.HEADERLINE};
`;

export const Logo = styled(Link)`
display: inherit;
align-items: center;

font-size: 24px;
font-weight: bold;
color: ${({ theme }) => theme.COLORS.MAIN};
`

export const Profile = styled.div`
display: flex;
align-items: center;
gap: 8px;
text-wrap: nowrap;

 img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
}

> div {
    display: flex;
    flex-direction: column;

    strong {
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.FONTWHITE};
    }

    a {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.FONTGRAY_900};
    }
   
}


`


