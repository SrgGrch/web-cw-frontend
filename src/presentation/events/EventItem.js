import ListItem from '@material-ui/core/ListItem'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const EventItem = (props) => {
    const { event, onEventClicked } = props

    const useStyles = makeStyles((theme) => ({
        listItem: {
            justifyContent: 'center',
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
    }))

    const styles = useStyles()

    return (
        <ListItem alignItems="flex-start" className={styles.listItem}>
            <Card className={styles.card}>
                <Box className={styles.titleContainer}>
                    <Typography
                        className={styles.title}
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        {event.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {event.date}
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                    >
                        {event.description}
                    </Typography>
                    <Box mt={2} className={styles.detailsContainer}>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {event.place.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {event.organizer.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {event.event_type}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {event.guests.length}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </ListItem>
    )
}

export default EventItem
