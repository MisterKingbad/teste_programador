"use client";

import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

export default function CadastrarComunicado() {
  return (
    <Container maxWidth={false} disableGutters>
      <Card
        variant="elevation"
        sx={{ boxShadow: "0px 1px 4px 1px rgba(50, 50, 50, 0.22)" }}
      >
        <Box
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          pt={4}
          pb={1}
          px={3}
        >
          <Typography fontWeight="bold">Criação de comunicado</Typography>
          <Grid2 container spacing={2}>
            <Typography fontWeight="bold" variant="subtitle2" mt={2}>
              Operações
            </Typography>
            <Grid2 size={20}>
              <FormControl size="small" fullWidth id="input-nome">
                <Typography variant="subtitle2" mb={1}>
                  Selecione operações para carregar as respectivas carteiras
                </Typography>
                <Select
                  fullWidth
                  size="small"
                  label="Selecione o tipo de conteúdo"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid2>
            <Typography fontWeight="bold" variant="subtitle2" mt={2}>
              Detalhes do comunicado
            </Typography>
            <Grid2 size={20}>
              <FormControl size="small" fullWidth id="input-nome">
                <TextField
                  id="standard-basic"
                  label="Insira um titulo para o comunicado"
                  variant="standard"
                />
              </FormControl>
            </Grid2>
            <Grid2 size={20} mb={1}>
              <Typography fontWeight="bold" variant="subtitle2" >
                Tipo de Usuário:
              </Typography>
              <FormControl size="small" fullWidth id="input-nome">
                <InputLabel id="demo-select-small-label">
                  Selecione os tipos de usuário
                </InputLabel>
                <Select
                  fullWidth
                  size="small"
                  label="Selecione o tipo de conteúdo"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid2>
            <Grid2>
              <Typography fontWeight="bold" variant="subtitle2" mt={-2.5}>
                Selecione a Procedimento
              </Typography>
              <FormControl
                size="small"
                sx={{
                  minWidth: {
                    xs: "158px",
                    sm: "289px",
                    md: "593px",
                    lg: "1578px",
                  },
                  maxWidth: "100%",
                }}
              >
                <InputLabel id="demo-select-small-label">
                  Select...
                </InputLabel>
                <Select label="Selecione o tipo de conteúdo">
                  <MenuItem value="">
                    <em>Nenhum</em>
                  </MenuItem>
                  <MenuItem value="1">Opção 1</MenuItem>
                  <MenuItem value="2">Opção 2</MenuItem>
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 textAlign={{ xs: "center", md: "right" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  minWidth: "150px",
                  padding: "8px 16px",
                  fontSize: "14px",
                }}
              >
                Copiar Link
              </Button>
            </Grid2>
            <Grid2 size={20}>
              <Typography fontWeight="bold" variant="subtitle2">
                Conteúdo do comunicado
              </Typography>
              <FormControl size="small" fullWidth id="input-nome">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                />
              </FormControl>
            </Grid2>
            <Grid2 size={20}>
              <Typography fontWeight="bold" variant="subtitle2">
                Breve descrição
              </Typography>
              <FormControl size="small" fullWidth id="input-nome">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                />
              </FormControl>
            </Grid2>
            <Grid2 size={20}>
              <Typography fontWeight="bold" variant="subtitle2">
                Conteúdo irá gerar POP-UP?
              </Typography>
              <Box display="flex" alignItems={"center"} gap={1}>
                <Switch defaultChecked />
                <Typography fontWeight="bold">Sim</Typography>
              </Box>
            </Grid2>
            <Typography fontWeight="bold" variant="subtitle2">
              Escolha a data limite para a leitura do POP-UP
            </Typography>
            <Grid2 size={20} sx={{ '& > :not(style)': { width: '25ch' } }}>
              <FormControl size="small" fullWidth id="input-nome">
                <TextField
                  id="standard-basic"
                  label="Data limite para leitura"
                  variant="standard"
                />
              </FormControl>
            </Grid2>
            <Grid2 size={20}>
              <Box display="flex" gap={3}>
                <Button variant="contained" color="inherit" sx={{
                  backgroundColor: "#642683",
                  "&:hover": { backgroundColor: "#7f3da0" },
                }}>
                  Insira os arquivos do comunicado.
                </Button>
                <Button variant="contained" color="secondary" sx={{
                  backgroundColor: "#642683",
                  "&:hover": { backgroundColor: "#7f3da0" },
                }}>
                  Insira imagem para o card
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Card>
    </Container>
  );
}
