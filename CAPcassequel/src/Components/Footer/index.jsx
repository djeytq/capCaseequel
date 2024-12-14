import {Container} from "./style";

export function Footer(){

    return(
        <Container>
            <div className="block1">
                <p className="display-3 text-primary text-center">Catedral de Adoração e Promessa <img src="images/logo.png" width={100}/> - CAP</p>
            </div>
            <div className="block2">
                <p>&copy;Copy right/Desenvolvido pela <span className="fw-semibold text-warning">TQWEB</span>-2024</p>
            </div>
        </Container>
    )
}