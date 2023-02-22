# How to run this APP

- Install the packages used in React  
  go to "client" folder and run

```javascript
npm install
```

- Install the packages used in Express  
  go to "server" folder and run

```javascript
npm install
```

- Create a Database in postgres titled **"counterdb"**  
postgres and pgadmin was used in this project

- go to "server" folder
- create a file named ".env"
- in the .env file, store the variable mentioned below
```
DATABASE_URL="postgresql://POSTGRES_USERNAME:POSTGRES_PASSWORD@localhost:5432/counterdb?schema=public"

```

- Run Migrations

```
npx prisma migrate dev --name init
```

- Start Express Server
- First go to "server" folder and run

```
node ./app.js
```

- Start React Server
- First go to "client" folder and run

```javascript
npm start
```

# How to execute tests

## For Frontend tests

- go to "client" server
- run

```
npm test
```
## For backend tests

- stop the backend server first
- go to "server" folder
- run
```
npm test
```

# How to parse a file through linter (eslint was used for this project)

- go to 'client' folder 
- run 
```
  npx eslint FOLDER-DIRECTORY
```
