'use client'
import { AppBar, Avatar, Badge, BadgeProps, Box, Grid2, IconButton, Link, styled, Toolbar, Typography } from "@mui/material"
import dynamic from "next/dynamic"
import React from "react"

import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        background: '#273481'
    },
}));

const Navbar: React.FC<any> = ({ children }: any) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#642683' }}>
                <Toolbar>
                    <Grid2 container alignItems="center" justifyContent="space-between">
                        <Grid2 gap={1} display="flex" justifyContent="center" alignItems="center" size="grow">
                            <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                                <Box display="flex" alignItems="center">
                                    <Box marginRight={1} sx={{ display: { xs: 'flex', md: 'flex' } }}>
                                        <Box sx={{ display: 'flex', border: '1px', borderColor: '#D9569A', borderStyle: 'solid', width: '100%', borderRadius: '50%', backgroundColor: '#D9569A', py: 1, px: 1 }}>
                                            <HomeTwoToneIcon sx={{ color: "#ffff" }} fontSize="medium" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
                            <Typography variant="body1" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }}>Portal MaisFoco</Typography>
                        </Grid2>
                        <Grid2 ml={10} display="flex" justifyContent="center" alignItems="center">
                            <Avatar src="/broken-image.jpg" />
                        </Grid2>
                    </Grid2>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} gap={2}>
                        <Grid2 display="flex" justifyContent="center" alignItems="center">
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Grid2 ml={1} display="flex" justifyContent="center" alignItems="center">
                                <Avatar src="/broken-image.jpg" />
                            </Grid2>
                            <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>...Carregando</Typography>
                            <IconButton
                                size="small"
                            >
                                <StyledBadge badgeContent={10} color="primary">
                                    <Box sx={{ display: 'flex', border: '1px', borderColor: '#2CA3DD', borderStyle: 'solid', width: '100%', borderRadius: '50%', backgroundColor: '#2CA3DD', py: 1, px: 1 }}>
                                        <NotificationsIcon sx={{ color: '#ffff' }} />
                                    </Box>
                                </StyledBadge>
                            </IconButton>
                        </Grid2>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Typography variant="overline">SAIR</Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Grid2 sx={{ paddingTop: '50px', mb: '8rem', px: 2 }}>
                {children}
            </Grid2>
        </Box>
    )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })