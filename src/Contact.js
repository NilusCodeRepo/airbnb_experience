

export default function Contact(props){
    console.log(props.img)
    return(
        <div className="contact--card">
            <img src={require(""+props.img)} className="card--photo"/>
            <span><h2>{props.name}</h2></span>
            <p></p>
            <p className="contact--phone"><span><i className="fa-solid fa-phone"></i></span>{props.phone}</p>
            <p className="contact--email"><span><i className="fa-solid fa-envelope"></i></span>{props.email}</p>
        </div>
    )
}