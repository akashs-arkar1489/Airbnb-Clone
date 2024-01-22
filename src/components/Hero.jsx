import PhotoGrid from "/assets/photo-grid.png"
export default function Hero(){
    return(
        <div className="hero">
            <img src={PhotoGrid} className="hero-img" alt="Photo Grid" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}