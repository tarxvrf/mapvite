import React from 'react'
import Header from './Header';
import Menu from './Menu';

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
