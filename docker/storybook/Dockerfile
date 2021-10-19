# Using node lts version with alpine
FROM node:lts-alpine

# Set working directory to /app
WORKDIR /app

# First copy package.json and run yarn for caching
COPY package.json .
COPY .npmrc .npmrc
COPY yarn.* .
RUN yarn

# Copy all files to working directory
COPY . .

# Exposing application in-browser module port
EXPOSE 6006

# Start application
CMD ["yarn", "storybook"]