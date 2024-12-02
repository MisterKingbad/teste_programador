'use client'

import { Box, Button, Card, Container, Divider, Fade, FormControl, Grid2, InputLabel, MenuItem, Select, styled, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from "@mui/icons-material/Search";
import CachedIcon from '@mui/icons-material/Cached';
import EditIcon from '@mui/icons-material/Edit';
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

    const [pagina, setPagina] = useState(1);
    const registrosPorPagina = 10;

    const totalPaginas = Math.ceil(comunicados?.length / registrosPorPagina);

    const irParaPrimeiraPagina = () => setPagina(1);
    const irParaPaginaAnterior = () => setPagina((prev) => Math.max(prev - 1, 1));
    const irParaPaginaProxima = () => setPagina((prev) => Math.min(prev + 1, totalPaginas));
    const irParaUltimaPagina = () => setPagina(totalPaginas);

    const comunicadosPaginaAtual = comunicados?.slice(
        (pagina - 1) * registrosPorPagina,
        pagina * registrosPorPagina
    );

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
                                {comunicadosPaginaAtual.map((c) => (
                                    <TableRow key={c.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell sx={{ minWidth: 50, flex: 1, wordBreak: "break-word" }}>
                                            {c.id}
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
                                                    <EditIcon fontSize="small" />
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
                        {comunicadosPaginaAtual.map((c) => (
                            <Box
                                key={c.id}
                                sx={{
                                    mb: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    p: "10px",
                                }}
                            >
                                <Typography variant="body2">
                                    <strong>#:</strong> {c.id}
                                </Typography>
                                <Divider />
                                <Typography variant="body2">
                                    <strong>Titulo:</strong> {c.titulo}
                                </Typography>
                                <Divider />
                                <Typography variant="body2">
                                    <strong>Publicação:</strong> {c.data_publicacao}
                                </Typography>
                                <Divider />
                                <Typography variant="body2">
                                    <strong>Publicado?:</strong> {c.publicado ? "Sim" : "Não"}
                                </Typography>
                                <Divider />
                                <Typography variant="body2">
                                    <strong>Data limite do POP-UP?:</strong> {c.data_limite_pop_up}
                                </Typography>
                                <Divider />
                                <Typography variant="body2" component="div">
                                    <strong>Editar:</strong> <Tooltip
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
                                            <EditIcon fontSize="small" />
                                        </Button>
                                    </Tooltip>
                                </Typography>
                                <Divider />
                                <Typography variant="body2" component="div">
                                    <strong>Ativo?:</strong> {c.ativo ? <Typography>Ativo</Typography> : <Typography>Inativo</Typography>}
                                    <Android12Switch checked={c.ativo} />
                                </Typography>
                                <Divider />
                                <Typography variant="body2">
                                    <strong>Data da Inativação:</strong> {c.data_inativacao}
                                </Typography>
                                <Divider />
                                <Typography variant="body2">
                                    <strong>Motivo da Inativação:</strong> {c.motivo_inativacao}
                                </Typography>
                                <Divider />
                                <Typography variant="body2" component="div">
                                    <strong>Republicar:</strong> <Tooltip
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
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                )}
                <Box display="flex" alignItems="center" justifyContent="space-between" pt={1} pb={3} px={4}>
                    <Grid2>
                        <strong>Total de Registros:</strong> {comunicados?.length}
                    </Grid2>
                    <Grid2>

                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={irParaPrimeiraPagina}
                            disabled={pagina === 1}
                        >
                            Primeira
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={irParaPaginaAnterior}
                            disabled={pagina === 1}
                        >
                            Anterior
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={irParaPaginaProxima}
                            disabled={pagina === totalPaginas}
                        >
                            Próxima
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={irParaUltimaPagina}
                            disabled={pagina === totalPaginas}
                        >
                            Última
                        </Button>
                    </Grid2>
                </Box>
            </Card>
        </Container>
    )
}
