import { Main } from "./Main";
import { Home } from "./Home";
import "../App.css"
import { About } from "./About";
import AboutHeaderImg from "../images/Saly-10.png";

export function Homex(){

    return (
<Main class="main"><Home></Home></Main>


    )
}



// import "../App.css"
export function Aboutx (){

    return(

        <Main class="main"><About image={AboutHeaderImg}></About></Main>
    )
}