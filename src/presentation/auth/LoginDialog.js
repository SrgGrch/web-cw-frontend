import React from "react";
import PropTypes from "prop-types"
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";


export const LoginDialog = (props) => {
    const {onClose, selectedValue, open} = props;
    return (
        <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={onClose}>
            <DialogTitle id="simple-dialog-title">Login</DialogTitle>
            <TextField id="login" label="Логин" variant="outlined"/>
            <TextField id="password" label="Пароль" variant="outlined"/>
        </Dialog>
    )
}

LoginDialog.propTypes = {
    //onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    //selectedValue: PropTypes.string.isRequired,
};
