FROM node:18-bullseye-slim

# instalar dependências do Chromium
RUN apt-get update && apt-get install -y \
    ca-certificates fonts-liberation wget \
    libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libxss1 \
    libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 libgbm1 \
    libasound2 libpangocairo-1.0-0 libgtk-3-0 libatspi2.0-0 \
  && rm -rf /var/lib/apt/lists/*

# instalar chrome (opcional: usar chromium do repos)
RUN apt-get update && \
    apt-get install -y chromium

WORKDIR /app
COPY package*.json ./
COPY . .

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

CMD ["bash", "-c", "tail -f /dev/null"]