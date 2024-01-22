import CardData from "./card-data/CardData"

export default function Card(){
    return(
        <div className="container-card">
            <CardData 
                img="katie-zaferes"
                imgurl="/images/katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}