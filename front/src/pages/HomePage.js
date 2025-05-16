import './../styles/home.css';
import "./../styles/novedades.css";
import chasis from '../pages/sistemas-seguridad-camiones.webp';
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src={chasis} alt="Camión de carga" style={{ width: '50%' }} />

            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>¿Necesitás mover algo? ¡Nosotros lo llevamos por vos!

                        En TransportesX, ofrecemos servicios de transporte confiables y eficientes con camiones y camionetas adaptadas para todo tipo de carga. Ya sea una mudanza, envíos a larga distancia o traslados comerciales, contamos con el personal y la flota adecuada para hacerlo con seguridad y puntualidad.

                        📦 Mudanzas
                        🚚 Transporte de larga distancia
                        🏢 Servicios para empresas y particulares

                        Solicitá tu presupuesto sin compromiso y asegurá tu carga con quienes saben de transporte.</p>

                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita"> "muy conforme, servicio de calidad" </span>
                        <span className="autor">Gomez Ezequiel</span>

                        
                        <div className="testimonio">
                            <span className="cita"> "Envios rapidos y confiables" </span>
                            <span className="autor">Mendez Soledad</span>

                        </div>

                    </div>
                </div>
            </div>

        </main>

    );
}


export default HomePage; 