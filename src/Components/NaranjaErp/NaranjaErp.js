import "./NaranjaErp.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import cards from "./cards"
import "swiper/css";
import NaranjaErpItem from "../NaranjaErpItem/NaranjaErpItem";

const NaranjaErp = () => {

    if (window.innerWidth > 1440) {
        return (
            <section className="naranjaErp">
                <h2 className="naranjaErp_title">Naranja Erp es para tí, si:</h2>
                <div className="naranjaErp_cards">
                    <Swiper
                        slidesPerView={4} spaceBetween={0} freeMode={false} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} className="mySwiper">                    {cards.map(card => (
                            <SwiperSlide className="slide" key={card.id}>
                                <NaranjaErpItem id={card.id} image={card.image} description={card.description} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        )
    } else if (window.innerWidth > 1100) {
        return (
            <section className="naranjaErp">
                <h2 className="naranjaErp_title">Naranja Erp es para tí, si:</h2>
                <div className="naranjaErp_cards">
                    <Swiper
                        slidesPerView={3} spaceBetween={0} freeMode={false} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} className="mySwiper">                    {cards.map(card => (
                            <SwiperSlide className="slide" key={card.id}>
                                <NaranjaErpItem id={card.id} image={card.image} description={card.description} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        )
    } else if (window.innerWidth > 500) {
        return (
            <section className="naranjaErp">
                <h2 className="naranjaErp_title">Naranja Erp es para tí, si:</h2>
                <div className="naranjaErp_cards">
                    <Swiper
                        slidesPerView={2} spaceBetween={0} freeMode={false} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} className="mySwiper">                    {cards.map(card => (
                            <SwiperSlide className="slide" key={card.id}>
                                <NaranjaErpItem id={card.id} image={card.image} description={card.description} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        )
    }

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