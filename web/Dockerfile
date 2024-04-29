FROM node:lts

WORKDIR /usr/src/app



RUN npm install -g react-scripts
RUN chown -Rh node:node /usr/src/app

USER node

CMD [ "sh", "-c", "npm install && npm run dev" ]