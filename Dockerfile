FROM node:20.3.1-bullseye
WORKDIR /
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
