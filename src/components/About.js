import { AboutContent } from "../pageParts/AboutContent"

export function About(props){
    return(
        <>
        <div className="about_header">
           <div className="about_header-image">
            <img src={props?.image}></img>
            </div> 
           <div className="about_header-content">I’m Amirhossein Meydani
A Backend and Android Programmer and UI/UX Designer</div> 
        </div>
        <AboutContent header={<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, a.</p>}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam consequatur quos aspernatur sequi. Dolore quas debitis itaque ratione fugit, commodi incidunt laboriosam expedita autem molestiae pariatur voluptatum voluptates eligendi magni odit amet eos enim reiciendis eveniet in. Provident, molestiae nostrum! Placeat quaerat aliquam molestiae repellendus quae, aspernatur similique. Numquam tempore enim consequuntur, explicabo nobis reprehenderit molestias similique vero aut!</AboutContent>
        <AboutContent header={<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, a.</p>}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam consequatur quos aspernatur sequi. Dolore quas debitis itaque ratione fugit, commodi incidunt laboriosam expedita autem molestiae pariatur voluptatum voluptates eligendi magni odit amet eos enim reiciendis eveniet in. Provident, molestiae nostrum! Placeat quaerat aliquam molestiae repellendus quae, aspernatur similique. Numquam tempore enim consequuntur, explicabo nobis reprehenderit molestias similique vero aut!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam consequatur quos aspernatur sequi. Dolore quas debitis itaque ratione fugit, commodi incidunt laboriosam expedita autem molestiae pariatur voluptatum voluptates eligendi magni odit amet eos enim reiciendis eveniet in. Provident, molestiae nostrum! Placeat quaerat aliquam molestiae repellendus quae, aspernatur similique. Numquam tempore enim consequuntur, explicabo nobis reprehenderit molestias similique vero aut!</AboutContent>
        <AboutContent header={<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, a.</p>}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam consequatur quos aspernatur sequi. Dolore quas debitis itaque ratione fugit, commodi incidunt laboriosam expedita autem molestiae pariatur voluptatum voluptates eligendi magni odit amet eos enim reiciendis eveniet in. Provident, molestiae nostrum! Placeat quaerat aliquam molestiae repellendus quae, aspernatur similique. Numquam tempore enim consequuntur, explicabo nobis reprehenderit molestias similique vero aut!</AboutContent>
        
        </>

    )
}