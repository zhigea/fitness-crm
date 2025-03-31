import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Register from "../pages/Register"; // Импортируем компонент формы

const Backdrop = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(5px)", // Размытие фона
  backgroundColor: "rgba(0, 0, 0, 0.3)",
});

const ModalContainer = styled(Box)(({ theme, open }) => ({
  position: "fixed",
  top: 0,
  right: open ? "0" : "-100%", // Анимация выезда справа
  width: 400, // Фиксированная ширина
  height: "100vh", // На всю высоту экрана
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  transition: "right 0.3s ease-in-out", // Плавная анимация
  display: "flex",
  flexDirection: "column",
}));

export default function RegisterModal({ open, onClose, isLogin }) {
  return (
    <>
      {open && <Backdrop onClick={onClose} />} {/* Размытие */}
      <ModalContainer open={open}>
        <IconButton onClick={onClose} sx={{ position: "absolute", right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom>
          {isLogin ? "Вход" : "Регистрация"}
        </Typography>
        <Register isLogin={isLogin} onSubmit={(data) => console.log("Форма отправлена", data)} />
      </ModalContainer>
    </>
  );
}
