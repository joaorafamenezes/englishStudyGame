# Etapa 1: Compilação (Build)
FROM node:22-alpine AS builder
WORKDIR /app

# Copia os arquivos de configuração de dependências do monorepo
COPY package*.json ./
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Instala todas as dependências (incluindo devDependencies)
RUN npm ci

# Copia todo o código-fonte
COPY . .

# Compila o backend (TypeScript) e o frontend (Vite)
RUN npm run build

# Etapa 2: Imagem final de Produção (Leve e rápida)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001
ENV HOST=0.0.0.0

# Copia apenas o necessário para rodar as dependências de produção do backend
COPY package*.json ./
COPY backend/package*.json ./backend/
RUN npm ci --omit=dev --workspace=backend

# Copia as compilações prontas
COPY --from=builder /app/backend/dist ./backend/dist
COPY --from=builder /app/frontend/dist ./frontend/dist

EXPOSE 3001

# Inicia o servidor Node que servirá a API e o Frontend juntos
CMD ["node", "backend/dist/index.js"]
