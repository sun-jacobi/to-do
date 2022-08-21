import { useState } from "react"
import Item from "./Item"
import Button from "@mui/material/Button";

import { useAppSelector, useAppDispatch } from '../app/hooks'
import {addTask} from '../app/taskSlice';
import List from '@mui/material/List';

export default function Pool() {
    const taskList = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    return (<List>
    {taskList.map((item) => <Item item = {item}></Item>)}
    </List>);
}

