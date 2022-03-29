
export default function Joke(props){
    console.log(props.setup)
    return(
        <div className="joke">
             <div className="joke--setup">
                <p> <b>setup :{props.setup}</b></p>

             </div>
             <div className="joke--punchline">
                 <p>{props.punchline}</p>



             </div>
        </div>
    )
}