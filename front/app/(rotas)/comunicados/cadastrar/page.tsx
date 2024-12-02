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
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
  Typography,
} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BackupIcon from '@mui/icons-material/Backup';
import LinkIcon from '@mui/icons-material/Link';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";
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

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
  {
    marginLeft: -1,
    borderLeft: '1px solid transparent',
  },
}));

export default function CadastrarComunicado() {
  const service = comunicadoService()
  const [formats, setFormats] = useState<{ [key: string]: string[] }>({});

  const handleFormatChange = (
    field: string,
    newFormats: string[]
  ) => {
    setFormats((prevFormats) => ({
      ...prevFormats,
      [field]: newFormats,
    }));
  };

  const [form, setForm] = useState<any>({
    titulo: "", 
    conteudo: "",
    descricao: "",
    publicado: false,
    data_publicacao: "",
    ativo:false,
    data_limite_pop_up: "",
    data_inativacao: "",
    motivo_inativacao: ""
  })

  const handleContentChange = (field: string, value: string) => {
    setForm((prevForm:any) => ({
      ...prevForm,
      [field]: value,
    }));
  };
  console.log('form', form)

  const enviarForm = async () => {
    await service.postComunicado(form).then(() => {
      alert('cadastrado com sucesso')
    }).catch((err) => {
        console.log(err)
    })
  }

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
          pb={4}
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
                  value={form.titulo}
                  onChange={(e) => setForm({...form, titulo: e.target.value})}
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
                endIcon={<LinkIcon />}
                disabled
              >
                Copiar Link
              </Button>
            </Grid2>
            <Grid2 size={20}>
              <Typography fontWeight="bold" variant="subtitle2">
                Conteúdo do comunicado
              </Typography>
              <Card
                variant="outlined"
                sx={{
                  mt: 0.5,
                  px: 0.5,
                  pt: 0.5,
                  pb: 0.5,
                  borderRadius: 0
                }}>

                <FormControl size="small" fullWidth id="input-nome">
                  <Paper
                    elevation={0}
                    sx={(theme) => ({
                      display: 'flex',
                      border: `1px solid ${theme.palette.divider}`,
                      flexWrap: 'wrap',
                      borderRadius: 0
                    })}
                  >
                    <StyledToggleButtonGroup
                      size="small"
                      value={formats["conteudo"] || []}
                      onChange={(_, newFormats) => handleFormatChange("conteudo", newFormats)}
                      aria-label="text formatting"
                    >
                      <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                      </ToggleButton>
                      <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                      </ToggleButton>
                      <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                      </ToggleButton>
                    </StyledToggleButtonGroup>
                  </Paper>
                  <TextField
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 0
                      },
                    }}
                    value={form.conteudo}
                    onChange={(e) => handleContentChange("conteudo", e.target.value)}
                    slotProps={{
                      input: {
                        style: {
                          fontWeight: (formats["conteudo"] || []).includes("bold")
                            ? "bold"
                            : "normal",
                          fontStyle: (formats["conteudo"] || []).includes("italic")
                            ? "italic"
                            : "normal",
                          textDecoration: (formats["conteudo"] || []).includes("underlined")
                            ? "underline"
                            : "none",
                        },
                      },
                    }}
                    multiline
                    rows={8}
                    fullWidth
                    placeholder="Escreva seu texto aqui..."
                    label="Insira o conteúdo do comunicado"
                  />
                </FormControl>
              </Card>
            </Grid2>
            <Grid2 size={20}>
              <Typography fontWeight="bold" variant="subtitle2">
                Breve descrição
              </Typography>
              <Card
                variant="outlined"
                sx={{
                  mt: 0.5,
                  px: 0.5,
                  pt: 0.5,
                  pb: 0.5,
                  borderRadius: 0
                }}>

                <FormControl size="small" fullWidth id="input-nome">
                  <Paper
                    elevation={0}
                    sx={(theme) => ({
                      display: 'flex',
                      border: `1px solid ${theme.palette.divider}`,
                      flexWrap: 'wrap',
                      borderRadius: 0
                    })}
                  >
                    <StyledToggleButtonGroup
                      size="small"
                      value={formats["descricao"] || []}
                      onChange={(_, newFormats) => handleFormatChange("descricao", newFormats)}
                      aria-label="text formatting"
                    >
                      <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                      </ToggleButton>
                      <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                      </ToggleButton>
                      <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                      </ToggleButton>
                    </StyledToggleButtonGroup>
                  </Paper>
                  <TextField
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 0
                      },
                    }}
                    value={form.descricao}
                    onChange={(e) => handleContentChange("descricao", e.target.value)}
                    slotProps={{
                      input: {
                        style: {
                          fontWeight: (formats["descricao"] || []).includes("bold")
                            ? "bold"
                            : "normal",
                          fontStyle: (formats["descricao"] || []).includes("italic")
                            ? "italic"
                            : "normal",
                          textDecoration: (formats["descricao"] || []).includes("underlined")
                            ? "underline"
                            : "none",
                        },
                      },
                    }}
                    multiline
                    rows={8}
                    fullWidth
                    placeholder="Escreva seu texto aqui..."
                    label="Insira o conteúdo do comunicado"
                  />
                </FormControl>
              </Card>
            </Grid2>
            <Grid2 size={20}>
              <Typography fontWeight="bold" variant="subtitle2">
                Conteúdo irá gerar POP-UP?
              </Typography>
              <Box display="flex" alignItems={"center"} gap={1}>
                <Android12Switch defaultChecked />
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
                <Button startIcon={<FileUploadIcon />} variant="contained" color="inherit" sx={{
                  backgroundColor: "#ffffff",
                  "&:hover": { backgroundColor: "#e7e7e7" },
                }}>
                  Insira os arquivos do comunicado.
                </Button>
                <Button endIcon={<BackupIcon />} variant="contained" color="secondary" sx={{
                  backgroundColor: "#642683",
                  "&:hover": { backgroundColor: "#7f3da0" },
                  border: 1, borderStyle: "dashed", borderColor: "black"
                }}>
                  Insira imagem para o card
                </Button>
              </Box>
            </Grid2>
            <Grid2 size={20}>
              <Box display="flex" justifyContent={"space-between"}>
                <Box></Box>
                <Button onClick={enviarForm} variant="contained" color="primary" sx={{
                  backgroundColor: "#00BCD4",
                  "&:hover": { backgroundColor: "#20c5db" }
                }}>
                  Enviar Comunicado
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Card>
    </Container>
  );
}
