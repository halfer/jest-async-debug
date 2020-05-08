# A backend environment for the Contributor project

FROM alpine:3.11

# Install software
RUN apk update
RUN apk add bash nodejs npm

WORKDIR /project

COPY config config
COPY migrations migrations
COPY src src
COPY tests tests
COPY babel.config.js babel.config.js
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

CMD ["/bin/bash"]
