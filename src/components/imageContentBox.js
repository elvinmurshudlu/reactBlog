export function ImageContent(props){
    return(
        <div className="imageBox" >
            <div className="imageBox-image">
                <img src={props.image} />
            </div>
            <div className="imageBox-content">
                <div className="imageBox-content_main">
                    
                <div className="imageBox-content_main_header">{props.header}</div>
                <div className="imageBox-content_main_text">{props.children}</div>
                </div>
                <div className="imageBox-content_more">Read more</div>
            </div>
        </div>
    )
}