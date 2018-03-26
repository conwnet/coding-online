import React, {Component} from 'react';
import Switcher from './Switcher';
import Console from './Console';
import './styles.css';

class Tools extends Component {

    render() {
        const {side, input, outputs, status, onSideChange, onInputChange} = this.props;

        return (
            <div className="tools">
                <div className="switchers">
                    <Switcher onClick={onSideChange} type="console" active={side} />
                </div>
                <Console
                    side={side}
                    input={input}
                    status={status}
                    outputs={outputs} 
                    onInputChange={onInputChange}
                />
            </div>
        );
    }
}

export default Tools;
