import { ImageContent } from "./imageContentBox"
import portfolioImgOne from "../images/portfolioImgBox.png"
import portfolioImgTwo from "../images/portfolioImgBox1.png"
import portfolioImgThree from "../images/portfolioImgBox2.png"
import portfolioImgFour from "../images/portfolioImgBox3.png"
import portfolioImgFive from "../images/portfolioImgBox4.png"
import portfolioImgSix from "../images/portfolioImgBox5.png"
import {Main} from "./Main"
import { useEffect } from "react"



export function Portfolios({changePage}){
    let page = "Portfolios"

    useEffect(()=>{
      changePage(page)
    },[])



    return(
        <Main class="main">
        <div className="portfolios">
            <ImageContent header="There is more than you know" image={portfolioImgOne} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nemo sapiente vitae debitis iste quo id rem fuga culpa velit!</ImageContent>
            <ImageContent header="There is more than you know" image={portfolioImgTwo} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nemo sapiente vitae debitis iste quo id rem fuga culpa velit!</ImageContent>
            <ImageContent header="There is more than you know" image={portfolioImgThree} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nemo sapiente vitae debitis iste quo id rem fuga culpa velit!</ImageContent>
            <ImageContent header="There is more than you know" image={portfolioImgFour} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nemo sapiente vitae debitis iste quo id rem fuga culpa velit!</ImageContent>
            <ImageContent header="There is more than you know" image={portfolioImgFive} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nemo sapiente vitae debitis iste quo id rem fuga culpa velit!</ImageContent>
            <ImageContent header="There is more than you know" image={portfolioImgSix} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nemo sapiente vitae debitis iste quo id rem fuga culpa velit!</ImageContent>
        </div>
        </Main>
    )
}