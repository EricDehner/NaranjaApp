import "./NaranjaPos.css"
import cards from "./cards"
import NaranjaPosItem from "../NaranjaPosItem/NaranjaPosItem"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";

const NaranjaPos = () => {
    return (
        <section className="naranjaPos">
            <h2 className="naranjaPos_title">Naranja Pos</h2>
            <p className="naranjaPos_subtitle">Con Naranja Erp cuentas con un aliado al momento de facturar tus servicios:</p>
            <div className="naranjaPos_cards">
                <Swiper
                    slidesPerView={3} spaceBetween={-50} freeMode={false} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} className="mySwiper">                    {cards.map(card => (
                        <SwiperSlide className="slide" key={card.id}>
                            <NaranjaPosItem id={card.id} image={card.image} description={card.description} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default NaranjaPos