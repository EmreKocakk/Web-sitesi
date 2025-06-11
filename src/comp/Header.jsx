import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        setAnimation("basla");
    }, []);

    function handleScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 0,
            behavior: "smooth",
        });
    }
}

    return (
        <div className={`header ${animation}`}>
            <nav>
                <ul>
                    <li>
                        <Link className='homepage' to="/">Anasayfa</Link>
                    </li>
                    <li>
                        <a href="#ilceler" onClick={(e) => handleScroll(e, "#ilceler")}>
                            İlçeler
                        </a>
                    </li>
                    <li>
                        <a href="#tarihi" onClick={(e) => handleScroll(e, "#tarihi")}>
                            Tarihi
                        </a>
                    </li>
                    <li>
                        <a href="#hakkında" onClick={(e) => handleScroll(e, "#hakkında")}>
                            Hakkında
                        </a>
                    </li>
                    <li>
                        <Link className="hava-durumu" to="/weather">
                            Hava Durumu
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="header-text">
                <h1>BURSA</h1>
            </div>
        </div>
    );
}



export default Header;