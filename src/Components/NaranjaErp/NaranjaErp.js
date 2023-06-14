import "./NaranjaErp.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import cards from "./cards"
import "swiper/css";
import NaranjaErpItem from "../NaranjaErpItem/NaranjaErpItem";

const NaranjaErp = () => {
    return (
        <section className="naranjaErp">
            <h2 className="naranjaErp_title">Naranja Erp es para tí, si:</h2>
            <div className="naranjaErp_cards">
                <Swiper
                    slidesPerView={1.4} spaceBetween={-50} freeMode={false} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} className="mySwiper">                    {cards.map(card => (
                        <SwiperSlide className="slide" key={card.id}>
                            <NaranjaErpItem id={card.id} image={card.image} description={card.description} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default NaranjaErp