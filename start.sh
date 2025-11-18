#!/bin/bash

# Start backend
cd back-end && npm install && npm run server &

# Start frontend
cd ../front-end && npm install && npm run dev &

# Start admin
cd ../admin && npm install && npm run dev &

# Keep container alive
wait