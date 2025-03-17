FROM node:22-alpine as builder

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install
RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install --only=production

COPY --from=builder /app/dist /app/dist

CMD ["npm", "start"]


EXPOSE 3000