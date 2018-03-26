import React from 'react';
import TabList from './TabList';
import './styles.css';

const Header = ({value, onLanguageChange, onCodeRun}) => (
    <div className="header">
        <TabList className="tab-list" onChange={onLanguageChange} value={value} />
        <button className="button" onClick={onCodeRun}>Run</button>
    </div>
);

export default Header;
