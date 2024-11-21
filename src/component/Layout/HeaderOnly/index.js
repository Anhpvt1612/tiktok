import React from 'react';
import Header from '~/component/Layout/components/Header';

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
