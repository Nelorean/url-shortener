# 🔗 URL Shortener

API REST para encurtamento de URLs com contagem de cliques, desenvolvida com Node.js, Express e MongoDB.

## 🌐 Deploy

API disponível em: https://url-shortener-71d4.onrender.com

## 🚀 Tecnologias

- **Node.js** + **Express** — servidor e roteamento
- **MongoDB** + **Mongoose** — banco de dados
- **Nanoid** — geração de códigos únicos
- **Dotenv** — variáveis de ambiente

## 📁 Estrutura do Projeto

```
url-shortener/
├── src/
│   ├── controllers/
│   │   └── urlController.js
│   ├── models/
│   │   └── Url.js
│   ├── routes/
│   │   └── urlRoutes.js
│   └── app.js
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

## ⚙️ Como rodar localmente

### Pré-requisitos
- Node.js instalado
- Conta no [MongoDB Atlas]

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/Nelorean/url-shortener.git

# Entre na pasta
cd url-shortener

# Instale as dependências
npm install

# Crie o arquivo .env baseado no .env.example
cp .env.example .env
```

Preencha o arquivo `.env` com suas credenciais:

```env
MONGODB_URI=sua_uri_do_mongodb_atlas
PORT=3000
BASE_URL=http://localhost:3000
```

```bash
# Rode o servidor em modo desenvolvimento
npm run dev
```

A API estará disponível em `http://localhost:3000`

## 📌 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/shorten` | Encurtar uma URL |
| GET | `/:shortCode` | Redirecionar para URL original |
| GET | `/stats/:shortCode` | Ver estatísticas do link |

### Encurtar URL — `POST /shorten`

**Body:**
```json
{
  "originalUrl": "https://www.google.com.br"
}
```

**Resposta:**
```json
{
  "originalUrl": "https://www.google.com.br",
  "shortUrl": "https://url-shortener-71d4.onrender.com/abc12345",
  "shortCode": "abc12345",
  "clicks": 0
}
```

---

### Redirecionar — `GET /:shortCode`

Acesse a URL curta diretamente no navegador:

```
https://url-shortener-71d4.onrender.com/abc12345
```

Redireciona automaticamente para a URL original.

---

### Estatísticas — `GET /stats/:shortCode`

**Resposta:**
```json
{
  "originalUrl": "https://www.google.com.br",
  "shortUrl": "https://url-shortener-71d4.onrender.com/abc12345",
  "clicks": 10,
  "createdAt": "2024-05-23T..."
}
```

## 🌱 Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `MONGODB_URI` | String de conexão do MongoDB Atlas |
| `PORT` | Porta do servidor (padrão: 3000) |
| `BASE_URL` | URL base da aplicação |
