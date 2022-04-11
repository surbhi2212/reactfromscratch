import React,{useState} from 'react';
import { makeStyles } from '@mui/styles';
import { TextField,Button } from '@mui/material';
import TodoList from './TodoList';


const useStyle = makeStyles({
    root:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItem:'center',
       
        textAlign:'center'
    },

    subRoot:{
        marginTop:80,
        width: '50%',
        height: 500,
        background:'#fab1a0',
        boxShadow: '5px 5px 25px -5px rgba(0,0,0,0.5)',
        borderRadius:'15px'
    },

  /*  h1: {
        color:'#000',
        background: 'transparent',
        backgroundcolor:'#8566aa',
        padding: '6px 0 2px 0',
        marginBottom: '10px',
        boxShadow: '5px 5px 25px -5px rgba(0,0,0,0.5)',
    },

   

    button:{
        minHeight: '40px',
        width:'40px',
        borderRadius:'50%',
        borderColor:'transparent',
        backgroundcolor:'#8566aa',
        color:'#FFF',
        fontSize:'40px',
        marginLeft:'10px',
        boxShadow:'5px 5px 15px -5px rgba(0,0,0,0.5'
    },
    button_hover: {
       backgroundcolor:'#20bf6b'
    },
*/
    ol : {
        marginTop:'30px'
    }, 
    input: {
        textAlign:'center',
        height:'50px',
        top:'10px',
        border:'none',
        background: 'transparent',
        fontSize:'50px',
        fontWeight: 500,
        width:'60%',
        boderBottom:'2px solid #8566aa',
        outline:'none'
    }, 
    
})
export default function Items(){
 var classes = useStyle()

 const [newInput,SetNewInput]=useState('')
 const [item,setItem]=useState([])

 const listOfItems=()=>{
    setItem((olditem)=>{
        return [...olditem,newInput]
    })
    SetNewInput('')
 }
 const deleteItems=(id)=>{
     
    setItem((olditem)=>{
        return olditem.filter((arrElem, index)=>{
            return index !== id;
        })
    })
 }

    return(
        <>
        <div className={classes.root}>
            <div className={classes.subRoot}>
                <br />
                <h1 style={{background:'#e17055'}}> ToDo List</h1>
                <br />
                <TextField className={classes.input} fullwidth type="text" placeholder="Add a Items" value={newInput} onChange={(event)=>SetNewInput(event.target.value)}/>
                <Button color='secondary' variant="contained" style={{marginTop:11,marginLeft:20, padding:10,width:200, fontSize:20}} onClick={listOfItems}>ADD</Button>
                <ol>
                 { item.map((itemval,index)=>{
                      return <TodoList key={index} id={index} onSelect={deleteItems} text={itemval}/>
                  })}
                </ol>
            </div>
        </div>
        </>
    )
}