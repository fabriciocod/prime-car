import Image from "next/image";
import styles from "./page.module.css";
import seta from "../../public/seta.svg";
import about_car from "../../public/about_car.png";

function Titulo({ children }) {
  return <h1 className={styles.titulo}>{children}</h1>;
}

function Texto({ children }) {
  return <p className={styles.texto}>{children}</p>;
}

function SubTitulo({ children }) {
  return <p className={styles.subTitulo}>{children}</p>;
}
// ajustar o elemento para um botão
function Botao() {
  return (
    <button className={styles.botao}>
      Discover
      <Image src={seta} />
    </button>
  );
}

// Inicio Page Index
function Page_index() {
  return (
    <div className={styles.container_index}>
      <div className={styles.index_Titulo}>
        <Titulo>More economy, same speed</Titulo>
      </div>

      <div className={styles.index_Texto}>
        <SubTitulo>
          The most beloved cars of the moment for those who want to ride in
          style without spending too much
        </SubTitulo>
      </div>

      <div className={styles.index_botao}>
        <Botao />
      </div>
    </div>
  );
}
// Final Page Index

// Inicio Page About
function Page_About() {
  return (
    <div className={styles.container_About}>

      <div className={styles.about_Titulo}>
        <Titulo>ABOUT US</Titulo>
      </div>

      <div className={styles.about_Conteudo}>
        <div className={styles.about_Texto}>
          <Texto>
            We pride ourselves at being able to get our customer into the car
            that they want, and more importantly, at they price they are looking
            for.
          </Texto>

          <Texto>
            We maintain outstanding customer service by listening to our
            customers and making sure that we meet their needs. Even if you
            don't buy from us, we will offer free advice on whe to look for when
            buying a used car or truck.
          </Texto>

          <Texto>
            Our philosophy is to accomodate you, the customer, with outstanding
            service while providing you the highest quality automobile needs at
            wholesale prices. We have a wide selection of vehicles and the
            expertise to deal with what you are looking for.
          </Texto>
        </div>

        <div className={styles.about_Card}>
          <Image src={about_car} />
        </div>
      </div>
    </div>
  );
}
// Final Page About

// Inicio Page Benefits
function Page_Benefits() {
  return (
    <div className={styles.container_Benefits}>
      <div className={styles.benefits_Titulo}>
        <Titulo>All the benefits you will get when you shop with us</Titulo>
      </div>

      <div className={styles.benefits_Texto}>
        <Texto>
          Take advantage of everything you can have now by buying your new car
          at Prime Car
        </Texto>
      </div>
    </div>
  );
}

// Final Page Benefits

export default function Home() {
  return (
    <>
      <Page_index />
      <Page_About />
      <Page_Benefits />
    </>
  );
}

/* Final da Home*/
