FROM node:16-alpine

# create the app directory
WORKDIR /usr/src/app

# copy in the package.json and package-lock.json
COPY package*.json ./

# install the dependencies
RUN npm install

# copy the source code into the app
COPY . . 

# expose a port on the container
EXPOSE 3001

# start the application
CMD npm start

