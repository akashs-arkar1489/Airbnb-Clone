import Star from "/images/star.png"

export default function CardData(props){
    let badgeText;
    if (props.openSpots === 0){
        badgeText = "Sold Out"
    }else if (props.location === "Online" ){
        badgeText = "ONLINE"
    }
    console.log(props)
    return(
        <div className="card">
            {badgeText && <div className={badgeText === "ONLINE" ? "card-badge-online" : "card-badge"}><span style={badgeText === "ONLINE" ? {display: "block"}: {display: "none"}} className="blink"></span> {badgeText}</div> }
            <img className="card-img" src={props.coverImg} alt={props.coverImg} />
            <div className="card-star">
                <img src={Star} alt="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="fixd-text"><span className="bold">From ${props.price}</span> / Perosn</p>
        </div>
    )
}