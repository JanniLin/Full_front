import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";

import { SideBlock } from "./SideBlock";
import { Link } from "react-router-dom";
import _ from "lodash";

export const TagsBlock = ({ items, isLoading = true }) => {
  const uniqTags = _.uniq(_.flatten(items));
  return (
    <SideBlock title="Тэги">
      <List>
        {uniqTags.map((name, i) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/tags/${name}`}
          >
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>

                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </SideBlock>
  );
};
