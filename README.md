##Notes:
This is my first time on:
- Angular (2/4)
- Expressjs
- MongoDB
- Material - due to very poor documentation that took the longest time to figure out :) and still im not happy with the final effect

# Quick start

**Make sure you have Node version >= 6.0 and NPM >= 3**

### Install mondoDB Community Server
https://www.mongodb.com/download-center#community

### install the repo with npm
```bash
npm install
```
### start the server
```bash
npm run server
```

### Import mongoDB database
```bash
mongorestore -d EmployeeFinaldb <directory_backup>
```

### Start mongoDB
```bash
mongod
```

### Start webserver
```bash
node webpack.server.config.js
```
