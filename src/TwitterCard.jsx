/* eslint-disable react/prop-types */
import { useState } from "react";

export function TwitterCard({userName, children}){
    const [isFollowing, setIsFollowing] = useState(false)

    const imagenSrc = `https://unavatar.io/${userName}`;
    const text= isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing                                                     ? 'tw-card-button is-following'                                 : 'tw-card-button';

    const handleClick=()=>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-card'>
            <header className='tw-card-header'>
                <img
                className='tw-card-avatar'
                alt='img-avatar' 
                src={imagenSrc}/>
                <div className='tw-card-info'> 
                    <strong>{children}</strong>
                    <span className='tw-card-userName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}
                            onClick={handleClick}>
                    <span className="tw-card-text">{text} </span>
                    <span className="tw-card-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}