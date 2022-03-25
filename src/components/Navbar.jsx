import {
    React,
    useEffect,
} from 'react';
import {
    Link
} from 'wouter'
import { onMouseHover, onMouseHoverOut } from '../scripts/cursor';


export default function Navbar(props){
    
    // Hover effects for custom pointer 
    useEffect(() => {

        Array.from(document.getElementsByClassName("hoverable")).forEach((e) => {
            e.addEventListener("mouseover", onMouseHover);
            e.addEventListener("mouseout", onMouseHoverOut);
        })

    }, [])

    return(

            <div className="navbar">
                
                <Link  href='/' onClick={() => props.setBold("")}>
                    <div className="hoverable" id="blackSquare">
                        <h1 id="navbarName">Simone Guarneri</h1>
                    </div>
                </Link>

                <ul id="navbarMenu">
                    <li className="hoverable" onClick={() => props.setBold("code")}>
                        <Link href='/code'>
                            {
                                props.bold == "code" ? <b>Code</b> : "Code" 
                            }
                        </Link>
                    </li>

                    <li className="hoverable" onClick={() => props.setBold("design")}>
                        <Link href='/design'>
                            {
                                props.bold == "design" ? <b>Design</b> : "Design"
                            }
                        </Link>
                    </li>
                    
                    <li className="hoverable" onClick={() => props.setBold("about")}>
                        <Link href='/about'>
                            {
                                props.bold == "about" ? <b>About</b> : "About"
                            }
                        </Link>
                    </li>
                </ul>
            </div>

    );
}