import Image from "next/image";
import styles from "./page.module.css";
import seta from "../../public/seta.svg";
import about_car from "../../public/about_car.png";
import bg from '../../public/background.png';
import back from "../../public/backg_benefits.svg";
import map from "../../public/map.svg";
import calendar from "../../public/calendar.svg";
import key from "../../public/key.svg";
import cars from "../../public/cars.png";

function Titulo({children}) {
  return <h1 className={styles.titulo}>{children}</h1>;
}

function Texto({children}) {
  return <p className={styles.texto}>{children}</p>;
}

function SubTitulo({children}) {
  return <h2 className={styles.subTitulo}>{children}</h2>;
}
// ajustar o elemento para um botão
function Botao() {
  return (
    <button className={styles.botao}>
      Discover
      <Image src={seta}/>
    </button>
  );
}

function Cards({children}){
  return(
    <div className={styles.cards}>
      {children}
    </div>
  );
}

function Card({imagem, texto, descricao, id }){
  
  function handleColorCard(){

  
  switch (id) {

    case 'map':
      console.log('map');
      return(
        '#00DDA8'
      );

    case 'calendar':
      console.log('calendar');
      return(
        '#CF2929'
      );
      
    case 'key':
      console.log('key');
      return(
        '#0058DD'
      );
      
    default:
      console.log(`Sorry, we are out of ${expr}.`);
}}

  return(
    <div className={styles.card} style={{backgroundColor:handleColorCard()}}>
      <Image className={styles.imagem} src={imagem}/>

      <div className={styles.cabecalhoCard}>
      <p className={styles.texto}>{texto}</p>
      <p className={styles.descricao}>{descricao}</p>

      </div>
      
    </div>
  );
}

// Inicio Page Index
function Page_index() {
  return (
    <div style={{backgroundImage: `url(${bg.src})`}} className={styles.container_index}>

      <div className={styles.page}>

        <div  className={styles.index_Titulo}>
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
            for.<br/>
          
            We maintain outstanding customer service by listening to our
            customers and making sure that we meet their needs. Even if you
            don't buy from us, we will offer free advice on whe to look for when
            buying a used car or truck.<br/>
                   
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
    <div 
    style={{backgroundImage: `url(${back.src})`
  }} className={styles.container_Benefits}>

      <div className={styles.benefits_Titulo}>
        <Titulo>All the benefits you will get when you shop with us</Titulo>
      </div>

      <div className={styles.benefits_Texto}>
        <Texto>
          Take advantage of everything you can have now by buying your new car
          at Prime Car
        </Texto>
      </div>

      <div>
        <Cards>
          <Card id={'map'} imagem={map} texto="Several Headquarters" descricao="You can find several Prime Car stores around the United States! Find the store closest to you now"/>

          <Card  id={'calendar'} imagem={calendar} texto="Schedule Your Best Day" descricao="Choose the day and time to take a test drive for free!"/>

          <Card  id={'key'} imagem={key} texto="Receive your car right away" descricao="Close the contract and you get the keys right away"/>
        
        </Cards>

      </div>

    </div>
  );
}

// Final Page Benefits

//Inicio Page Cars

function Page_Cars(){
  return(
    <div className={styles.container_cars}>

      <div className={styles.cars_Titulo}>
        <Titulo>
        The cars that are hot right now
        </Titulo>
      </div>

      <div className={styles.cars_Texto}>
        <Texto>
        Buy yours and be the most stylish in the neighborhood
        </Texto>
      </div>

      <div style={{backgroundImage: `url(${cars.src})`}} className={styles.cars_painel}>
        
        <div className={styles.cars_conteudo}>

          <div className={styles.cont_subTitulo}>
            <subTitulo>Tesla Model 3</subTitulo>
          </div>
        
          <div className={styles.cont_Texto}>
            <Texto>Disruptive, avant-garde, futuristic, innovative.</Texto>
          </div>
        
        <div className={styles.cont_Contato}>
          <Texto>Concatc</Texto>
        </div>
        
        </div>
      </div>

    </div>
  );
}
// Final Page Cars
export default function Home() {
  return (
    <main className={styles.main}>
      <Page_index />
      <Page_About />
      <Page_Benefits />
      <Page_Cars />
    </main>
  );
}

/* Final da Home*/
