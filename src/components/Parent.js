import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import StoreIcon from '@material-ui/icons/Store';
import Button from '@material-ui/core/Button';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import ProductItem from './ProductItem'
import Loader from './Loader'
import NotFound from './NotFound'


const theme = createMuiTheme({
    palette: {
        type: "dark",
        
        secondary: {
            main: '#424242',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },


    icon: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    heroContent: {
        backgroundColor: '#424242',
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
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
        backgroundColor: 'black',
        padding: theme.spacing(6),
    },
}));

export default function Parent() {
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);

    const classes = useStyles();

    async function fetchDataFromApi() {
        if (fetchedProducts === null || fetchedProducts.length < 1) {
            setDataLoading(true);
            const productsResponse = await fetch('https://fakestoreapi.com/products');
            const products = await productsResponse.json();
            setFetchedProducts(products);
            setDataLoading(false);
        }
    }

    useEffect(fetchDataFromApi, []);


    if (dataLoading) {
        return (
            <Loader open={true} />
            );
    }

    //debugger;
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <StoreIcon className={classes.icon} />
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            Shoe Store
                        </Typography>
                        <Button href="/" variant="contained" color="secondary" className={classes.link}>
                            Price & Details
                        </Button>
                    </Toolbar>
                </AppBar>  
                <main style={{ backgroundColor: '#121212' }}>
                    
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route exact path="/product" component={Product}/>
                            <Route path="/product/:id" component={ProductItem}/>       
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                       Shoe store using react router 
                </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>
        </ThemeProvider>
    );
}