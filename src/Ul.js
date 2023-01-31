export function Ul(props){
    let navbar = props.navbar
    
    return(
        <ul className={props.class}>
        {navbar.map((item, index) => (            
            <li className={props.className} key={index}>{item}</li>
        ))}
         </ul>
    )
}