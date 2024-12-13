import { Container } from "./style.js";

import { Header } from "../../Components/Header/index.jsx";

export function Home() {

    return (
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
    <h3 class="about-title fs-4 text-center" >Olá, Seja bem-vindo!</h3>

        <img src="images/igreja1.jpg" className="float-start" alt="" width={400}/>
        <div className="mt-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque! Reprehenderit expedita aliquid illum ipsa aperiam quis, nesciunt placeat similique!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis excepturi, doloribus magnam illo, impedit totam error ad sed quod, dignissimos eaque eius! Nihil accusamus magnam hic praesentium dolorem similique ipsa maxime rerum, temporibus labore, consequatur fugit delectus nesciunt non pariatur! Aliquam sequi nisi aperiam nostrum ipsum animi explicabo quibusdam?</p>
        </div>
    </div>
    <div className="container mt-3 mt-md-0">
      <p className="h3 text-end">João 3.16</p>
      <p className="lead text-danger fw-semibold">"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."</p>
    </div>
    <div className="clearfix"></div>

        </Container>
    )
}