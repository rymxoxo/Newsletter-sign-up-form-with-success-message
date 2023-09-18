# Use the Node.js base image
FROM nginx:alpine

# Create a non-root user and set their home directory
#RUN addgroup app && adduser -S -G app app
# Switch to the non-root user
#USER app


# Set the working directory
#WORKDIR /app
#COPY package*.json /app/
#RUN npm install

# Copy your application files to the container
COPY . /usr/share/nginx/html
# Install dependencies
# Set the environment variable
ENV API_PATH=https://api.myapp.com/

# Expose port 8080 (if your application listens on this port)
#EXPOSE 8080

# Specify how to start your application
#CMD npm start
