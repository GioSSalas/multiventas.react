import React, {useState,useEffect} from 'react'

export const CSSeffect = ({children, action, classNames, duration=1000, startDelay=0}) => {

    const [css,setCss]=useState(classNames+'-enter')

    
    useEffect(()=>{
        setTimeout(()=>{
            if(action){
                //setCss(classNames+'-enter')
                setTimeout(()=>{
                    if(css!==classNames+"-enter "+classNames+"-enter-active")
                    {setCss(css+" "+classNames+"-enter-active")}
                },duration)
            }
            else{
                setCss("")
                setTimeout(()=>{
                    if(css!==classNames+"-exit "+classNames+"-exit-active")
                    {setCss(css+" "+classNames+"-exit-active")}
                },duration)
            }
        },startDelay)
    })

    return (<div className={css}>{children}</div>)
}