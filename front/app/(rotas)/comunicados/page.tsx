'use client'

import { Box, Button, Card, Container, Fade, FormControl, Grid2, InputLabel, MenuItem, Select, styled, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from "@mui/icons-material/Search";
import CachedIcon from '@mui/icons-material/Cached';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { comunicadoService } from "@/src/services/comunicado/comunicadoService";

const Android12Switch = styled(Switch)(() => ({
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
    },
    '& .MuiSwitch-switchBase': {
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#273481',
            '& + .MuiSwitch-track': {
                backgroundColor: '#273481',
                opacity: 0.5,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
    },
}));

export function Comunicados() {
    const service = comunicadoService()
    const router = useRouter()
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [comunicados, setComunicados] = useState<any[]>([]);

    const getAllComunicado = async () => {
        await service.getComunicados().then((response) => {
            setComunicados(response);
        }).catch((err) => {
            console.log(err)
        })
    };

    console.log(comunicados)

    useEffect(() => {
        getAllComunicado();
    }, []);

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
                        <InputLabel sx={{ fontSize: 12 }}>Pesquisar conteúdos *</InputLabel>
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
                                {comunicados.map((c, i) => (
                                    <TableRow key={c.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}>
                                            {i}
                                        </TableCell>
                                        <TableCell sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}>
                                            {c.titulo}
                                        </TableCell>
                                        <TableCell sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}>
                                            {c.data_publicacao}
                                        </TableCell>
                                        <TableCell sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}>
                                            {c.publicado ? "Sim" : "Não"}
                                        </TableCell>
                                        <TableCell sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}>
                                            {c.data_limite_pop_up}
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip
                                                TransitionComponent={Fade}
                                                TransitionProps={{ timeout: 600 }}
                                                title="Editar comunicado"
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
                                                    onClick={editarComunicado}
                                                >
                                                    <AddIcon fontSize="small" />
                                                </Button>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}>
                                            <Box display="flex" alignItems={"center"} gap={1}>
                                                {c.ativo ? <Typography>Ativo</Typography> : <Typography>Inativo</Typography>}
                                                <Android12Switch checked={c.ativo} />
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}>
                                            {c.data_inativacao}
                                        </TableCell>
                                        <TableCell sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}>
                                            {c.motivo_inativacao}
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip
                                                TransitionComponent={Fade}
                                                TransitionProps={{ timeout: 600 }}
                                                title="Republicar"
                                            >
                                                <Button
                                                    sx={{
                                                        backgroundColor: "#44C50C",
                                                        "&:hover": { backgroundColor: "#48ac1d" },
                                                        width: "38px",
                                                        height: "38px",
                                                        minWidth: "0",
                                                        padding: "0",
                                                    }}
                                                    variant="contained"
                                                    disableElevation
                                                    color="secondary"
                                                >
                                                    <CachedIcon fontSize="small" />
                                                </Button>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
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
                        <strong>Total de Registros:</strong> {comunicados?.length}
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
