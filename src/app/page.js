import Image from "next/image";
import styles from "./page.module.css";
import seta from "../../public/seta.svg";
import about_car from "../../public/about_car.png";
import back from "../../public/backg_benefits.svg";
import map from "../../public/map.svg";
import calendar from "../../public/calendar.svg";
import key from "../../public/key.svg";
import cars from "../../public/cars.png";
import movie from "../../public/movie_car.png";
import iconplay from "../../public/icon_play.svg";
import localizacao from "../../public/localizacao.png";
import icon_group from "../../public/icon_group.svg";
import backg_about from "../../public/backg_about.png";
import backg_contact from "../../public/backg_contact.png";

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
function Botao({children}) {
  return (
    <button className={styles.botao}>{children}</button>
  );
}

function Cards({children}){
  return(
    <div className={styles.cards}>
      {children}
    </div>
  );
}



// Inicio Page Index
function Page_index() {
  return (
    <div className={styles.container_index}>

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
          <Botao>
            Discover <Image src={seta}/>
          </Botao>
        </div>
      
      </div>
    </div>
  );
}
// Final Page Index

// Inicio Page About
function Page_About() {
  return (
    <div style={{backgroundImage: `url(${backg_about.src})`
  }}className={styles.container_About}>

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

      <div className={styles.benefits_Cards}>
        <div className={styles.card_map}>
          <Cards >
            <div className={styles.card_image}>
              <Image src={map} alt="Map"/>
            </div>
            
            <div className={styles.card_subtitulo}>
              <SubTitulo>Several Headquarters</SubTitulo>
            </div>
            
            <div className={styles.card_texto}>
              <Texto>
              You can find several Prime Car stores 
              around the United States! Find the store
              closest to you now
              </Texto>
            </div>
            
          </Cards>
        </div>

        <div className={styles.card_calendar}>
        <Cards >
        <div className={styles.card_calendar_image}>
              <Image src={calendar} alt="Calendar"/>
            </div>
            
            <div className={styles.calendar_subtitulo}>
              <SubTitulo>Schedule Your Best Day</SubTitulo>
            </div>
            
            <div className={styles.calendar_texto}>
              <Texto>
              Choose the day and time 
              to take a test drive for free!
              </Texto>
            </div>
        </Cards>
        </div>

        <div className={styles.card_key}>
        <Cards >
        <div className={styles.card_key_image}>
              <Image src={key} alt="Key"/>
            </div>
            
            <div className={styles.key_subtitulo}>
              <SubTitulo>Receive your car right away</SubTitulo>
            </div>
            
            <div className={styles.key_texto}>
              <Texto>
              Close the contract 
              and you get the keys right away
              </Texto>
            </div>
        </Cards>
        </div>

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
          <Botao>Contact</Botao>
        </div>
        
        </div>
      </div>

    </div>
  );
}
// Final Page Car

// Inicio Page Movie
function Page_Movie(){
  return(
    <div className={styles.container_movie}>
      <div className={styles.movie_informacao}>
        <Titulo>
        Be amazed by the power
        </Titulo>
        
        <Texto>
        Speed and economy together in one place, use and abuse your car's potential.
        </Texto>

      </div>

      <div style={{backgroundImage: `url(${movie.src})`}} className={styles.movie_car}>
        <Image src={iconplay}/>
      </div>
    </div>
  );
}
// Final Page Movie

// Inicio Page Contato
function Page_Contato(){
  return(
    <div style={{backgroundImage: `url(${backg_contact.src})`
  }} className={styles.container_contato}>
      <div className={styles.contact_informacao}>
        
        <div className={styles.contact_conteudo}>
          <Titulo>
            CONTACT US
          </Titulo>

          <Texto>
            To find out more information about cars and 
            quotes, fill out the form on the side or contact 
            us by phone.
            </Texto>
        </div>

        <form className={styles.contact_form}>
          <div className={styles.contact_input}>
            <input id="name" type="text" placeholder="You Name" autoFocus/>
            <input id="email" type="email" placeholder="You Email"/>
            <input id="phone" type="tel" placeholder="Phone Number"/>

            <select>
              <option>Country</option>
              <option>Brazil</option>
              <option>Argentina</option>
            </select>

            <textarea cols="63" placeholder="Message"/>
          </div>

          <div className={styles.contact_submit}><Botao>Submit</Botao></div>
        </form>
      </div>

      <div style={{backgroundImage: `url(${localizacao.src})`}} className={styles.contact_map}>
        <Image src={icon_group} alt="Localização da Prime Car"/>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Page_index />
      <Page_About />
      <Page_Benefits />
      <Page_Cars />
      <Page_Movie />
      <Page_Contato />
    </main>
  );
}

/* Final da Home*/
