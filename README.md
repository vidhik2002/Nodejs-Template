# Nodejs-Template
A template for any Nodejs project!

#### Made Using
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Express JS](https://expressjs.com/)

#### Features 
- Dockers
- Logger
- Rate Limit
- Validation schema

### Folder Structure
    .
    ├── logs                   
    |   └── logger.js               # Logger file to log success, logical and error codes
    ├── models 
    |   └── dbInit.js               # Connection to the mongo database
    ├── routes  
    |   └── test.js                 # Test route 
    ├── tools  
    |   └── error_codes.js          # File containing a list of all codes
    ├── utils  
    |   └── validation_schema.js    # Schema to validate req.body
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── Dockerfile
    ├── docker-compose.yml
    ├── app.js
    └── README.md

#### Installation
1. To install latest version of npm
```sh
npm install -g npm@latest
```
2. Clone the repo
```sh
git clone https://github.com/vidhik2002/Nodejs-Template.git
```
3. Replace .env.sample with .env and insert the Mongo URL
4. Run the command
```
nodemon app.js
```
### For Dockerization
Run the following commands
```sh
1.  docker build . -t <your username>/<name-of-node-application> --network=host
2.  docker images
3.  docker run -p 3000:3000 -d <your username>/<name-of-node-application>
```
