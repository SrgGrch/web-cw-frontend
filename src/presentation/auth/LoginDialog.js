import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

export const LoginDialog = (props) => {
    const { onClose, selectedValue, open, toggleOpen } = props

    const [password, setPassword, username, setUsername] = useState('')

    const useStyles = makeStyles((theme) => ({
        dialog: {
            padding: 24,
        },
        input: {
            marginLeft: 24,
            marginRight: 24,
            marginBottom: 8,
        },
        buttonsContainer: {
            marginLeft: 24,
            marginRight: 24,
            marginBottom: 16,
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
        },
    }))

    const styles = useStyles()

    const loginUser = () => {
        console.log(username)
        console.log(password)
    }

    return (
        <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={onClose}
            className={styles.dialog}
            onBackdropClick={() => toggleOpen()}
            onEscapeKeyDown={() => toggleOpen()}
        >
            <DialogTitle id="simple-dialog-title">Вход</DialogTitle>
            <TextField
                id="login"
                label="Имя пользователя"
                variant="outlined"
                className={styles.input}
                onChange={(e)=>{setUsername(e.target.value)}}
            />
            <TextField
                id="password"
                label="Пароль"
                variant="outlined"
                className={styles.input}
                onChange={(e)=>{setPassword(e.target.value)}}
            />
            <Box className={styles.buttonsContainer}>
                <Button onClick={() => loginUser()}>Войти</Button>
                <Button>Регистрация</Button>
            </Box>
        </Dialog>
    )
}

LoginDialog.propTypes = {
    //onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    //selectedValue: PropTypes.string.isRequired,
}
