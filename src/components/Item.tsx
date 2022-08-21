import {Task} from "../app/taskSlice";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import { useState } from "react";
import React from "react";
import {BiTrashAlt} from 'react-icons/bi';
import {MdOutlineExpandMore} from 'react-icons/md';
import { List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import IconButton from '@mui/material/IconButton';

import { removeTask } from "../app/taskSlice";

import { useAppDispatch, useAppSelector } from "../app/hooks";

function Item ({item} : {item :Task}) {
    const [open, setOpen] = React.useState(false);
    const taskList = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        setOpen(!open);
    };

    return  (
        <div className="item">
            <ListItem secondaryAction={
            <>
            <Checkbox/>
        <IconButton edge="end" onClick={() => {dispatch(removeTask(item))}}>
            <BiTrashAlt size={20}/>
        </IconButton>
        </>
        } disablePadding>
            <ListItemButton dense>
        <ListItemText onClick={handleClick}> {item.name}</ListItemText>
        </ListItemButton>
        </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
            <ListItemText sx = {{textAlign:"left", padding : "20px"}}>
                {item.note}
            </ListItemText>
      </Collapse>
    </div>);
};

export default Item;
