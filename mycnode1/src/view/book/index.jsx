import React from "react";

class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    console.log(window.location);
    // console.log("aa1", a);
    // let aa1 = 3;
    // var aa = 2;
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log("test callback", this.state.count);
      }
    );
    this.setState(prevSate => {
      prevSate.count += 1;
      console.log("test callback1", prevSate.count);
    });
    console.log("test", this.state.count);
    // window.location.href = "https://ant.design/components/dropdown-cn/";
    // window.location.pathname = "about";
  }
  render() {
    return (
      <div>
        <div>教材</div>
      </div>
    );
  }
}

export default Book;
