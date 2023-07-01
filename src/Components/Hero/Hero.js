import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero"> 
      <iframe
        className="hero_video"
        src="https://www.youtube.com/embed/QoKrlqNOYZs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="hero_desktop">
        <h2 className="hero_title">
          Administra y gestiona tus puntos de venta con Naranja ERP
        </h2>
        <p className="hero_description">
          Con nuestra <span>solución POS</span> contarás con una herramienta
          amigable e intuitiva. Podrás facturar, controlar tu inventario,
          manejar tus gastos, generar tus cuentas de cobro y crecer de manera
          organizada y sostenible.
        </p>{" "}
      </div>
   </section>
  );
};
export default Hero;
