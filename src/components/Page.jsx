import {
    React,
    useEffect,
} from "react"
import {useLocation} from "wouter";
import { onMouseHover, onMouseHoverOut } from '../scripts/cursor';

export default function Content(props){

    const [location, setLocation] = useLocation();

    // Hover effects for custom pointer 
    useEffect(() => {

        document.title =  `Simone Guarneri - ${props.pageTitle}`; 

        Array.from(document.getElementsByClassName("hoverable")).forEach((e) => {
            e.addEventListener("mouseover", onMouseHover);
            e.addEventListener("mouseout", onMouseHoverOut);
        })

    }, [])

    return(

        <div className="contentDiv">

            {
                //Div for the animation on scrolling
            }
            <div className="scrollAnimation" style={{background: props.pageColor}}></div>

            <div className="contentAnimation">
                {
                    //Title and main text
                }
                <div id="textDiv">
                    <h1 className="pageTitle">{props.pageTitle}</h1>
                    <h1 className="pageText">{props.pageText}</h1>

                </div>

                {   
                    //If there are skills
                    props.skills &&
                    <ul className="list skillsList" >
                        <li className="hoverable">{props.skills[0]}</li>
                        <li className="hoverable">{props.skills[1]}</li>
                        <li className="hoverable">{props.skills[2]}</li>
                        <li id="listUnderText">Main skills</li>
                    </ul>
                }
                
                {
                    
                    //If there are projects
                    props.projects &&
                    <ul className="list projectList">
                        <li className="hoverable">{props.projects[0]}</li>
                        <li className="hoverable">{props.projects[1]}</li>
                        <li className="hoverable">{props.projects[2]}</li>
                        <li id="listUnderText">Projects</li>
                    </ul>
                }


                {
                    //If there is a next page
                    props.next &&
                    <div className="triangle" onClick={() => setLocation(`/${props.next}`)}>
                        <img className="hoverable" src="./assets/Triangle.svg" alt="v" />
                    </div>
                }

                {
                    //If there is a the photo
                    props.photo && 
                        <ul className="list skillsList" >
                            <li className="imageLi"> <img src="./assets/image.png" alt="me" /></li>
                            <li id="listUnderText" >Me</li>
                        </ul>
                }
                {
                    //Buttons to mail and CV
                    props.photo && 
                        <ul className="list contactsList">
                            <li className="listButton"><a  href="mailto:simone.guarneri.s@gmail.com">@</a></li>
                            <li className="listButton"><a  href="./assets/image.png" download>CV</a></li>
                            <li id="listUnderText">Send me a mail or
                            download my resume</li>
                        </ul>
                }

                {/* ICONS  */}
                <ul className="icons">
                    <li>
                        <a href="https://github.com/SimoneGuarneri" target="_blank">
                            <img className="hoverable" src="./assets/Github.svg" alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/SimoneGuarneri" target="_blank">
                            <img className="hoverable" src="./assets/Behance.svg" alt="Behance" />
                        </a>
                    </li>
                </ul>  

                {
                    //SVG animation
                }
                <div id="lineDiv">
                        <svg width={props.svg.width} height={props.svg.height} viewBox={props.svg.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="lineBehind" d={props.svg.d} stroke={props.pageColor} strokeOpacity="0.4" strokeWidth="5"/>
                        </svg>
                </div>

            </div>
            
        </div>

    );
}