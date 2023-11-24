import Image from 'next/image'
import styles from './page.module.css'


function Titulo({x, y}){
  return(
    <h1 style={{left: x, top: y}} className={styles.titulo}>
      More economy, same speed
    </h1>
  );
}

function Texto({x, y}){
  return(
    <p style={{left: x, top: y}} className={styles.texto}>The most beloved cars of the moment for those who want to ride in style without spending too much</p>
  );
}

function Botao({x, y}){
  return(
    <button style={{left: x, top: y}} classNamen={styles.botao}>Discover</button>
  );
}

export default function Home() {
  return (
    <>
    <Image
    src="/background.png"
    width={1920}
    height={1020}
    alt='Fundo da Home'/>
    
    <Titulo></Titulo>
    <Texto></Texto>
    <Botao></Botao>
    </>
    
  );
}
