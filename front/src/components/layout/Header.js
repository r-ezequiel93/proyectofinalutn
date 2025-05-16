import camionVerde from '../layout/novedades/camion verde.png';





const Header = (props) => {
    return (
      <header>
        <div className="holder">
        <img src={camionVerde} alt="Logo de Transportes X" width="100" />
          <h1>TransportesX</h1>
        </div>
      </header>
    );
  }
  
  export default Header;
  