import {Ul} from "./Ul"

export function Header(props){
    let navBar = ["Home","About","Contact","Portfolios","Journey","Blog"]

    return(
     <nav className={props.class}><Ul navbar={navBar} class= "navbarMenu"/></nav>

    )
}