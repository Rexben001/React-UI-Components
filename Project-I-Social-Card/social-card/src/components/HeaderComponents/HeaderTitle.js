import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => (
    <div className="HeaderTitle">
        <p><strong>Lambda School </strong> <span>@LambdaSchool . {moment().format('Do MMM')}</span></p>
    </div>
    );

export default HeaderTitle;
