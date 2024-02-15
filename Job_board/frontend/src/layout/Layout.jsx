import { Navbar, Footer } from "../components/index.js";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
