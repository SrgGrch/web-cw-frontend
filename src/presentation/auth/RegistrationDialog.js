import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { register } from '../../api/RestApi'
import Cookies from 'universal-cookie'

export const RegistrationDialog = (props) => {
    const { onClose, isAuthSucceeded, open, toggleOpen, onLoginClicked } = props

    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

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

    const regUser = () => {
        register(username, password, name, email).then((r) => {
            console.log(r)
            const cookies = new Cookies()
            cookies.set('authToken', r.token.token, { path: '/' })
            isAuthSucceeded(true)
            toggleOpen()
        })
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
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <TextField
                type="email"
                autoComplete="current-password"
                id="password"
                label="Email"
                variant="outlined"
                className={styles.input}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <TextField
                autoComplete="current-password"
                id="password"
                label="Имя"
                variant="outlined"
                className={styles.input}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <TextField
                type="password"
                id="password"
                label="Пароль"
                variant="outlined"
                className={styles.input}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <TextField
                type="password"
                id="password"
                label="Подтверждение пароля"
                variant="outlined"
                className={styles.input}
                onChange={(e) => {
                    setConfPassword(e.target.value)
                }}
            />
            <Box className={styles.buttonsContainer}>
                <Button disabled={confPassword !== password} onClick={() => regUser()}>Регистрация</Button>
                <Button onClick={onLoginClicked}>Войти</Button>
            </Box>
        </Dialog>
    )
}

RegistrationDialog.propTypes = {
    //onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    //selectedValue: PropTypes.string.isRequired,
}
