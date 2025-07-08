FROM node:lts AS builder

WORKDIR /app

COPY src/package*.json ./
RUN npm install

COPY src/* ./

RUN npm run build


FROM busybox AS runtime

# Create a user without privileges
RUN adduser -D static
WORKDIR /app

# Copy static files and use local built assets
COPY docs/ ./
COPY --from=builder /app/dist/ ./
RUN find . -type f -name "*.html" -exec sed -i 's|"https://cdn.jsdelivr.net/npm/rebus-fr/dist/|"|g' {} +

USER static

# Run web server in foreground
ENTRYPOINT ["httpd", "-v", "-f"]

# Add a healthcheck
HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1