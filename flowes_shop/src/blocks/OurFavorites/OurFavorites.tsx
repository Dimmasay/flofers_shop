import our from './OurFavorites.module.scss'
import './swiper.scss'
import {bouquets, bouquetType, favoritesNames} from "../../assets/bouquets";
import {Swiper, SwiperSlide,} from 'swiper/react';
import {FavoriteItem} from "./FavoriteItem/FavoriteItem";
import {Autoplay, Navigation, Pagination} from "swiper/modules";


export const OurFavorites = () => {


    let favorites = bouquets.filter((bouquet: bouquetType) => {
        return favoritesNames.some(name => name === bouquet.name)
    })

    let sliderList = favorites.map((item: bouquetType) => {
        return (
            <SwiperSlide>
                <FavoriteItem name={item.name} id={item.id}
                              price={item.price} image={item.image}
                              key={item.id}/>
            </SwiperSlide>
        )
    })


    let SliderOptions = {
        modules: [Navigation, Pagination, Autoplay],
        navigation: true,
        slidesPerGroup: 1,
        pagination: true,
        observer: true,
        observeParents: true,
        speed: 1800,
        preloadImages: true,
        parallax: true,
        loop: true,
        autoplay: {
            pauseOnMouseEnter: true,
            delay: 2500,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
                spaceBetween: 50,
                centeredSlides: true,
            },
            320: {
                slidesPerView: 1.4,
                spaceBetween: 50,
                centeredSlides: true,
            },
            480: {
                slidesPerView: 2.4,
                spaceBetween: 60,
                centeredSlides: true,
            },
            992: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 90,
                slidesPerGroup: 1,
            },
            1200: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 90,
                slidesPerGroup: 3,
            }
        },
    }

    return (
        <div className={our.container}>
            <div className={our.title}>Наші Бестселлери</div>
            <div className={our.containerSwiper}>
                <Swiper {...SliderOptions}>
                    {sliderList}
                </Swiper>
            </div>
        </div>

    )
}