import { Contact } from "./Contact"
import AboutHeaderImg from "../images/Saly-10.png"
import { TimeLine } from "./TimeLine"

export function Journey(){
    return(
        <div className="journey">
            <div className="journey_header">
                <Contact image={AboutHeaderImg} header="The resolution, What am I gonna do?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"></Contact>
                <p id="JourneyText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro vitae, quibusdam exercitationem placeat architecto blanditiis quam ullam velit aut officiis, nemo reprehenderit labore sapiente repudiandae tempora hic aspernatur ipsa adipisci officia doloribus? Aut neque placeat saepe, voluptatem vero ipsam minima libero aspernatur iure doloremque explicabo deleniti ipsa aperiam! Ratione aliquid facilis voluptatum non obcaecati neque laudantium temporibus sunt aperiam? Consectetur aperiam blanditiis sapiente ullam qui porro officia obcaecati, assumenda autem, pariatur perferendis minima eos, nam quisquam! Iste rem, voluptate beatae possimus explicabo dolore tempora vel eaque mollitia voluptatum, sunt atque? Quidem tenetur necessitatibus nam. Fugiat laborum optio ea voluptatibus, illum odio quasi cumque, numquam, autem at eaque quaerat. Est, deserunt? Ullam laboriosam placeat vitae facere mollitia. Neque sit beatae enim cum eius nulla, nemo mollitia fugiat. Asperiores quas sint veniam eveniet maxime ex possimus repellendus? Cupiditate facilis, excepturi laudantium quo incidunt similique pariatur eligendi numquam voluptas ipsam alias maiores eius. Deleniti, quisquam animi aspernatur praesentium nam quasi ratione consequatur ullam voluptas dolores aliquam autem. Sed, ea aliquam. Provident porro quidem recusandae nisi veritatis doloremque saepe totam modi eos temporibus in sunt, magnam eligendi, corrupti et tenetur? Sapiente mollitia quia sed obcaecati dicta nam optio architecto ipsum nostrum maxime aliquam nulla pariatur doloremque voluptatibus, iusto ducimus ipsa minus aut quaerat saepe! Natus quidem ea aperiam, dolorum placeat ut alias quaerat temporibus reiciendis beatae quas cum explicabo eum deleniti, vitae incidunt aliquid? Quam laboriosam maiores sapiente sint aliquam tenetur, in, vitae illo eos reprehenderit eum provident quos ipsa! Asperiores voluptatibus officiis fugit possimus omnis molestias, dicta necessitatibus mollitia eveniet nihil excepturi atque minus! Unde deserunt, consequatur sunt eligendi officiis suscipit similique, voluptas architecto veritatis fuga exercitationem, nulla omnis facere repudiandae rem rerum praesentium! Voluptatum ab perferendis exercitationem tenetur animi illum sapiente laudantium iure facere facilis a, tempore sunt eaque debitis non eveniet?</p>
            </div>
            <div className="journey_nav">
                <TimeLine></TimeLine>
            </div>
        </div>
    )
}