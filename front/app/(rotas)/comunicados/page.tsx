'use client'

import { Box, Button, Card, Container, Fade, FormControl, Grid2, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

export function Comunicados() {
    const router = useRouter()
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const cadastrarComunicado = () => {
        router.push("/comunicados/cadastrar")
    }

    const editarComunicado = () => {

    }
    
    return (
        <Container maxWidth={false} disableGutters>
            <Card variant="elevation" sx={{ boxShadow: "0px 1px 4px 1px rgba(50, 50, 50, 0.22)" }}>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    pt={4}
                    pb={1}
                    px={9}
                    gap={{ xs: 2, sm: 0 }}
                    sx={{
                        "& > *": {
                            marginBottom: { xs: 2, sm: 0 },
                        },
                    }}
                >
                    <Box>
                        <InputLabel sx={{fontSize: 12}}>Pesquisar conteúdos *</InputLabel>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <TextField label="Titulo, descrição..." variant="standard" />
                            <SearchIcon sx={{ mr: 1, my: 1.5 }} />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                        maxWidth={{ sm: "auto" }}
                        gap={1}
                        sx={{
                            "& > *": {
                                marginRight: { xs: 0, sm: 2 },
                                marginBottom: { xs: 2, sm: 0 },
                            },
                            width: { sm: "auto" },
                        }}
                    >
                        <FormControl
                            size="small"
                            sx={{
                                width: { xs: "100%", sm: "50vw", md: "50vw", lg: "40vw" },
                                minWidth: "350px",
                            }}
                            id="input-nome"
                        >
                            <InputLabel id="demo-select-small-label">Selecione o tipo de conteúdo</InputLabel>
                            <Select
                                size="small"
                                label="Selecione o tipo de conteúdo"
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                               
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap={0}
                        width="100%"
                        sx={{
                            "& > *": {
                                marginBottom: { xs: 0, sm: 0 },
                            },
                            gap: { xs: 0, sm: 2 },
                            width: { xs: "100%", sm: "auto" },
                        }}
                    >
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Cadastrar comunicado"
                        >
                            <Button
                                sx={{
                                    backgroundColor: "#642683",
                                    "&:hover": { backgroundColor: "#7f3da0" },
                                    width: "38px",
                                    height: "38px",
                                    minWidth: "0",
                                    padding: "0",
                                }}
                                variant="contained"
                                color="secondary"
                                onClick={cadastrarComunicado}
                            >
                                <AddIcon fontSize="small" />
                            </Button>
                        </Tooltip>
                    </Box>

                </Box>

                {!isSmallScreen ? (
                    <TableContainer
                        sx={{
                            maxHeight: {
                                xs: 300,
                                sm: 400,
                                md: 500,
                                lg: 600,
                                xl: 650,
                            },
                        }}
                    >
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell
                                        sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}
                                        >
                                            #
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{ minWidth: 110, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}

                                        >
                                            Titulo
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}
                                        >
                                            Publicação
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}
                                        >
                                            Publicado?
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}
                                        >
                                            Data limite do POP-UP
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}
                                        >
                                            Editar
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}
                                        >
                                            Ativo?
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}
                                        >
                                            Data da Inativação
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}
                                        >
                                            Motivo da Inativação
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: 11,
                                                    xl: 13
                                                },
                                                color: 'GrayText'
                                            }}
                                        >
                                            Republicar
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Box
                        sx={{
                            p: 1,
                            maxHeight: {
                                xs: 300,
                                sm: 400,
                                md: 500,
                                lg: 600,
                                xl: 750,
                            },
                            overflowY: "auto",
                        }}
                    >

                    </Box>
                )}
                <Box display="flex" alignItems="center" justifyContent="space-between" pt={1} pb={3} px={4}>
                    <Grid2>
                        <strong>Total de Registros:</strong> 875
                    </Grid2>
                    <Grid2>
                        <Button variant="outlined" color="secondary">
                            Primeira
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Anterior
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Proxima
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Ultima
                        </Button>
                    </Grid2>
                </Box>
            </Card>
        </Container>
    )
}
