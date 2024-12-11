import styled from "styled-components";

export const Container = styled.header`
.header{
    backdrop-filter: blur(19px);
    padding: 0 0 10px 0;
}

.menus{
    text-align: center;
    a{
        text-decoration: none;
        margin: 0 15px;
        color: #000;
        

        &:hover{
            border-bottom: 2px solid #0009;
        }
    }
}
`;