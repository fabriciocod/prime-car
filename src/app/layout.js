// import localFont from 'next/font/local'
import Image from 'next/image';
import './globals.css';
import styles from './styles.module.css';
import bg from '../../public/background.png';
import fac from '../../public/facebook.png';
import ink from '../../public/inkedin.png';
import int from '../../public/instagram.png';
import {american_captian} from './fonts'
import {clsx} from 'clsx';

 




export const metadata = {
  title: 'Prime Car',
}
// Adiciona o logo 
function Logo(){
  return(
    <h1 className={clsx([styles.logo, american_captian.className])}>PRIME CAR</h1>
  );
}
// Adiciona SubTitulo com herança
function SubTitulo({children}){
  return(
    <h2 className={styles.subtitulo}>{children}</h2>
  );
}
// Adiciona Texto com herança
function Texto({children}){
  return(
    <p className={styles.paragrafos}>{children}</p>
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
      <body>
       
      <header>
        <div style={{backgroundImage: `url(${bg.src})`}} className={styles.container_header}>

          <div className={styles.container_nav}>
              <div className={styles.logo}>
                <Logo/>
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

      <footer>
        <div className={styles.container_footer}>
          <div className={styles.footer_informacoes}>
            <div className={styles.footer_logo}>
              <Logo />
            </div>

            <div className={styles.footer_city}>
              <SubTitulo>Where are we</SubTitulo>
              <ul>
                <li>Georgia</li>
                <li>Texas</li>
                <li>California</li>
                <li>Virginia</li>
                <li>Colorado</li>
                <li>Pennsylvania</li>
                <li>Massachusetts</li>
              </ul>
            </div>

            <div className={styles.footer_links}>
              <SubTitulo>Quick Links</SubTitulo>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Contact Us</li>
               </ul>
            </div>

            <div className={styles.footer_email}>
              <SubTitulo>Email Us</SubTitulo>
              <ul>
                <li>contact@primecar.com</li>
              </ul>
            </div>

            <div className={styles.footer_call}>
              <SubTitulo>Call US</SubTitulo>
              <ul>
                <li>+999-9-999-9999</li>
                <li>+111-11-111-1111</li>
              </ul>

              <div className={styles.footer_media}>
                <Image src={fac} alt="Facebook"/>
                <Image src={ink} alt="InkedIn"/>
                <Image src={int} alt="Instagram"/>
              </div>


            </div>

            

          </div>

          <div className={styles.footer_direito}>
            <div className={styles.footer_privacy}>
              <Texto>Privacy policy </Texto>
            </div>

            <div className={styles.footer_term}>
              <Texto>Term and conditions</Texto>
            </div>
            
            <div className={styles.footer_reserved}>
              <Texto>Copyright &copy; 2022 Prime Car. All Rights Reserved</Texto>
            </div>
          </div>
        </div>
      </footer>
      </body>
    </html>
  )
}
