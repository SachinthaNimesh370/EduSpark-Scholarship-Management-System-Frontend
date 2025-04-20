# BAse Image
FROM  node:20-alpine

# Working directoey
WORKDIR /app

# Copy The file
COPY package*.json ./ 

RUN npm install

COPY . .

# run the app

EXPOSE 5173

CMD [ "npm","run","dev" ]

# docker build -t eduspark .
# docker run --name studentspark -p 3000:5173 eduspark