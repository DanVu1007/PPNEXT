import Sidebar from "~/components/Layout/DefaultLayout/Sidebar";
import Header from "~/components/Layout/components/Header";

import React from 'react';
import PropTypes from 'prop-types';

DefaultLayout.propTypes = {
    
};

function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;