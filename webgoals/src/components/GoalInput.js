import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { Input } from "../../../node_modules/@material-ui/core";
import {
  ListItemSecondaryAction,
  IconButton
} from "../../../node_modules/@material-ui/core";
import AddCircle from "@material-ui/icons/Add";

const GoalInput = () => {
  return (
    <ListItem>
      <Input />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <AddCircle />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default GoalInput;
