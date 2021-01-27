# Specify a base image
FROM node

WORKDIR /home/phudakova.com

# Install ependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]