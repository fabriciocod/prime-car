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

      <Titulo x={554.5} y={60} className={styles.aboutTitulo}>
        About
      </Titulo>
    </>
  );
}
/* Final da Home*/
