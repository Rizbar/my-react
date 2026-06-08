import React from 'react';
import { styled } from 'linaria/react';

// 1. Base Component dengan CSS Variable dinamis
const BaseButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
  background-color: white;
  border: 2px solid var(--btn-color);
  color: var(--btn-color);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--btn-color);
    color: white;
  }
`;

// 2. Extend Style dengan menginjeksi nilai variabel
const BlueButton = styled(BaseButton)`
  --btn-color: #3b59ff;
`;

const RedButton = styled(BaseButton)`
  --btn-color: #ff5a43;
`;

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  font-family: sans-serif;
`;

const Title = styled.h1`
  color: #ff3b30;
  font-size: 28px;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #0040ff;
`;

const LinariaPage = () => (
  <Container>
    <Title>Selamat datang di pelajaran CSS-in-JS</Title>
    <Name>JayJay</Name>
    <div>
      <BlueButton>Lanjut Belajar!</BlueButton>
      <RedButton>Kembali</RedButton>
    </div>
  </Container>
);

export default LinariaPage;