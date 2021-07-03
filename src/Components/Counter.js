import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        };

        this.increaseCount = this.increaseCount.bind(this);
        this.defaultCount = this.defaultCount.bind(this);
    }

    increaseCount() {

        this.setState(({count}) => ({
            count : count + 1,
        }));
    }

    defaultCount() {

        this.setState(({count}) => ({
            count : 0,
        }));
    }

    render() {
        return (
            <div>
                <span>카운트 : {this.state.count} </span>
                <hr/>
                <button onClick={this.increaseCount}>카운트 증가</button>
                <br/>
                <button onClick={this.defaultCount}>카운트 초기화</button>
            </div>
        );
    }
}

export default Counter;