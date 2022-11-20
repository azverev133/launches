FROM node:16

WORKDIR /app

COPY package.json /app

RUN npm install
# RUN npm install --production

COPY . .

EXPOSE 3001

CMD ["npm", "run", "prod"]