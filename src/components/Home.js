import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import walkingshoes from '../images/walkingshoes.jpg';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    heroContent: {
        backgroundColor: 'black',
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
        cursor: 'pointer'
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
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
}));

export default function Home() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h3" variant="h3" align="center" gutterBottom>
                        Welcome To Our Shoe Store
                    </Typography>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={walkingshoes}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Shoes
                                        </Typography>
                                <Typography>
                                   Here are the wide range of walking shoes
                                        </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="/clothing" size="small" variant="outlined" color="primary" >
                                    View Products
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}