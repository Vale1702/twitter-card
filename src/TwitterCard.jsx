/* eslint-disable react/prop-types */
import { useState } from "react";

export function TwitterCard({userName, children, isFollowing}){
    const [isFollowing, setIsFollowing] = useState()

    const imagenSrc = `https://unavatar.io/${userName}`;
    const text= isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
    ? 'tw-card-button is-following'
    : 'tw-card-button';

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
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}