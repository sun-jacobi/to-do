import React from "react";
import { Button, Drawer } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react"

function Bar() {

    const [open, SetOpen] = useState(true);

    return (

        <React.Fragment>
            <Button onClick={() => SetOpen(true)}> Click</Button>
            <Drawer
                anchor={'left'}
                open={open}>
                <TextField id="outlined-basic"
                    label="Name" variant="outlined" />
                <TextField
                    id="outlined-multiline-static"
                    label="Note"
                    multiline
                    rows={6}
                    defaultValue="Default Value"
                />
                <Button> Done</Button>
                <Button onClick={() => { SetOpen(false) }}> Cancel</Button>
            </Drawer>
        </React.Fragment>);
};

export default Bar;