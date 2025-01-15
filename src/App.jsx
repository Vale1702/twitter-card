import './twitterCard.css'
import { TwitterCard } from "./TwitterCard.jsx";

export function App (){
    
    return(
    <>
        <section className='app'>
            <TwitterCard  userName="minki" >
                Valentina Hdz
            </TwitterCard>
            <TwitterCard userName="mizuky">
                Mizu ky
            </TwitterCard>
            <TwitterCard userName="ova4758">
                Oswaldo Jimenez
            </TwitterCard>
        </section>
    </>
    )
}