import { ButtonsField } from "./ButtonsField"
import { Ul } from "./Ul"
export function Contact(props){
    return(
        <div className="contact">
            <div className="contact_image">
                <img src={props.image} />
            </div>
            <div className="contact_content">
                <div className="contact_content-header">{props.header}</div>
                <div className="contact_content-text">{props.text}</div>
                {props?.children}
            </div>
        </div>
    )
}