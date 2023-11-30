import React from "react";
import "./index.css";
function Index() {
  return (
    <body>
      <header>
        <h1>Destinos</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/">Cerrar sesion</a></li>

        </ul>
      </nav>
      <main>
        <section className="rutas">
          <img src="/campo.jpg" alt="rutas" />
          <h2>Holanda</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis temporibus nulla quia deleniti, distinctio labore maiores blanditiis sint dolorem sed, omnis incidunt sit amet quibusdam, consequuntur voluptatum tenetur vel?</p>
          <a href="./holanda" className="btn">Más información</a>
        </section>
        <section className="rutas">
          <img src="/Puentecolgante.jpg" alt="rutas" />
          <h2>Italia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis temporibus nulla quia deleniti, distinctio labore maiores blanditiis sint dolorem sed, omnis incidunt sit amet quibusdam, consequuntur voluptatum tenetur vel?</p>
          <a href="/italia" className="btn">Más información</a>
        </section>
        <section className="rutas">
          <img src="/playa.jpg" alt="rutas" />
          <h2>Hawaii</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis temporibus nulla quia deleniti, distinctio labore maiores blanditiis sint dolorem sed, omnis incidunt sit amet quibusdam, consequuntur voluptatum tenetur vel?</p>
          <a href="/hawaii" className="btn">Más información</a>
        </section>
        <section className="rutas">
          <img src="/ciudad.jpg" alt="rutas" />
          <h2>San Francisco</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis temporibus nulla quia deleniti, distinctio labore maiores blanditiis sint dolorem sed, omnis incidunt sit amet quibusdam, consequuntur voluptatum tenetur vel?</p>
          <a href="/ciudad" className="btn">Más información</a>
        </section>
        <section className="rutas">
          <img src="/faro.jpg" alt="rutas" />
          <h2>Islandia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis temporibus nulla quia deleniti, distinctio labore maiores blanditiis sint dolorem sed, omnis incidunt sit amet quibusdam, consequuntur voluptatum tenetur vel?</p>
          <a href="/islandia" className="btn">Más información</a>
        </section>
        <section className="rutas">
          <img src="/nieve.jpg" alt="rutas" />
          <h2>Alaska</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis temporibus nulla quia deleniti, distinctio labore maiores blanditiis sint dolorem sed, omnis incidunt sit amet quibusdam, consequuntur voluptatum tenetur vel?</p>
          <a href="/alaska" className="btn">Más información</a>
        </section>
        <section className="rutas">
          <img src="/mexico.jpg" alt="rutas" />
          <h2>Mexico</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis temporibus nulla quia deleniti, distinctio labore maiores blanditiis sint dolorem sed, omnis incidunt sit amet quibusdam, consequuntur voluptatum tenetur vel?</p>
          <a href="/mexico" className="btn">Más información</a>
        </section>
        <section className="rutas">
          <img src="/colombia.jpg" alt="rutas" />
          <h2>Colombia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis temporibus nulla quia deleniti, distinctio labore maiores blanditiis sint dolorem sed, omnis incidunt sit amet quibusdam, consequuntur voluptatum tenetur vel?</p>
          <a href="/colombia" className="btn">Más información</a>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Lugares por Visitar</p>
      </footer>
    </body>
  );
}

export default Index;
