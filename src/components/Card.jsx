import CardData from "./card-data/CardData"
import Data from "./card-data/Data"

export default function Card(){
    const viewdata = Data.map((each_data) => {
        return <CardData 
            key={each_data.id}
            item = {each_data}
        />
    })
    return(
        <div className="container-card">
            {viewdata}
        </div>
    )
}