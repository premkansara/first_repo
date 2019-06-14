import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          <button
            onClick={this.props.delButton.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
          {title}
        </p>
      </div>
    );
  }
}

//ProTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delButton: PropTypes.func.isRequired
};

const btnStyle = {
  background: "red",
  color: "white",
  border: "none",
  padding: "3px 6px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
