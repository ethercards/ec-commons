import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from './logo-in-menu.png';
import './common.css';
import './ECNav.css';
import  ECAddress  from './ECAddress';

function ECNav(props) {
    const [darkMode,setDarkMode ] = useState(true);
    const [toggleNav,setToggleNav ] = useState(false);
    const [projectBaseUrl,setProjectBaseUrl ] = useState('');
    const [withShadow, setWithShadow ] = useState(true);

    const [onboard,setOnboard] = useState(null);
    const [address,setAddress] = useState(null);

    const navRef = useRef(null);


    const lct = useLocation();
 

    function checkChild (child){
        if(child.className.includes('dropdown-item active')){
            return true;
        }else{
            if(child.children.length>0){
                for(let i=0;i<child.children.length;i++){
                    if(checkChild(child.children[i])){
                        return true;
                    }
                }
            }
            return false;
        }

    }


    useEffect(()=>{
        if(props.lightMode){
            setDarkMode(false);
        }

        if(props.onboard && onboard === null){
            setOnboard(props.onboard);
        }

        if(props.address && address!==props.address){
            setAddress(props.address);
        }

        if(props.projectUrl && projectBaseUrl!==props.projectUrl){
            setProjectBaseUrl(props.projectUrl);
        }

        if(props.disableShadow){
            setWithShadow(false);
        }

    },[props]);


    useEffect(()=>{
        if(projectBaseUrl && navRef){
            console.log('CHECKING');
            const navItems = navRef.current.children;
            for(let i=0; i<navItems.length;i++){
               if(navItems[i].className.includes("dropdown")){
                   
                    if(checkChild(navItems[i])){
                        navItems[i].children[0].className='nav-link active';
                    }else{
                        navItems[i].children[0].className='nav-link';
                    }
                } 
            }

        }

    },[projectBaseUrl,navRef,lct]);


    const handleToggleNav = () => {
        console.log(toggleNav);
        setToggleNav(toggleNav?false:true);
    }

    const handleConnect = async () => {
        if (onboard) {
            await onboard.walletSelect();
        }
    }

    const handleDisconnect = () => {
        // console.log('disconnect clicked');
        if (onboard) {
            onboard.walletReset();
            if (localStorage) {
                localStorage.removeItem('selectedWallet');
            }
            setAddress(null);
        }
    }

    const ECLink = (props) => {
        if(!props.url || projectBaseUrl===''){
            return (<a className="nav-link" href="/">ERROR:/</a>);
        }

        if(props.url.startsWith(projectBaseUrl)){
            let navLnk = props.url.replace(projectBaseUrl,'');
            return (<NavLink className={props.className?props.className:''} to={navLnk} exact>{props.label}</NavLink>);
        }

        return (<a className={props.className?props.className:''} href={props.url}>{props.label}</a>);
    }

    return <nav className={`navbar navbar-expand-lg fixed-top ${darkMode?'navbar-dark':'navbar-light'} ${withShadow?'':'no-shadow'} `}>
            <div className="container">
                <a className="navbar-brand nav-link" href="https://ether.cards"><img src={logo} alt="toolbox" /></a>
                <button className="navbar-toggler" type="button" onClick={handleToggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse ${toggleNav ? 'show' : ''} navbar-collapse text-right`} id="navbarText">
                    <ul ref={navRef} className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <ECLink className="nav-link" url="https://dust-pools.ether.cards/" label="DUST POOLS"/>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                // data-toggle="dropdown"
                                aria-expanded="false">
                                <div className="dropdown-toggle">
                                    ETHER CARDS
                                </div>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><ECLink className="dropdown-item" url="https://ether.cards/cards" label="Ether Cards"/></li>
                                <li><ECLink className="dropdown-item" url="https://explorer.ether.cards/" label="Gallery/Explorer"/></li>
                                <li><ECLink className="dropdown-item" url="https://traits.ether.cards" label="Traits"/></li>
                                <li><ECLink className="dropdown-item" url="https://ether.cards/roadmap.html" label="Roadmap"/></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                // data-toggle="dropdown"
                                aria-expanded="false">
                        
                                <div className="dropdown-toggle">
                                    DYNAMIC NFTS
                                </div>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><ECLink className="dropdown-item" url="https://ether.cards/events" label="Events"/></li>
                                <li><ECLink className="dropdown-item" url="https://bizdev.ether.cards" label="Build Collection"/></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <ECLink className="nav-link" url="https://ether.cards/newspage.html" label="NEWS" />
                        </li>



                        <li className="nav-item dropdown">
                            <a className="nav-link"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                // data-toggle="dropdown"
                                aria-expanded="false">
                                <div className="dropdown-toggle">
                                    ABOUT
                                </div>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><ECLink className="dropdown-item" url="https://ether.cards/videos" label="Video" /></li>
                                <li><ECLink className="dropdown-item" url="https://galaxisxyz.medium.com/" label="Blog"/></li>
                                <li><ECLink className="dropdown-item" url="https://docs.ether.cards/faq" label="FAQ"/></li>
                                {/* <li><ECLink className="dropdown-item" url="https://docs.ether.cards/team" label="Team"/></li> */}
                            </ul>
                        </li>
                        <li className="nav-item">

                            <ECLink className="nav-link" url="https://explorer.ether.cards/wallet" label="WALLET" />

                          {/*   <NavLink className="nav-link" to="/wallet" exact>WALLET</NavLink> */}
                           {/* <a className="nav-link" href="https://explorer.ether.cards/wallet">WALLET</a> */}
                        </li>
                        {onboard && <>
                            {address ?
                                <li className="nav-item ml-4">
                                    {/* <Address address={address} short blockie scale={3} /> */}
                                    <ECAddress address={address} short blockie scale={3} />
                                    <p className="disconnect" onClick={handleDisconnect}>disconnect</p>
                                </li>
                                :
                                <li className="nav-item ml-4">
                                    <button className="btn btn-peach btn-sm round connect-btn" onClick={handleConnect}>CONNECT</button>
                                </li>
                            }
                        </>}
                    </ul>
                </div>
            </div>
        </nav>

}

export default ECNav;