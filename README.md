# Nodejs-Template
A template for any Nodejs project!

### Made Using
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Express JS](https://expressjs.com/)

### Features 
- Docker
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
    ├── CODE_OF_CONDUCT.md
    └── README.md

### Installation
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
#### Updating packages
To update the existing packages to latest version
```
npm update
```
If some of those updates are major releases, running `npm update` won't update the version of those.
To update all packages to a new major version, install [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).
1. To install the `npm-check-updates` package globally
```
npm install -g npm-check-updates
```
2. To update all packages
```
ncu -u
```
### For Dockerization
Run the following commands
```sh
1.  docker build . -t <your username>/<name-of-node-application> --network=host
2.  docker images
3.  docker run -p 3000:3000 -d <your username>/<name-of-node-application>
```

### Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request
