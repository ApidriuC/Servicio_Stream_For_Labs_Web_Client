FROM node:15.11.0

WORKDIR /usr/streamsforlab/webapp


COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .

CMD [ "npm", "run build" ]