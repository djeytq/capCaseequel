import styled from "styled-components";

export const Container = styled.div`
position: fixed;
z-index: 1;
top: 50%;
right: 5%;
transform: translateY(-100%);

border: 0.5px solid #0003;
padding: 13px;
border-radius: 50%;

.camada{
    position: relative;
    border: 1px solid #0005;
    padding: 10px;
    border-radius: 50%;


}

&, .camada{
    animation-name: ani;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

.img{
    /* position: absolute; */
    background: orange;
    border-radius: 50%;

}

@keyframes ani {
    0%{border:0.5px solid #b99177;}
    50%{border:0.5px solid #b99177;}
}


`;