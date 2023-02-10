
import { TextContent } from "./Text"
import { ButtonsField } from "./ButtonsField"
import {Main} from "./Main"
import { useEffect } from "react"


export function Home({changePage}){
    let page = "Home"

    useEffect(()=>{
      changePage(page)
    },[])

    return(
      <Main class="main">  
      
        
    <TextContent class="headerText" >Hey there 👋<br />
    I am Amirhossein</TextContent>
    <TextContent class="headerContent" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</TextContent>
    <ButtonsField class="buttonsField"/>
      
    
    </Main>
    )

}