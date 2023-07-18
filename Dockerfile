FROM node:20.3.1-bullseye
WORKDIR /app
EXPOSE 3000
CMD ["npm", "i"]
CMD ["npm", "run", "dev"]

