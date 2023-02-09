export function AboutContent(props){
    return(
        <div className="about-contentBox">
            <div className="about-contentBox_header">{props.header}</div>
            <div className="about-contentBox_content">{props.children}</div>
        </div>
    )
}