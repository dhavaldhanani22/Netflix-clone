import './Nav.css';
import { useState, useEffect } from 'react';

const Nav = () => {

    const [show, setShow] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY > 10) {
            setShow(true);
        } else setShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    return( 
    <nav style={{backgroundColor: show ? 'rgb(20,20,20)' : 'transparent',}}>
        <section>
            <div className="nav_left">
                <img 
                    className="nav_logo"
                    alt="logo"
                    src='https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png'
                />
                <div className="nav_links">
                    <a href='#'>Home</a>
                        <a href='#'>TV Shows</a>
                        <a href='#'>TV Movies</a>
                        <a href='#'>New & Popular</a>
                        <a href='#'>My List</a>
                    
                    </div>
                </div>
            <div className="nav_right">
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" 
                        fill="currentColor">
                    </path>
                </svg>
                <p>Login</p>
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="Hawkins-Icon Hawkins-Icon-Standard"
                >
                    <path fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" 
                        fill="currentColor">
                    </path>
                </svg>
                <img class="nav_avatar" 
                    src="https://occ-0-3709-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQnOnMxhb19v9lQZScL86ZpnI21__HC3fseri3xG_4k-rYBafycfVvfsw_SqXVYXJJrelgRPF-eed5E69w1GQ3rq-CxZLW0.png?r=a4b" 
                    alt="avatar"
                />
            </div>
        </section>
    </nav>
    )
}

export default Nav;