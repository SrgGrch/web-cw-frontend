import React, {useEffect, useState} from 'react';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import {getEvents} from "./classes/MockRestApi";
import Button from "@material-ui/core/Button";
import {LoginDialog} from "./presentation/auth/LoginDialog";

const EventList = (props) => {
    const [data, setData] = useState()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        getEvents().then(res => {
            console.log(res)
            setData(res)
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
            justifyContent: "center",
        },
        loader: {
            width: '100%',
            height: '100%',
            alignContent: "center"
        },
        card: {
            width: 550,
            boxShadow: '10px',
            padding: '16px'
        },
        pageTitle: {
            fontSize: '30pt'
        },
        title: {
            width: "75%"
        },
        pageTitleContainer: {
            alignContent: "start",
        },
        titleContainer: {
            alignContent: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        detailsContainer: {
            alignContent: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "left",
            flexDirection: "column"
        },
        mainScreen: {
            display: "flex",
            justifyContent: "center"
        },
        menu: {
            display: "flex",
            flexDirection: "column"
        }
    }));

    const renderEvents = () => {
        return data.map((event) => {
            return (
                <ListItem alignItems="flex-start" className={styles.listItem}>
                    <Card className={styles.card}>
                        <Box className={styles.titleContainer}>
                            <Typography className={styles.title} gutterBottom variant="h5" component="h2">
                                {event.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {event.date}
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {event.description}
                            </Typography>
                            <Box mt={2} className={styles.detailsContainer}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {event.place.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {event.organizer.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {event.event_type}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {event.guests.length}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </ListItem>
            )
        })
    }

    const styles = useStyles();

    const onProfileClicked = () => {
        setOpen(true)
    }

    return (
        <div className="App">
            <Box className={styles.pageTitleContainer}>
                <Typography className={styles.pageTitle}>
                    Blurred Education
                </Typography>
            </Box>
            <Box className={styles.mainScreen}>
                <Box className={styles.menu}>
                    <Button>
                        Лента
                    </Button>
                    <Button>
                        Мероприятия
                    </Button>
                    <Button>
                        Горячее
                    </Button>
                    <Button onClick={onProfileClicked}>
                        Профиль
                    </Button>
                </Box>
                <Box>
                    {
                        data ?
                            <List className={styles.eventList}>
                                {renderEvents()}
                            </List>
                            :
                            <Box className={styles.loader}>
                                <CircularProgress open={open}/>
                            </Box>
                    }
                </Box>
            </Box>
            <LoginDialog open={open}/>
        </div>
    );
}

export default EventList;
