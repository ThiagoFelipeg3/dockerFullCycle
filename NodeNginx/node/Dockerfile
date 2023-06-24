FROM node:18

WORKDIR /var/www/html

COPY . .

RUN npm install && \
    npm install express


EXPOSE 3001

CMD ["node", "index.js"]