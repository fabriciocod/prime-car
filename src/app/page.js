import Image from 'next/image'
import styles from './page.module.css'
import seta from '../../public/seta.svg'
import background from '../../public/background.png'

/*Inicio da Home */
function Titulo({ x, y, children }) {
  return (
    <h1 style={{ left: x, top: y }} className={styles.titulo}>
      {children}
    </h1>
  );
}

function Texto({x, y, children}){
  return(
    <p style={{left: x, top: y}} className={styles.texto}>
      {children}
    </p>
  );
}
// ajustar o elemento para um botão
function Botao({x,y}){
  return(
    <p style={{left: x, top: y}}className={styles.botao}>
      Discover
      <Image src={seta}/></p>
  );
}

function AboutPage(){
  return(
    <div className={styles.container_about}>
      <div className={styles.aboutTitulo}>
        <Titulo >
        About
        </Titulo>
      </div>

      <div className={styles.abouTexto}>
        <Texto>
        <p> We pride ourselves at being able to get our customer into the car that they want, and more importantly, at they price they are looking for.</p>

        <p>We maintain outstanding customer service by listening to our customers and making sure that we meet their needs. Even if you don't buy from us, we will offer free advice on whe to look for when buying a used car or truck.</p>

        <p>Our philosophy is to accomodate you, the customer, with outstanding service while providing you the highest quality automobile needs at wholesale prices. We have a wide selection of vehicles and the expertise to deal with what you are looking for.</p>

        </Texto>
      </div>
      
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Botao x={1633} y={850} />

      <Image
        src={background}
        alt="Fundo da Home"
      />

      <Titulo x={1009} y={204}>
        More economy, same speed
      </Titulo>

      

      <Texto x={1502} y={600}>
      The most beloved cars of the moment for those who want 
      to ride in style without spending too much
      </Texto>

      {/* Inicico do About */}
      <AboutPage x={554.5} y={60}/>
      
    </>
  );
}

/* Final da Home*/
