import { useState } from "react"
import Task from "./Task"
import Button from "@mui/material/Button";



interface Task {
    name : string;
    time?: Date;
    //done : boolean;
}

export default function Pool() {
    const [tasks, setTask] = useState<Task[]>([]);
    return <>
    <Button onClick={() => {
        
        setTask(tasks.concat([{name : "Task"}]));
    }}> 
    Add
    </Button> 
    {tasks.map(task => <Task name = {task.name}/>)}
    </>

}

