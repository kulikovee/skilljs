import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { FC } from 'react';
import Layout from "../Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import NotFound from "../NotFound/NotFound";

const App: FC = () => {
    const mainTheme = createTheme();
    return (
        <ThemeProvider theme={ mainTheme }>
            <CssBaseline />
            <BrowserRouter>
                <Container maxWidth="lg">
                    <Routes>
                        <Route path="/" element={ <Layout /> } />
                        <Route path='*' element={ <NotFound /> }/>
                    </Routes>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
