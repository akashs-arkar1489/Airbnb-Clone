import Star from "/images/star.png"

export default function CardData(props){
    return(
        <div className="card">
                <img className="card-img" src={props.imgurl} alt={props.img} />
                <div className="card-star">
                    <img src={Star} alt="star" />
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) •</span>
                    <span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / Perosn</p>
        </div>
    )
}