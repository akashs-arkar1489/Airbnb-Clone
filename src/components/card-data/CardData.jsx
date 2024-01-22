import Star from "/images/star.png"

export default function CardData(props){
    let badgeText;
    if (props.item.openSpots === 0){
        badgeText = "Sold Out"
    }else if (props.item.location === "Online" ){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className={badgeText === "ONLINE" ? "card-badge-online" : "card-badge"}><span style={badgeText === "ONLINE" ? {display: "block"}: {display: "none"}} className="blink"></span> {badgeText}</div> }
            <img className="card-img" src={props.item.coverImg} alt={props.item.coverImg} />
            <div className="card-star">
                <img src={Star} alt="star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) •</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p className="fixd-text"><span className="bold">From ${props.item.price}</span> / Perosn</p>
        </div>
    )
}