import swimmer from '../Images/swimmer1.jpg'

export default function Card(props){

    let badgeVal
    if(props.openSpot==0)
    {
        badgeVal="SOLD OUT"
    }else if(props.location=="Online")
    {
        badgeVal="ONLINE"
    }

    
    return(
        <div className="card--container">
          
        <div className="card">
           { badgeVal && <div className="badge">{badgeVal}</div>}
            <img src={require("../Images/"+props.img)}  className="card--image" />
            <span><i className="fa-solid fa-star"></i></span>
            <span >{props.stats.ratings}</span>
            <span className="gray">({props.stats.views}).</span>
            <span className="gray">{props.city}</span>            
            <p>{props.heading}</p>
            <p><span className="bold">From ${props.price} </span>/ person</p>

        </div>
        </div>
    )
}