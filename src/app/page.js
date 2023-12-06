import Image from 'next/image'
import styles from './page.module.css'
import seta from '../../public/seta.svg'


/*Inicio da Home */
function Titulo({children }) {
  return (
    <h1 className={styles.titulo}>
      {children}
    </h1>
  );
}

function Texto({children}){
  return(
    <p className={styles.texto}>
      {children}
    </p>
  );
}
// ajustar o elemento para um botão
function Botao(){
  return(
    <p className={styles.botao}>
      Discover
      <Image src={seta}/>
    </p>
  );
}

function Page_index(x, y){
  return(
    <div style={{right: x, top: y}} className={styles.container_index}>
      <div className={styles.index_Titulo}>
        <Titulo>
        More economy, same speed
        </Titulo>
      </div>

      <div className={styles.index_Texto}>
        <Texto>
        The most beloved cars of the moment for those who want to ride in style without spending too much
        </Texto>
      </div>
      
      <button className={styles.index_botao}>Discover</button>
    </div>
  );
}

export default function Home() {
  return (
    <>
     
      <Page_index/>


      </>
    
  );
}

/* Final da Home*/
