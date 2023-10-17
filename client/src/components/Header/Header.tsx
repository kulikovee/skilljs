import React from 'react';
import { Button, Toolbar, Typography } from "@mui/material";

type HeaderProps = {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
        >
            {title}
        </Typography>
        <Button variant="outlined" size="small">
            Sign up
        </Button>
    </Toolbar>
)

export default Header;
