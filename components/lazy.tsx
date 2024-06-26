import {Component, ReactNode} from "react";

class Lazy<T> extends Component<Lazy.Props<T>, Lazy.State<T>> {
    state: Lazy.State<T> = {
        value: null
    };

    componentDidMount() {
        this.props.promise.then(value => this.setState({value}));
    }

    render() {
        return this.props.children(this.state.value);
    }
}

declare namespace Lazy {
    export type Props<T> = {
        promise: Promise<T>; 
        children: (value: T | null) => ReactNode;
    };

    export type State<T> = {
        value: T | null;
    };
}

export default Lazy;