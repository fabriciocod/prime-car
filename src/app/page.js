import Image from 'next/image'
import styles from './page.module.css'
import seta from '../../public/seta.svg'
import background from '../../public/background.png'

/*Inicio da Home */
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
      
      <Botao x={1633} y={850}/>

      <Image
      src={background}
      // width={1920}
      // height={1020}
      alt='Fundo da Home'/>

      <Titulo></Titulo>
           
      <Texto></Texto>
     
    </>
    
  );
}
/* Final da Home*/

/*Inicio do Page About US */
// function PageTitulo({x, y}){
//   return(
//     <h1 style={{left: x, top: y}} className={styles.pagetitulo}>
//       More economy, same speed
//     </h1>
//   );
// }

// export default function PageAbout() {
//   return (
//     <>
//     <PageTitulo></PageTitulo>
    
//     </>
    
//   );
// }