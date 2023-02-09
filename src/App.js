import {Header} from "./components/Header"
import {Main} from "./components/Main"
import { Home } from "./components/Home"
import { Footer } from "./components/Footer"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Portfolios } from "./components/Portfolios"
import { Journey } from "./components/Journey"
import { Ul } from "./components/Ul"
import { ButtonsField } from "./components/ButtonsField"

import AboutHeaderImg from "./images/Saly-10.png"
import ContactImage from "./images/Saly-14.png"

import "./App.css"
import { Blog } from "./components/Blog"
function App(){
  let items = ['Twitter: amirhwsin',"Github: amireshoon","Dribble: amireshoon","Telegram: GeekDreamer","Email: amirhwsin@outlook.com"]
  



  return(
    <>
    <Header class="navbar"/>
    <Main class="main"><Home></Home></Main>
    <Main class="main"><About image={AboutHeaderImg}></About></Main>

    <Main class="main"><Contact header="You can reach me any time🙂 " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor." image={ContactImage}>
      <Ul class="socialProfiles" items={items}></Ul>
      <ButtonsField class="buttonsField"></ButtonsField>
    </Contact></Main>

    <Main class="main"><Portfolios></Portfolios></Main>
    
    <Main class="main"><Journey></Journey></Main>
    <Main class="main"><Blog></Blog></Main>
    <Footer></Footer>
    </>
  )
}
export default App;