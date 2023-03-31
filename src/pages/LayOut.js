import Page from './Page';
import { useState, useEffect } from 'react';
import './css/Layout.css'
import $ from 'jquery';

function LayOut() {

    let [page1ContentIndex, setPage1ContentIndex] = useState(1);
    let [page2ContentIndex, setPage2ContentIndex] = useState(0);
    let [resizeElementWidth, setResizeElementWidth] = useState(100);
    let [istransitioning, setIstransitioning] = useState(false);
    const PageNames = ["Header", "Intro", "Abilities", "Interest", "Contact"];

    useEffect(() => {
        if ($(".comparison-slider")[0]) {
            let compSlider = $(".comparison-slider");
        
            //let's loop through the sliders and initialise each of them
            compSlider.each(function() {
                drags($(this).find(".divider"), $(this).find(".resize"), $(this));
            });
    
            //if the user resizes the windows lets update our variables and resize our images
            // $(window).on("resize", function() {
            //     let compSliderWidth = compSlider.width() + "px";
            //     compSlider.find(".resize img").css({ width: compSliderWidth });
            // });
        }}
    )
    
    function drags(dragElement, resizeElement, container) {
        function sweep (e) {
            console.log("click")
            if(istransitioning || $(this).attr('id') === 'd'+page2ContentIndex) return;
            setIstransitioning(true)
            document.querySelectorAll(".divider").forEach((item)=>{item.removeEventListener("click", sweep)})
            //add classes to the emelents - good for css animations if you need it to
            let newestpage1value = page1ContentIndex;
            for(let i=0;i<=2;i++){
                if($(this).attr("id") === "d"+i){
                    setPage1ContentIndex(i)
                    newestpage1value = i;
                }
            }
            

            $(this).addClass("draggable");
            resizeElement.addClass("resizable");
            if(page2ContentIndex === 1){
                $("#introheader").css("width", 0);
                $("#introheader .inner").css("opacity", 0);
            }
            $(".resizable").css("width", 0);
            $(".draggable").css("left", 0);
            setResizeElementWidth(0);

            
            
            setTimeout(()=>{
                $(".draggable").css("left", "100%");
                $("#introheader").css("width", "30%");
                $("#introheader .inner").css("opacity", 1);
                
                setPage2ContentIndex(newestpage1value);
                setPage1ContentIndex(0);
                setResizeElementWidth(100)
                setTimeout(()=>{
                    $(this).removeClass("draggable");
                    setIstransitioning(false)
                },1200)}
            ,1500) 
            setTimeout(()=>resizeElement.removeClass("resizable"),1200) 
        }
        // clicp the image and move the slider on interaction with the mouse or the touch input
        document.querySelectorAll(".divider").forEach((item)=>{item.addEventListener("click", sweep)})
    }
    let divider_map_arr = [0,1,2,3,4]
    
    return (
        <div className="container">
            <div className="inner">
                <div className="comparison-slider-wrapper">
                    
                    <div className="comparison-slider">
                        <div className='nextview'>
                            <Page pageContentIndex={page1ContentIndex} load={false}/>
                        </div>
                        <div className="resize mainview" style={{"width": resizeElementWidth+"%"}}>
                            <Page pageContentIndex={page2ContentIndex} load={true}/>
                        </div>
                        {
                            divider_map_arr.map((item)=>{
                                return (
                                <div 
                                    onMouseOver={(e)=>$(e.target).addClass("showCategory")} 
                                    onMouseOut={(e)=>$(e.target).removeClass("showCategory")} 
                                    key={item} 
                                    id={'d'+item} 
                                    className={"divider" + (page2ContentIndex===item && false?" disableSwipe":"")}
                                    style={{"zIndex": 4,"--type":(100/(divider_map_arr.length+1)*(item+1))+"vh", "--dotMove":100-resizeElementWidth}}>
                                        <span className="hint" style={{"--type":(100/(divider_map_arr.length+1)*(item+1))+"vh"}}>{PageNames[item]}</span>
                                </div>)
                            })
                        }
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default LayOut