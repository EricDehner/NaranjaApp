import "./Planes.css"

const Planes = () => {
    return (
        <section className="planes">
            <h2 className="planes_title">Planes</h2>
            <div className="planes_card">
                <div className="planes_card-header">
                    <p className="planes_card-header--price">$240.000</p>
                    <h3 className="planes_card-header--title">PLAN SEMESTRAL</h3>
                    <p className="planes_card-header--description">Incluye: 2 usuarios - 1 sucursal</p>
                </div>
                <div className="planes_card-main">
                    <h4 className="planes_card-main--title">Funcionalidades</h4>
                    <p className="planes_card-main--content">Facturación POS ilimitada <br />Cuenta de cobro Ilimitadas <br />Importación masiva de productos <br />Control de inventarios <br />Apertura y cierre de caja <br />Clientes/proveedores <br />Soporte remoto whatsapp/email <br />Capacitacion videos pre-grabados</p>
                </div>
                <div className="planes_card-footer">
                    <p className="planes_card-footer--description">Usuario adicional<br /> Valor anual $200.000</p>
                </div>
            </div>
            <div className="planes_card">
                <div className="planes_card-header">
                    <p className="planes_card-header--price">$400.000</p>
                    <h3 className="planes_card-header--title"> PLAN ANUAL</h3>
                    <p className="planes_card-header--description"> Incluye: 3 usuarios - 1 sucursal</p>
                </div>
                <div className="planes_card-main">
                    <h4 className="planes_card-main--title">Funcionalidades</h4>
                    <p className="planes_card-main--content">Facturación POS ilimitada<br /> Cuenta de cobro ilimitadas<br /> Importación masiva de productos<br /> Control de inventarios<br /> Apertura y cierre de caja<br /> Clientes/proveedores<br /> Soporte remoto whatsapp/email<br /> Capacitacion personalizada</p>
                </div>
                <div className="planes_card-footer">
                    <p className="planes_card-footer--description">Usuario adicional<br /> Valor anual $200.000</p>
                </div>
            </div>
        </section>
    )
}
export default Planes