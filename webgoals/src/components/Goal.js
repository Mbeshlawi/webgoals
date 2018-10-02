import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  ListItemSecondaryAction,
  IconButton
} from "../../../node_modules/@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Goal = () => {
  return (
    <ListItem>
      <ListItemText primary="Goal" />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Goal;
