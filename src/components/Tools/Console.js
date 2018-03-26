import React, {Component} from 'react';
import classNames from 'classnames';

const STATUS_TO_TEXT = {
    'finished': '',
    'running': 'Running, please wait...',
    'error': 'Unknow error, please retry'
};

const Output = ({type, title, content}) => (
    <div className={type}>
        <div className={'title'}>{title}</div>
        <div className={'content'}>{content}</div>
    </div>
);

class Console extends Component {

    handleChange = e => {
        this.props.onInputChange(e.target.value)
    }

    componentDidUpdate () {
        this.refs.status.scrollIntoView();
    }

    render() {
        const {side, input, outputs, status} = this.props;

        return (
            <div className={classNames('console', {active: side})}>
                <div className="output">
                    {outputs.map((item, index) => (
                        <Output key={`output-${index}`} {...item} />
                    ))}
                    <div className={status} ref="status">{STATUS_TO_TEXT[status]}</div>
                </div>
                <textarea value={input} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Console;
