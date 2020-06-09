import React, {useEffect, useState} from 'react'
import './App.css'
import List from '@material-ui/core/List'
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {getEvents} from './classes/MockRestApi'
import Button from '@material-ui/core/Button'
import {LoginDialog} from './presentation/auth/LoginDialog'
import EventItem from './presentation/events/EventItem'

const EventList = () => {
    const [events, setEvents] = useState()
    const [open, setOpen] = useState(false)

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
    const toggleOpen = () => setOpen(prevState => !prevState)

    return (
        <div className="App">
            <Box className={styles.pageTitleContainer}>
                <Typography className={styles.pageTitle}>
                    Blurred Education
                </Typography>
            </Box>
            <Box className={styles.mainScreen}>
                <Box className={styles.menu}>
                    <Button>Лента</Button>
                    <Button>Мероприятия</Button>
                    <Button>Горячее</Button>
                    <Button onClick={() => toggleOpen()}>Профиль</Button>
                </Box>
                <Box>
                    {events ? (
                        <List className={styles.eventList}>
                            {events.map((event) => (
                                <EventItem event={event}/>
                            ))}
                        </List>
                    ) : (
                        <Box className={styles.loader}>
                            <CircularProgress/>
                        </Box>
                    )}
                </Box>
            </Box>
            <LoginDialog open={open} toggleOpen={toggleOpen}/>
        </div>
    )
}

export default EventList
