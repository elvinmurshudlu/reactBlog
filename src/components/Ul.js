export function Ul(props){
    let navbar = props.items
    
    return(
        <ul className={props.class}>
        {navbar.map((item, index) => (            
            <li className={props.className} key={index}><Link to={`/${item}`}>{item}</Link></li>
        ))}
         </ul>
    )
}