import * as React from 'react'
import {Home,User} from 'lucide-react';
import {motion} from 'framer-motion';
import type {JSX} from "react";


const HEADER_TITLE:{title:string, icon:React.ElementType}[] = [
    {title:"Home", icon:Home},
    {title:"User", icon:User}
];

const TopBar: React.FC = () => {
    return (
        <div className="flex border-b border-gray-500  bg-opacity-70 shadow-lg select-none bg-thisara-start w-full h-12 z-10">
            {HEADER_TITLE.map((item: { title:string, icon:React.ElementType }, index: number):JSX.Element => {
                return <motion.button
                    key={index}
                    whileHover={{backgroundColor:"#525d9c"}}
                    transition={{duration:0.3}}
                    className="flex flex-row flex-1 justify-center items-center space-x-2 p-2 bg-thisara-start">
                    <item.icon size={28} style={{color:'white'}}/>
                    <span className="text-white uppercase">{item.title}</span>
                </motion.button>
            })}
        </div>
    )
}

export default TopBar;