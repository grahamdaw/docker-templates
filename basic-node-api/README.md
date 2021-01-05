# Basic Node API

A basic Node JS API template using Express.

## via Compose
```
docker-compose up
```

## via Dockerfile

To build:
```
docker build -t basic-node-api .
```

To run:
```
docker run --name basic-node-api -dp 8080:8080 basic-node-api
```