import React, { Component, Fragment } from "react";
import MemoComponents from "./MemoComponents";

interface PropsTypes {
  name?: string;
}

interface StateTypes {
  name?: string;
}

class ParentMemo extends Component<PropsTypes, StateTypes> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "Malik",
    };
  }

  componentDidMount(): void {
    setInterval(() => {
      this.setState({
        name: "Malik",
      });
    }, 2000);
  }

  render() {
    console.log("*******ParentComponentP Rendered*******");
    return (
      <Fragment>
        <div>ParentComponent For Memo</div>
        <MemoComponents name={this.state.name} />
      </Fragment>
    );
  }
}

export default ParentMemo;
