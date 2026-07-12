# --- STAGE 1: Build Layer ---
FROM node:20-alpine AS builder
LABEL authors="fadlana"

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile
COPY . .

ARG NUXT_PUBLIC_TURNSTILE_SITE_KEY
ARG NUXT_TURNSTILE_SECRET_KEY

ENV NUXT_PUBLIC_TURNSTILE_SITE_KEY=$NUXT_PUBLIC_TURNSTILE_SITE_KEY
ENV NUXT_TURNSTILE_SECRET_KEY=$NUXT_TURNSTILE_SECRET_KEY

RUN pnpm run build

# --- STAGE 2: Production Layer ---
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]