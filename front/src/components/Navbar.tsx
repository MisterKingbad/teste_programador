'use client'
import { AppBar, Badge, Box, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import dynamic from "next/dynamic"
import React from "react"

import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const Navbar: React.FC<any> = ({ children }: any) => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" color="secondary" enableColorOnDark>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >   
                        <IconButton color="primary">
                            <HomeTwoToneIcon/>
                        </IconButton>
                        <Typography>Portal MaisFoco</Typography>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="primary"
                        >
                            <Badge badgeContent={10} color="primary">
                                <NotificationsIcon color="inherit"/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            // aria-controls={menuId}
                            aria-haspopup="true"
                            // onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Typography>Sair</Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Grid sx={{ paddingTop: '100px', mb: '8rem' }}>
                {children}
            </Grid>
        </Box>
    )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })