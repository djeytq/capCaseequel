import { Container } from "./style.js";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

export function Home() {

    return (
        // <Container className="text-bg-info bg-opacity-25">
        <Container>
            <Header />

             {/* slide  */}
    <div id="mainSlider" class="m-0">
      <div class="carousel slide" data-bs-ride="carousel" id="ads">
        <div class="carousel-indicators">
          <button data-bs-target="#ads" data-bs-slide-to="0" class="active"></button>
          <button data-bs-target="#ads" data-bs-slide-to="1"></button>
          <button data-bs-target="#ads" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
           {/* imagens do slie  */}
          <div class="carousel-item active" data-bs-interval="20000">
            <img src="public/images/fundo.jpg" class="d-block w-100 image-slide" height="505" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="h1">Catedral de Adoração e Promessa</h5>
              <p class="text-bg-dark fs-5 bg-opacity-50 lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ab recusandae quasi, vero possimus, expedita enim quisquam, saepe laudantium cum laborum magnam eius cumque et! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nostrum.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="20000">
            <img src="public/images/fundo1.jpg" class="d-block w-100 image-slide" height="505" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="h1">Eforcasa</h5>
              <p class="text-bg-dark fs-5 bg-opacity-50 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti veniam tempore delectus, sunt placeat! Exercitationem repellendus recusandae quo, accusantium repellat voluptate temporibus?</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="20000">
            <img src="public/images/fundo1.jpg" class="d-block w-100 image-slide" height="505" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="h1">Eforcasa</h5>
              <p class="text-bg-dark fs-5 bg-opacity-50 lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis qui vitae quaerat accusantium at ratione facere dolor dolorum vel temporibus architecto, molestiae totam.</p>
            </div>
          </div>
          {/* imagens do slie */}
        </div>
        <div>
          <button class="carousel-control-prev" data-bs-target="#ads" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" data-bs-target="#ads" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>

    <div className="container mt-5 fundo1">
    <h3 class=" fs-4 text-center" >Olá, Seja bem-vindo!</h3>

        <img src="images/church.png" className="float-start" alt="" width={400}/>
        <div className="mt-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque! Reprehenderit expedita aliquid illum ipsa aperiam quis, nesciunt placeat similique!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis excepturi, doloribus magnam illo, impedit totam error ad sed quod, dignissimos eaque eius! Nihil accusamus magnam hic praesentium dolorem similique ipsa maxime rerum, temporibus labore, consequatur fugit delectus nesciunt non pariatur! Aliquam sequi nisi aperiam nostrum ipsum animi explicabo quibusdam?</p>
        </div>
    </div>
    <div className="container mt-3 mt-md-0">
      <p className="h3 text-end">João 3.16</p>
      <p className="lead text-danger fw-semibold">"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."</p>
    </div>
    <div style={{clear:"both"}}></div>
    <img src="images/fundo2.jpg" className="img-fluid w-100 d-lg-none" alt="" />

    <div className="d-flex my-4 ">
    <h2 class="mx-auto bg-warning d-inline-block px-5 py-2 rounded-pill bg-opacity-50">Sectores</h2>
    </div>

    <div className="container-fluid row py-4">

      <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <img src="images/setor6.webp" width={300} className=" w-100"/>
        <h3 className="h3 text-center fw-bold opacity-50">Coral</h3>
        <ul>
          <li className="lead">Coral dos Jovens;</li>
          <li className="lead">Coral das Mamãs;</li>
          <li className="lead">Coral dos Papás.</li>
        </ul>
      </div>

      <div className="col-12 col-sm-6 col-md-6 col-md-4 col-lg-3">
      <img src="images/setor_.png" width={300} className=" w-100"/>
      <h3 className="h3 text-center fw-bold opacity-50">Ministério do Louvor</h3>
      <p className="lead">Responsáveis pela moderação nos cultos</p>
      <p className="lead">"Servi ao Senhor com alegria; apresentai-vos diante dele com cântico."</p>
      </div>
      
      <div className="col-12 col-sm-6 col-md-6 col-md-4 col-lg-3">
      <img src="images/teatro.png" width={300} className=" w-100"/>
      <h3 className="h3 text-center fw-bold opacity-50">Grupo Teatral</h3>
      <p className="lead">O teatro Evangeliza e também pode mudar vidas!</p>
      </div>
      
      <div className="col-12 col-sm-6 col-md-6 col-md-4 col-lg-3">
      <img src="images/setor9.png" width={300} className=" w-100"/>
      <h3 className="h3 text-center fw-bold opacity-50">Grupo de Evangelismo</h3>
      <p className="lead"><span className="fw-semibold">Marcos 19:15</span> "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura."</p>
      </div>

    </div>

    <img src="images/adoracao.jpeg" alt="casa" className="img-fluid w-100 d-lg-none" />
<hr />

<div className="d-flex">
      <h3 className="rounded-pill bg-warning d-inline-block px-4 py-2 bg-opacity-50 mx-auto">Venha Cultuar</h3>
</div>

    <div className="container-fluid row py-3">
      <div className="col-sm-6 ">
      <img src="images/gps3.png" className=" float-md-start" width={200} alt="" />
        <p>País: Angola</p>
        <p>Cidade: Luanda</p>
        <p>Município: Maianga</p>
        <p>Bairro: Cassequel do Buraco</p>
        <p>Detelhe: 1* Andar cinzento</p>
      </div>
      <div className="col-sm-6">
        <img src="images/mapa.png" className="img rounded mx-auto  d-block " width={400} alt="" />
      </div>
    </div>

<Footer />
        </Container>
    )
}