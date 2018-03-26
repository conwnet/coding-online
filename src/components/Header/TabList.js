import React, {PureComponent} from 'react';
import classNames from 'classnames';

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

export default TabList;
