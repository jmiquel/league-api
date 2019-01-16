FROM node:8
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN yarn install
# If production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3001
CMD [ "yarn", "start" ]