import { Component } from "react";

class UserInfo extends Component{
    constructor() {
        super();
        this.state = {
            name: 'Alice bob',
            age: 26
        }
    }
    componentDidMount() {
        console.log("UserInfo component mounted");
    }
    componentDidUpdate() {
        console.log("UserInfo component updated");
    }
    componentWillUnmount() {
        console.log("UserInfo component will unmount");
    }
    
    render() {
        return (
            <div>
                <h1>
                    Name: {this.state.name}
                </h1>
                <p>Age: {this.state.age}</p>
            </div>
        );
    }
}

export default UserInfo;