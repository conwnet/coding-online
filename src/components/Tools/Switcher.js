import React, {PureComponent} from 'react';
import classNames from 'classnames';

class Switcher extends PureComponent {

    handleClick = () => {
        const {onClick, active} = this.props;
        onClick(!active);
    }
    
    render() {
        const {active, type} = this.props;

        return (
            <span className={classNames('switcher', {active})} onClick={this.handleClick}>
                <i className={classNames('icon', `i-${type}`)} />
            </span>
        );
    }
}

export default Switcher;
