export function UlPage(props){
    let navbar = props.items
    
    return(
        <ul className={props.class}>
        {navbar.map((item, index) => (            
            <li className={props.className} key={index}>{item}</li>
        ))}
         </ul>
    )
}