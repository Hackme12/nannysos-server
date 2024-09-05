
# Sample docker file
# Use the official Node.js image as the base image
FROM node:18
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN echo 'installing npm.....'
RUN npm install
# Copy the rest of the application code
COPY . .
# Expose the port your app listens on
EXPOSE 3000
# Start your application
CMD ["npm","start"]

# ------------- Build docker images and run on ports ---------------
# build image 
- docker build -t image_name .
- After this check docker daemon app if your image is present or not
# run docker imager on ports 
- docker run -p5173:5173 -d nannysos:nanny_2

