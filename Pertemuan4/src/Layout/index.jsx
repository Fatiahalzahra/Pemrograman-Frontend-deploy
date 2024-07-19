import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container";
/**
 * Membuat Component Layout
 * Layout terdiri dari Navbar,Footer, children
 * Menggunakan teknik Composition 
 * -Menampilkan konten dinamis 
 * - Menggunakan props children
 */
function Layout({ children }) {
    return (
        <>
        <Navbar />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
        </>
   

    );
}
export default Layout;