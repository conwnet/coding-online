import React, {PureComponent} from 'react';
import classNames from 'classnames';
import './styles.css';

const languages = [
    {
        name: 'C',
        value: 'c'
    },
    {
        name: 'C++',
        value: 'cpp'
    },
    {
        name: 'Java',
        value: 'java'
    },
    {
        name: 'Python',
        value: 'python'
    },
    {
        name: 'Python3',
        value: 'python3'
    },
    {
        name: 'JavaScript',
        value: 'javascript'
    },
    {
        name: 'Go',
        value: 'golang'
    },
    {
        name: 'Kotlin',
        value: 'kotlin'
    },
    {
        name: 'Swift',
        value: 'swift'
    },
    {
        name: 'Ruby',
        value: 'ruby'
    },
    {
        name: 'C#',
        value: 'csharp'
    },
    {
        name: 'Scala',
        value: 'scala'
    }
];

class Tab extends PureComponent {
    handleClick = () => {
        const {onClick, value} = this.props;
        onClick(value);
    }

    render() {
        const {active, name} = this.props;
        const classes = classNames('tab', {active});
        return (<span className={classes} onClick={this.handleClick}>{name}</span>);
    }
}

const TabList = ({value, onChange, ...rest}) => (
    <div {...rest}>
        {languages.map(lang => (
            <Tab key={lang.name} active={lang.value === value} onClick={onChange} {...lang} />
        ))}
    </div>
);

const RunButton = ({onClick}) => (
    <button className="button" onClick={onClick}>Run</button>
);

const Header = ({value, onLanguageChange, onCodeRun}) => (
    <div className="header">
        <TabList className="tab-list" onChange={onLanguageChange} value={value} />
        <RunButton onClick={onCodeRun} />
    </div>
);

export default Header;
