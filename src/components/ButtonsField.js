import {Button} from "./Button"

export function ButtonsField(props){
    return(
        <div className={props.class}>
            <Button class="about">About me</Button>
            <Button class="lets">Let's portfolios</Button>

        </div>
    )
}