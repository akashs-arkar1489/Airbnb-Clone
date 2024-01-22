import Star from "/images/star.png"

export default function CardData(props){
    let badgeText;
    if (props.status === 0){
        badgeText = "Sold Out"
    }else if (props.country === "Online" ){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className={badgeText === "ONLINE" ? "card-badge-online" : "card-badge"}><span style={badgeText === "ONLINE" ? {display: "block"}: {display: "none"}} className="blink"></span> {badgeText}</div> }
            <img className="card-img" src={props.imgurl} alt={props.imgurl} />
            <div className="card-star">
                <img src={Star} alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p className="fixd-text"><span className="bold">From ${props.price}</span> / Perosn</p>
        </div>
    )
}