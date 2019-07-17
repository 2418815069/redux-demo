import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "lf",
      pwd: ""
    };
  }
  handleNameChange = e => {
    console.log(e);
    this.setState(
      {
        name: e.target.value
      },
      () => {
        console.log(this.state.name);
      }
    );
  };
  handlePwdChange = e => {
    console.log(e);
  };
  login = e => {
    alert("33");
  };
  render() {
    return (
      <div>
        <div>关于</div>
        <form action="#" method="get" onSubmit={this.login}>
          用户名:{this.state.name}
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          &nbsp; 密码: <input type="password" onChange={this.handlePwdChange} />
          &nbsp;
          <button>登陆</button>
        </form>
      </div>
    );
  }
}

export default About;
