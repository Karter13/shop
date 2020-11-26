import React from 'react';
import styles from './App.module.css';
import {AppBar, Button, Container, Toolbar, Typography} from '@material-ui/core';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import {Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar className={styles.header}>
                    <div>
                        <Typography variant="h4">
                            Shop
                        </Typography>
                    </div>
                    <div className={styles.headerBlock}>
                        <span>200p</span>
                        <div className={styles.basket}>
                            <AddShoppingCartSharpIcon/>
                            <span>корзина</span>
                        </div>
                        <div className={styles.login}>
                            <Button color="inherit">Login</Button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Container fixed>
                {/*<Route exact path={'/'} render={() => {}}/>*/}
                {/*<Route path={'/login'} render={() => {}}/>*/}
            </Container>

        </div>
    );
}

export default App;
