const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/postos', (req, res) => {
  const postos = [
    {
      id: 1,
      nome: 'Baratao.mais Centro',
      endereco: 'Av. Principal, 1000 • Centro',
      distancia: '1,2 km',
      preco_gasolina: 5.89,
      preco_etanol: 4.89,
      preco_diesel: 5.69,
      aberto: true,
      horario: '24 horas'
    },
    {
      id: 2,
      nome: 'Baratao.mais Norte',
      endereco: 'Av. das Nações, 450 • Zona Norte',
      distancia: '3,8 km',
      preco_gasolina: 5.89,
      preco_etanol: 4.89,
      preco_diesel: 5.69,
      aberto: true,
      horario: '24 horas'
    },
    {
      id: 3,
      nome: 'Baratao.mais Sul',
      endereco: 'Rod. Estadual, km 12 • Zona Sul',
      distancia: '6,4 km',
      preco_gasolina: 5.89,
      preco_etanol: 4.89,
      preco_diesel: 5.69,
      aberto: true,
      horario: '24 horas'
    }
  ];
  res.json(postos);
});

app.get('/api/ofertas', (req, res) => {
  const ofertas = [
    {
      id: 1,
      tipo: 'Gasolina Comum',
      preco: 5.89,
      descricao: 'Oferta especial para gasolina comum'
    },
    {
      id: 2,
      tipo: 'Etanol',
      preco: 4.89,
      descricao: 'Preço especial em postos participantes'
    },
    {
      id: 3,
      tipo: 'Diesel S10',
      preco: 5.69,
      descricao: 'Mais economia para quem roda mais'
    }
  ];
  res.json(ofertas);
});

app.listen(PORT, () => {
  console.log(`🚗 Baratao.mais Server rodando em http://localhost:${PORT}`);
  console.log('Combustível de qualidade. Economia de verdade.');
});