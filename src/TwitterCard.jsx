import './twitterCard.css'

export function TwitterCard(){
    return(
        <>
        <article className="tw-card">
            <header className="tw-card-header">
                <img
                className="tw-card-avatar"
                src="https://unavatar.io/x/kikobeats"
                alt="img-avatar" />
                <div className="tw-card-info"> 
                    <strong>Hola mundo </strong>
                    <span className="tw-card-userName">@Minki</span>
                </div>
            </header>
            <aside>
                <button className="tw-card-button">
                    Seguir
                </button>
            </aside>
        </article>
    </>
    )
}