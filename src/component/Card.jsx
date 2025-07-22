import { useNavigate } from "react-router"
import FavoriteButton from "./FavoriteButton"
import { useState, memo } from "react"

export const Card = memo(({pokemon}) => {
    console.log('card', pokemon.id)
    const [isImageLoading, setIsImageLoading] = useState(true)
    const navigate = useNavigate()
    return (
        <section 
            className="w-[150px] border-1 border-solid border-[gray] rounded-[10px] border-b-[5px] border-b-solid border-b-[black] border-r-[5px] border-r-solid border-r-[black] flex flex-col justify-center items-center gap-[10px] pb-[10px]"
            onClick={() => navigate(`/detail/${pokemon.id}`)}
        >
            {isImageLoading ? <div className="w-[120px] h-[120px] leading-[120px]">로딩중......</div> : null}
            <img onLoad={() => setIsImageLoading(false)} className="w-[120px]" src={pokemon.front} style={{display: isImageLoading ? 'none' : 'block'}} />
            <div>
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id} />
            </div>
        </section>
    )
})