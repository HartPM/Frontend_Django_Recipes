FROM node:14.18.3

WORKDIR /client

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]