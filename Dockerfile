# stage 1: build
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2: serve
FROM nginx:alpine

# Copy build React → Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx.conf custom thay thế default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
