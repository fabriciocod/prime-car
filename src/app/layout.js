import './globals.css'
import styles from './styles.module.css'
import backgroundImage from '../../public/background.png';


export const metadata = {
  title: 'Prime Car',
}
// Adiciona o logo 
function Logo(){
  return(
    <p className={styles.logo}>PRIME CAR</p>
  );
}

// Adiciona o menu
function ItemMenu({nome}){
  return(
    <p className={styles.itemMenu}>{nome}</p>
  );
}

function Menu({children}){
  return(
    <ul className={styles.menu}>
      {children.map((itemMenu) => (
        <li key={itemMenu.nome}>{itemMenu}</li>
      ))}
    </ul>
  );
}

function Contato(){
  return(
    <p className={styles.contato}>Contact Us</p>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.corpo}>
       
      <header>
        <div 
        style={{backgroundImage: `url(${backgroundImage.src})`
        
        
      }} className={styles.container_header}>

        <div className={styles.container_nav}>

            <div className={styles.logo}>
              <Logo x={100} y={32}/>
            </div>
          
            <div className={styles.menu}>

              <Menu>

                <ItemMenu nome = "Home"/>
                <ItemMenu nome = "About"/>
                <ItemMenu nome = "Benefits"/>
                <ItemMenu nome = "Car"/>

              </Menu>
            </div>

            <div>
              <Contato/>
            </div>

        </div>
        </div>
      </header>

      <main>
       {children} 
      </main>

      
      </body>
    </html>
  )
}
