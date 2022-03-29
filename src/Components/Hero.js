import hero from '../Images/hero2.png'
export default function Hero(){
    return(
        <section className="hero">
            <img src={hero} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join interactive unique activities led by 
                one-of-a-kind hosts-all without leaving home.
            </p>
        </section>

    )
}