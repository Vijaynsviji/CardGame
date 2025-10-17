
import { Avatar,TextField,Snackbar,Button,IconButton,Alert } from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertAction(onSave,onClose){
    return(
        <>
        <Button color="secondary" size="small" onClick={onSave}>
        Yes
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      </>
    );
}

export function AlertComp({showAlert,setShowAlert,onSave=()=>{},message="Do you want to undo?",type="Question"}){
    const onClose = ()=>{setShowAlert(false)};
    
    if(type==="info"){
        return (
        <Snackbar open={showAlert} autoHideDuration={6000} onClose={onClose}>
        <Alert
            onClose={onClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
        >
           {message}
        </Alert>
        </Snackbar>);
    }



    return (
        <Snackbar
        open={showAlert}
        // autoHideDuration={6000}
        onClose={onClose}
        message={message}
        action={AlertAction(onSave,onClose)}
        />
    );
}