# Use Node Alpine image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of the code
COPY . .

RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
