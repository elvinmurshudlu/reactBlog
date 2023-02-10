import { ButtonsField } from "./ButtonsField"
import { UlPage } from "./ULPage"
import "../App.css"
import ContactImage from "../images/Saly-14.png"
import { Main } from "./Main"
import { useEffect } from "react"


export function Contact(props){

  let items = ['Twitter: amirhwsin',"Github: amireshoon","Dribble: amireshoon","Telegram: GeekDreamer","Email: amirhwsin@outlook.com"]
  let header="You can reach me any time🙂 "
  let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
   
  let page = "Contact"

  useEffect(()=>{
    console.log("Contact")
    if(props?.main == "true"){
         props?.changePage(page)

    }
},[])


  return(
        <Main class="main">

        <div className="contact">
            <div className="contact_image">
                <img src={ContactImage} />
            </div>
            <div className="contact_content">
                <div className="contact_content-header">{header}</div>
                <div className="contact_content-text">{text}</div>
                <UlPage class="socialProfiles" items={items}></UlPage>
                <ButtonsField class="buttonsField"></ButtonsField>
            </div>
        </div>
        </Main>
    )
}