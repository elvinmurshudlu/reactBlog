import {Ul} from "./Ul"
import { useState } from "react"
import menu from "../images/menu.svg"

export function Header(props){
    let navBar = ["Home","About","Contact","Portfolios","Journey","Blog"]
    
    let [mobileMenuOpened,opener] = useState(false)
    function openMenu(){
        opener(!mobileMenuOpened)
        console.log(mobileMenuOpened)
    }   


    return(
     <nav className={props.class} ><Ul   items={navBar} class= "navbarMenu"/><span className="currentPage">{props.currentPage}</span><div onClick={openMenu} className="mobileMenu"><img src={menu} alt="" /></div>
     <div className="mobileMenuNav" style={{height:mobileMenuOpened ? "150px" : "0px"}}>
        <Ul  items={navBar} class="mobileMenuUlDesign"></Ul>
     </div>
     </nav>


    )
}