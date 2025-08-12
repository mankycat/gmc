FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
COPY src ./src
# Prisma requires DATABASE_URL at build time
ENV DATABASE_URL="postgresql://user:password@db:5432/gpu_console"
RUN npx prisma generate
EXPOSE 3001
CMD ["sh", "-c", "npx prisma migrate deploy && node src/index.js"]
