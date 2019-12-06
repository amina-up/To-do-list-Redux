import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask, completeTask, editerTask } from "../../actions/Actions";
import "./add.css";
import Mmodal from "../../components/modal/Modal";
import { Button } from "reactstrap";

const ListItem = props => {
  return (
    <div>
      {props.items.map(el => (
        <div key={el.key} className="tasks">
          <Mmodal todo={el} />
          <Button
            className="btn"
            outline
            color="success"
            onClick={e => {
              e.preventDefault();
              props.completeTask(el.key);
            }}
          >
            {el.checked ? "undo" : "complete"}
          </Button>

          <Button
            className="btn"
            outline
            color="danger"
            onClick={() => props.deleteTask(el.key)}
          >
            Delete
          </Button>

          <p className={el.checked ? "checked" : "text-client"}>{el.text}</p>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = { deleteTask, completeTask, editerTask };

const mapStateToProps = state => {
  return { items: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
