import React from 'react';
import '../styles/sync.css'

import WithMessage from '../hocs/withMessage';
import WithAppLayout from '../layouts/appLayout'

const Sync = () => {
    return (
        <>
            Sync page is work!
        </>
    )
}

export default WithMessage(WithAppLayout(Sync))