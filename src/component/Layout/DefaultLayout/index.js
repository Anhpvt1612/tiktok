import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
const index = ({children}) => {
    return (
        <div>
            <Header />
            <div>
                <SideBar />
                <div className='content'>{children}</div>
            </div>
        </div>
    );
};

export default index;
