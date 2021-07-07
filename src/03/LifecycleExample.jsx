import React from 'react';

class LifecycleExample extends React.Component {

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps 호출');
        return {};
    }

    constructor(props) {
        super(props);

        this.state = {};
        console.log('constructor 호출');
    }

    componentDidMount() {
        console.log('ComponentDidMount 호출');
        this.setState({updated : true});
    }

    componentDidUpdate() {
        console.log('componentDidUpdate 호출');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount 호출');
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate 호출');
        return {};
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate 호출');
        return true;
    }

    render() {
        console.log('render 호출');
        return null;
    }

}

export default LifecycleExample;