#! /bin/bash

docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app  c1633b750c15