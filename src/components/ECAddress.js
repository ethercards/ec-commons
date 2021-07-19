import React, { useEffect, useState } from 'react';
import './ECAddress.css';
import Blockies from 'react-blockies';

const  ECAddress = (props) => {
    const [acc,setAcc] = useState('-');
    const [scale,setScale] = useState(6);
    

    useEffect(()=>{
        if(props.address){
            if(props.short){
                setAcc(props.address.substr(0,6)+'...'+props.address.substr(props.address.length-4,4));
            }else{
                setAcc(props.address);
            }
        }else{
            setAcc('-');
        }

        if(props.scale){
            setScale(props.scale);
        }else{
            setScale(6);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.address, props.short, props.scale]);
    return (
        <span className="address">
            {props.blockie &&
                <Blockies seed={acc} size={6} scale={scale} className="identicon"/>
            }
            <span>{acc}</span>

        </span>
    );}
export default ECAddress;