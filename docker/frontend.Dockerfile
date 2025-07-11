# 1. Установка зависимостей
FROM node:20-alpine AS deps
WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# 2. Сборка приложения
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY frontend/. .
RUN npm run build

# 3. Запуск в продакшене
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
