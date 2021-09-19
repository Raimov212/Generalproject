import React, { Component } from "react";
import Reset from "./edit.jsx";
import "./Render.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: true,
      isActive: "Uyga vazifalar",
    };
  }
  render() {
    const change = (value) => {
      this.setState({ isActive: value });
    };
    return (
      <div>
        {/* {this.state.islogin ? (<h1>Hello</h1>):(<h1>By</h1>)}
                <button onClick={()=>this.setState({islogin : !this.state.islogin})}>submit</button> */}
        <div className="container">
          <div
            onClick={() => change("1-dars")}
            className={this.state.isActive == "1-dars" ? "item" : "tab"}
          >
            table
          </div>
          <div
            onClick={() => change("bugun")}
            className={this.state.isActive == "bugun" ? "item" : "tab"}
          >
            bugun
          </div>
          <div
            onClick={() => change("ertaga")}
            className={this.state.isActive == "ertaga" ? "item" : "tab"}
          >
            ertaga
          </div>
          <div
            onClick={() => change("indin")}
            className={this.state.isActive == "indin" ? "item" : "tab"}
          >
            indin
          </div>
        </div>
        <h1>{this.state.isActive}</h1>
        {this.state.isActive == "1-dars" && <Reset />}
        {/* {this.state.isActive == '2-dars' && } */}
        {/* {this.state.isActive == 'ertaga' && <h1>ertaga</h1>} */}
        {/* {this.state.isActive == 'indin' && <h1>indin</h1>} */}
      </div>
    );
  }
}
