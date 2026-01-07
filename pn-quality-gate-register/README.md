# PN Quality Gate Register

## Menjalankan layanan

1. Salin file environment:
   ```bash
   cp .env.example .env
   ```
2. Isi semua variabel `QGR_*` di file `.env`.
3. Jalankan:
   ```bash
   docker compose up -d
   ```

## Port

* n8n tersedia di host port `5679`.

## Variabel wajib (`QGR_*`)

* `QGR_DB_NAME`
* `QGR_DB_USER`
* `QGR_DB_PASSWORD`
* `QGR_N8N_BASIC_AUTH_ACTIVE`
* `QGR_N8N_BASIC_AUTH_USER`
* `QGR_N8N_BASIC_AUTH_PASSWORD`
