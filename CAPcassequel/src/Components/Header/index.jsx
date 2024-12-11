import {Container} from "./style";

import {Link } from "react-router-dom";

export function Header(){

    return(
        <Container>
         <nav class="header fixed-top">
        <h1 class="display-1 fs-3 text-center"> CAP-Cassequel</h1>
        <div class="menus">
            <Link class="display-6 fs-5 fw-semibold inicio" to="/">Início</Link>
            <Link class="display-6 fs-5 fw-semibold programas"to="pages/programas">Programas</Link>
            <Link class="display-6 fs-5 text-bg-warining fw-semibold eventos"href="pages/eventos" >Eventos</Link>
            <Link class="display-6 fs-5 fw-semibold sobre" to="/about">Sobre</Link>
        </div>
    </nav>
    <div class="p-5"></div>
    </Container>
    )
}