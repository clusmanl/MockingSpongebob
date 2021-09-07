# syntax=docker/dockerfile:1

FROM node:12-alpine
RUN npm install discord.js@12.5.3 dotenv
WORKDIR /
COPY . .
CMD ["node", "src/index.js"]
