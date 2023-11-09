import './globals.css'
import styles from './styles.module.css'

export const metadata = {
  title: 'Prime Car',
}
// Adiciona o logo 
function Logo({x,y}){
  return(
    <p style={{left: x, top: y}} className={styles.logo}>PRIME CAR</p>
  );
}

// Adiciona o menu
function ItemMenu({nome}){
  return(
    <p className={styles.itemMenu}>{nome}</p>
  );
}

function Menu({children, x, y}){
  return(
    <ul style={{left: x, top: y}} className={styles.menu}>
      {children.map((itemMenu) => (
        <li key={itemMenu.nome}>{itemMenu}</li>
      ))}
    </ul>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.corpo}>
      <header>
        <Logo x={100} y={32}/>

        <Menu x={781} y={41.5}>

          <ItemMenu nome = "Home"/>
          <ItemMenu nome = "About"/>
          <ItemMenu nome = "Benefits"/>
          <ItemMenu nome = "Car"/>

        </Menu>
      </header>

      <main>
       {children} 
      </main>
      
      </body>
    </html>
  )
}
