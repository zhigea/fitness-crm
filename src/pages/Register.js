import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  width: 100%;
`;

const Register = ({ isLogin, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formatPhoneNumber = (value) => {
    let digits = value.replace(/\D/g, ""); // Удаляем все нецифровые символы
    
    if (digits.startsWith("8")) {
      digits = "7" + digits.slice(1); // Заменяем 8 на 7
    }
    
    if (!digits.startsWith("7")) {
      digits = "7" + digits; // Автоматически добавляем код страны, если его нет
    }
    
    const formatted = `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
    return formatted.trim();
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!isLogin && !name) {
      setError("Имя обязательно для регистрации");
      return;
    }
    if (!email && phone.replace(/\D/g, "").length < 11) {
      setError("Введите email или корректный номер телефона");
      return;
    }
    if (!password) {
      setError("Введите пароль");
      return;
    }
    onSubmit({ name, email, phone, password });
  };

  return (
    <Container component="form" onSubmit={handleSubmit}>
      {!isLogin && (
        <TextField
          label="Имя"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Телефон"
        variant="outlined"
        fullWidth
        value={phone}
        onChange={handlePhoneChange}
        inputProps={{ maxLength: 18 }}
      />
      <TextField
        label="Пароль"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button type="submit" variant="contained" fullWidth>
        {isLogin ? "Войти" : "Зарегистрироваться"}
      </Button>
    </Container>
  );
};

export default Register;
