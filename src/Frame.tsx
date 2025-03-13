import React from 'react'
import Header from './UIcomponents/Header';
import Menu from './UIcomponents/Menu';

interface FrameProps {
    children: React.ReactNode;
  }
const Frame: React.FC<FrameProps> = ({children}) => {
    return (
        <div>
            <Header/>
            <Menu/>            
               {children}
        </div>
     
    )
}

export default Frame
