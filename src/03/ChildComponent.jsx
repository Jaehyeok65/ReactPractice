import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ChildComponent extends Component {

    render() {
        const {
            objValue,
            requiredStringValue,
        } = this.props;
    

    return (
        <div>
        <div>객체값 : {String(Object.entries(objValue))}</div>
        <div>필수값 : {requiredStringValue}</div>
        </div>
    );
}
}

ChildComponent.propTypes = {

    objValue : PropTypes.shape({
        name : PropTypes.string,
        age : PropTypes.number,
    }),

    requiredStringValue : PropTypes.string.isRequired,
}

export default ChildComponent;