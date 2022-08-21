import React from "react";
import { Button, Drawer } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState, useContext } from "react"
import styled from "styled-components";
import {AiOutlineSwapRight} from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addTask } from "../app/taskSlice";
import AddIcon from '@mui/icons-material/Add';


const StyledButton = styled(Button)`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border-style: solid;
`;

const StyledText = styled(TextField)`
    width: 80%;
    box-shadow: #1f8d8d 10px 10px 8px;
`;

function Bar() {
    const [open, SetOpen] = useState(true);
    const taskList = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    const [name, SetName] = useState("");
    const [note, SetNote] = useState("");


    return (
        <React.Fragment>
            <StyledButton onClick={() => SetOpen(true)} 
            sx = {{color : 'black', backgroundColor: 'black', borderColor: 'black'}}
            >
            <AddIcon style={{color : "white"}}/>
            </StyledButton>
            <Drawer  anchor={'left'} open={open}>
            <div className="bar">
                <StyledText id="outlined-basic"
                label="Name" variant="outlined" 
                onChange = {e => SetName(e.target.value)}/>
                <StyledText id="outlined-multiline-static"
                    label="Note" multiline rows={6}
                onChange = {e => SetNote(e.target.value)}
                    />
            <StyledButton>
            <BsFillBagCheckFill size={30}  style={{color : "Black"}}
            onClick = {() => {
                SetOpen(false);
                dispatch(addTask({name, note, key : taskList.length}));
            }}/>
            </StyledButton>
            <StyledButton onClick={() => { SetOpen(false) }}>
                 <AiOutlineSwapRight size={30} style={{color : "Black"}}/></StyledButton>    
            </div>
            </Drawer>
           </React.Fragment>);
};

export default Bar;