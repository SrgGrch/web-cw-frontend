import React, { useEffect, useState } from 'react'
import '../App.css'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { LoginDialog } from './auth/LoginDialog'
import EventItem from './events/EventItem'
import Cookies from 'universal-cookie'
import { Switch } from 'react-router'
import { Link, Route } from 'react-router-dom'
import EventDetails from './events/EventDetails'
import { RegistrationDialog } from './auth/RegistrationDialog'
import {getEvents} from "../api/RestApi";

const MainPage = () => {
    const [events, setEvents] = useState()
    const [loginOpen, setLoginOpen] = useState(false)
    const [regOpen, setRegOpen] = useState(false)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        getEvents().then((res) => {
            console.log(res)
            setEvents(res)
        })
    }, [])

    const useStyles = makeStyles((theme) => ({
        eventList: {
            width: '100%',
            maxWidth: '360ch',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: theme.palette.background.paper,
        },
        listItem: {
            justifyContent: 'center',
        },
        loader: {
            width: '100%',
            height: '100%',
            alignContent: 'center',
        },
        card: {
            width: 550,
            boxShadow: '10px',
            padding: '16px',
        },
        pageTitle: {
            fontSize: '30pt',
        },
        title: {
            width: '75%',
        },
        pageTitleContainer: {
            alignContent: 'start',
        },
        titleContainer: {
            alignContent: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        detailsContainer: {
            alignContent: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'left',
            flexDirection: 'column',
        },
        mainScreen: {
            display: 'flex',
            justifyContent: 'center',
        },
        menu: {
            display: 'flex',
            flexDirection: 'column',
        },
    }))

    const styles = useStyles()
    const toggleLoginOpen = () => setLoginOpen((prevState) => !prevState)
    const toggleRegOpen = () => setRegOpen((prevState) => !prevState)
    const onProfileClicked = () => {
        if (isAuth) {
            // todo open profile
        } else {
            toggleLoginOpen()
        }
    }

    useEffect(() => {
        const cookies = new Cookies()
        if (cookies.get('authToken') !== undefined) {
            setIsAuth(true)
        }
    }, [])

    return (
        <div className="App">
            <Box className={styles.pageTitleContainer}>
                <Typography className={styles.pageTitle}>
                    Blurred Education
                </Typography>
            </Box>
            <Box className={styles.mainScreen}>
                <Box className={styles.menu}>
                    <Link to={`/`} style={{ textDecoration: 'none' }}>
                        <Button>Лента</Button>
                    </Link>
                    <Button>Мероприятия</Button>
                    <Button>Горячее</Button>
                    <Button
                        variant="outlined"
                        onClick={() => onProfileClicked()}
                    >
                        {' '}
                        {isAuth ? <div>Профиль</div> : <div>Войти</div>}{' '}
                    </Button>
                    {isAuth ? (
                        <Button
                            variant="outlined"
                            onClick={() => {
                                const cookies = new Cookies()
                                cookies.remove('authToken')
                                setIsAuth(false)
                            }}
                        >
                            {' '}
                            Выйти
                        </Button>
                    ) : (
                        <div />
                    )}
                </Box>
                <Box>
                    {events ? (
                        <List className={styles.eventList}>
                            {events.map((event) => (
                                <EventItem key={event.id} event={event} />
                            ))}
                        </List>
                    ) : (
                        <Box className={styles.loader}>
                            <CircularProgress />
                        </Box>
                    )}
                </Box>
            </Box>
            <LoginDialog
                open={loginOpen}
                isAuthSucceeded={(isSucceeded) => {
                    setIsAuth(isSucceeded)
                }}
                toggleOpen={toggleLoginOpen}
                onRegistrationClicked={() => {
                    toggleLoginOpen()
                    toggleRegOpen()
                }}
            />
            <RegistrationDialog
                open={regOpen}
                isAuthSucceeded={(isSucceeded) => {
                    setIsAuth(isSucceeded)
                }}
                toggleOpen={toggleRegOpen}
                onLoginClicked={() => {
                    toggleRegOpen()
                    toggleLoginOpen()
                }}
            />

            {
                <Switch>
                    <Route path={`/:eventId`}>
                        <EventDetails />
                    </Route>
                </Switch>
            }
        </div>
    )
}

export default MainPage
