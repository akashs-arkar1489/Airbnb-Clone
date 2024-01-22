import CardData from "./card-data/CardData"
import Data from "./card-data/Data"

export default function Card(){
    const viewdata = Data.map((each_data) => {
        return <CardData
            title={each_data.title}

            imgurl={each_data.coverImg}
            rating={each_data.stats.rating}
            reviewCount={each_data.stats.reviewCount}
            country={each_data.location}
            price={each_data.price}
        />
    })
    return(
        <div className="container-card">
            {viewdata}
        </div>
    )
}