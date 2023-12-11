import Header from "~/components/Layout/components/Header";

import React from 'react';
import PropTypes from 'prop-types';

HeaderOnly.propTypes = {
    
};

function HeaderOnly({children}) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default HeaderOnly;