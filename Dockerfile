FROM node

COPY . /home/app

WORKDIR /home/app

RUN npm install .

RUN ["npm", "run", "build"]

RUN npm install -g serve

CMD ["serve", "-s", "build"]