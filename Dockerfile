FROM node:16

WORKDIR /app

COPY package.json /app

RUN npm install
# RUN npm install --production

COPY . .

ENV PORT 4200

EXPOSE $PORT

CMD ["npm", "run", "prod"]