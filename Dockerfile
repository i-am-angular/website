FROM node:10-slim

RUN mkdir -p /usr/src/app
# Set the created directory as the working directory
WORKDIR /usr/src/app
# Copy the package.json inside the working directory
COPY package.json /usr/src/app

# We then run npm install to install
# express for our application
RUN npm install
RUN npm install -g @angular/cli@8.0.0

# We then copy the rest of our application
# to the app direcoty
COPY . /usr/src/app

EXPOSE 80

# We start our application by calling
# npm start.
ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check", "true", "--publicHost", "www.wearefrontend.com"]
