import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {getEventById, isRegisteredOnEvent, registerOnEvent} from '../../classes/RestApi'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const EventDetails = (props) => {
    const [event, setEvent] = useState()
    const [isRegistered, setIsRegistered] = useState(false)
    let { eventId } = useParams()

    const useStyles = makeStyles((theme) => ({
        content: {
            width: '60%',
            height: '100%',
        },
        title: {
            marginTop: 36,
            marginLeft: 24,
            marginRight: 24,
        },
        description: {
            width: '40%',
            fontSize: '1.2rem',
            marginLeft: 32,
            marginRight: 24,
            marginTop: 16,
        },
        button: {
            fontSize: '1.2rem',
            marginLeft: 24,
            marginRight: 24,
            marginTop: 16,
        },
        loader: {
            width: '100%',
            height: '100%',
            alignContent: 'center',
        },
    }))

    const styles = useStyles()
    useEffect(() => {
        getEventById(eventId).then((event) => {
            setEvent(event)
        })
    }, [eventId])

    useEffect(() => {
        isRegisteredOnEvent(eventId).then((isRegistered) => {
            console.log(isRegistered)
            setIsRegistered(isRegistered)
        })
    }, [eventId])

    return (
        <div>
            <h1>
                {event ? (
                    <Box className={styles.content}>
                        <Typography variant={'h2'} className={styles.title}>
                            {event.name}
                        </Typography>
                        <Typography variant={'h5'} className={styles.title}>
                            Описание
                        </Typography>
                        <Typography
                            variant={'body2'}
                            className={styles.description}
                        >
                            {event.description}
                        </Typography>
                        <Typography variant={'h5'} className={styles.title}>
                            Когда?
                        </Typography>
                        <Typography
                            variant={'body2'}
                            className={styles.description}
                        >
                            {event.date}
                        </Typography>
                        <Typography variant={'h5'} className={styles.title}>
                            Где?
                        </Typography>
                        <Typography
                            variant={'body2'}
                            className={styles.description}
                        >
                            {event.place.name} <br />
                            {event.place.description} <br />
                        </Typography>
                        <Typography variant={'h5'} className={styles.title}>
                            Кто?
                        </Typography>
                        <Typography
                            variant={'body2'}
                            className={styles.description}
                        >
                            {event.participants.map((p) => (
                                <div>
                                    {p.name}
                                    <br />
                                </div>
                            ))}
                        </Typography>
                        <Box
                            style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                            }}
                        >
                            {isRegistered ? (
                                <Button
                                    className={styles.button}
                                    variant={'outlined'}
                                    disabled={true}
                                >
                                    Зарегистрирован
                                </Button>
                            ) : (
                                <Button
                                    variant={'outlined'}
                                    className={styles.button}
                                    onClick={() => {
                                        registerOnEvent(eventId).then(()=>{
                                            setIsRegistered(true)
                                        })
                                    }}
                                >
                                    Иду!
                                </Button>
                            )}

                            <Typography
                                variant={'body2'}
                                className={styles.button}
                            >
                                Идет: {event.guests.length}
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <Box className={styles.loader}>
                        <CircularProgress />
                    </Box>
                )}
            </h1>
        </div>
    )
}

export default EventDetails
