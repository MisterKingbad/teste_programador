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
  Paper,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

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
          px={9}
        >
          <Typography fontWeight="bold">Criação de comunicado</Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={20}>
              <FormControl size="small" fullWidth id="input-nome">
                <InputLabel id="demo-select-small-label">
                  Selecione o tipo de conteúdo
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
            <Grid2 size={20}>
              <FormControl size="small" fullWidth id="input-nome">
                <InputLabel id="demo-select-small-label">
                  Selecione o tipo de conteúdo
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
              <FormControl
                size="small"
                sx={{
                    minWidth: { xs: "158px", sm: "289px", md: "593px", lg: "1578px" },
                    maxWidth: "100%", // Garante que não ultrapasse os limites
                  }}
              >
                <InputLabel id="demo-select-small-label">
                  Selecione o tipo de conteúdo
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
              <FormControl size="small" fullWidth id="input-nome">
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
              </FormControl>
            </Grid2>
            <Grid2 size={20}>
              <FormControl size="small" fullWidth id="input-nome">
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
              </FormControl>
            </Grid2>
          </Grid2>
        </Box>
      </Card>
    </Container>
  );
}
