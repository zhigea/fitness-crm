import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import RegisterModal from "./RegisterModal";

export default function Header() {
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Fitness CRM</Typography>
          <Box>
            <Button color="inherit">Войти</Button>
            <Button color="inherit" onClick={() => setRegisterOpen(true)}>
              Зарегистрироваться
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <RegisterModal open={isRegisterOpen} onClose={() => setRegisterOpen(false)} />
    </>
  );
}
