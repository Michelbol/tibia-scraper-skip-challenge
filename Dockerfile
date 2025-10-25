FROM ghcr.io/puppeteer/puppeteer:latest

WORKDIR /app

# Copia os arquivos
COPY package*.json ./

# Corrige permissões
USER root
RUN chown -R pptruser:pptruser /app

# Troca para o usuário padrão do Puppeteer
USER pptruser

# Instala dependências (agora com permissão)
RUN npm install

# Copia o restante do código
COPY . .

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV NODE_ENV=production

CMD ["bash", "-c", "tail -f /dev/null"]