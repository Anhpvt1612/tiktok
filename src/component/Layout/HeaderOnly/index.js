import React from 'react';
import Header from './Header';

const index = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <div className='content'>{children}</div>
            </div>
        </div>
    );
};

export default index;
