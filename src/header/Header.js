import { useState, useEffect } from 'react';
import Bg from './Bg';

function Header({load}) {
    let [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if(load) setTimeout(() => {setLoaded(true);}, 500);
    },[load]);
    return (
        <div className={loaded ? "Header" : "Header is-preload"}>
            <div className='headerWrapper'>
                <header id="header">
                    <div className="logo">
                        <span className="icon fa-gem"></span>
                    </div>
                    <div className="content">
                        <div className="inner">
                            <h1>Welcome to Andrew's Page</h1>
                            <p>一個機械程式工院人的小天地<br />
                                我的作品與努力都會記錄在這裡<br />
                                可以直接點右側的選單喔~~</p>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#intro">Intro</a></li>
                            <li><a href="#abilities">Abilities</a></li>
                            <li><a href="#interest">interest</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
            <Bg />
        </div>
    );
}

export default Header;