import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    heroContent: {
        backgroundColor: '#424242',
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(1),
        width: '30%'
    },
    cardGrid: {
        padding: theme.spacing(8),
        backgroundColor: '#121212',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#424242',
        padding: theme.spacing(6),
    },
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
}));

export default function NotFound() {

    const classes = useStyles();

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md" style={{ textAlign: 'center' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} style={{ backgroundColor: '#424242' }}>
                        <Card className={classes.root}>
                            <Container className={classes.cardGrid} maxWidth="md" style={{ textAlign: 'left' }}>
                                <Typography component="h3" variant="h3">
                                    Error 404 - Page Not Found
                                </Typography>
                            </Container>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}