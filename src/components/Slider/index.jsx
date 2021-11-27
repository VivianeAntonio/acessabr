import React, {useState, useEffect, useContext} from 'react'
import { FilterContext } from '../../contexts/FilterContext'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import Card from '../Card'
import 'swiper/swiper-bundle.css'
import api from '../../config/api'

SwiperCore.use(Pagination)

function Slider () {
    const { filteredPlaces, setFilteredPlaces } = useContext(FilterContext)
    const [places, setPlaces] = useState([])

    useEffect (() => {
        const fetchPlaces = async () => {
            const result = await api.get(`/places?category=${filteredPlaces}`)

            if (result.status === 200) {
                setPlaces(result.data)
            }
        }
        fetchPlaces()        
    }, [filteredPlaces])

    return (
        <Swiper slidesPerView={1}
            breakpoints={{
                767:{
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 4
                }
            }}
        >
            <SwiperSlide>
                <Card/>
            </SwiperSlide>

            <SwiperSlide>
                <Card/>
            </SwiperSlide>

            <SwiperSlide>
                <Card/>
            </SwiperSlide>

            <SwiperSlide>
                <Card/>
            </SwiperSlide>

            <SwiperSlide>
                <Card/>
            </SwiperSlide>

            <SwiperSlide>
                <Card/>
            </SwiperSlide>            
            
        </Swiper>
    )
}

export default Slider;