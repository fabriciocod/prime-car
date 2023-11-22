import Image from 'next/image'
import styles from './page.module.css'

function Titulo({x, y}){
  return(
    <h1 style={{left: x, top: y}} className={styles.titulo}>
      More economy, same speed
    </h1>
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
    </>
    
  );
}
