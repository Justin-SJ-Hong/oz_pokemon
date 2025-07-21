import { useNavigate } from "react-router"

export const Card = ({pokemon}) => {
    const navigate = useNavigate()
    return (
        <section 
            className="w-[150px] border-1 border-solid border-gray-900 rounded-[10px] flex flex-col justify-center items-center gap-[10px] pb-[10px]"
            onClick={() => navigate(`/detail/${pokemon.id}`)}
        >
            <img className="w-[120px]" src={pokemon.front} />
            <div>{pokemon.name}</div>
        </section>
    )
}