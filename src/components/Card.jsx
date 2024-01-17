import CardImage from "../assets/katie-zaferes.png"
import Star from "../assets/star.png"

export default function Card(){
    return(
        <div className="container-card">
            <div className="card">
                <img className="card-img" src={CardImage} alt="" />
                <div className="card-star">
                    <img src={Star} alt="star" />
                    <span>5.0</span>
                    <span className="gray">(6) •</span>
                    <span className="gray">USA</span>
                </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / Perosn</p>
            </div>
        </div>
    )
}