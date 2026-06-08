import React, { useState } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';

// 1. Definisikan Variabel Tema (Light & Dark)
const lightTheme = {
  body: '#ffffff',
  text: '#c2185b', // Warna pink/merah maroon seperti contoh untuk teks utama
  buttonBg: '#ffffff',
  buttonText: '#000000',
  buttonBorder: '#000000',
};

const darkTheme = {
  body: '#000000',
  text: '#ff4081', 
  buttonBg: '#000000',
  buttonText: '#ffffff',
  buttonBorder: '#ffffff',
};

// 2. Definisikan Animasi Keyframes (Contoh: Efek Fade & Bounce Lembut)
const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
    opacity: 0.8;
  }
`;

// 3. Buat Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  transition: all 0.3s ease; /* Transisi halus saat ganti tema */
  font-family: 'Georgia', serif; /* Menyesuaikan font bergaya serif di gambar */
`;

const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: 2px solid ${(props) => props.theme.buttonBorder};
  padding: 10px 40px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 40px;
  width: 300px;
  max-width: 80%;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const AnimatedBox = styled.div`
  border: 1px solid ${(props) => props.theme.buttonBorder};
  color: ${(props) => props.theme.buttonText};
  padding: 15px 40px;
  font-size: 1rem;
  width: 300px;
  max-width: 80%;
  text-align: center;
  
  /* Menerapkan Animasi */
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

// 4. Komponen Utama
function App() {
  // State untuk melacak tema aktif (true = dark, false = light)
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Title>Selamat Datang di Materi Jayjay!</Title>
        
        <StyledButton onClick={toggleTheme}>
          Ganti Tema
        </StyledButton>

        <AnimatedBox>
          Ayo Belajar Animasi!
        </AnimatedBox>
      </Container>
    </ThemeProvider>
  );
}

export default App;