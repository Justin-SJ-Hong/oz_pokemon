import { useState } from "react";

export default function FlipCard({front, back}) {
    const [flipped, setFlipped] = useState(false);
    return (
        <>
            <div className={`transition duration-500 relative transform-3d w-[200px] h-[200px] ${flipped ? 'rotate-y-180' : 'rotate-y-0'}`}>
                <img className="w-full h-full backface-hidden absolute" src={front} />
                <img className="w-full h-full backface-hidden rotate-y-180 absolute" src={back} />
            </div>
            <button onClick={() => setFlipped(prev => !prev)}>뒤집기</button>
        </>
    )
}