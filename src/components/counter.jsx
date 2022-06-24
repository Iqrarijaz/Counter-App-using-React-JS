import React, {Component} from 'react'
class Counter extends Component {
    state = {
        count: 1,
        tag: []
    };

    render() {

        return <div>
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondry btn-sm">Increment</button>
        </div>
    }

    handleIncrement = () => {
        console.log("clicked");
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0)
            ? "warning"
            : "primary";
        return classes;
    }

    formatCount() {
        return this.state.count === 0
            ? 'Zero'
            : this.state.count;
    }
    renderTag() {
        if (this.state.tag.length === 0) 
            return <p>There is no tags!</p>;
        return <ul>{this
                .state
                .tag
                .map(tag => <li key={tag}>{tag}</li>)}</ul>;

    }

}

export default Counter;