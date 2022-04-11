import { Button, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    li : {
        
        fontSize:'25px',
        fontWeight:500,
        marginLeft:80,
        display:'flex',
        alignItem:'center',
        
        textTransform:'capitalize',
      

    }
})
export default function TodoList(props){
var classes = useStyle()


    return( 
    <>
    <div>
    
        <Button color='error' variant="contained" 
        onClick={()=>{
            props.onSelect(props.id)}}>
            Remove
         </Button>
        
       
        <li className={classes.li}>{props.text}</li>
    
        
   
    </div>
    </>
    )
};

