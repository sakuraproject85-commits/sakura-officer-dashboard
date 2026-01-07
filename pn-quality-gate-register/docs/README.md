# Quality Gate Register

## Setup Docker

1. Salin file env dan isi semua variabel `QGR_*`:
   ```bash
   cp .env.example .env
   ```
2. Jalankan stack:
   ```bash
   docker compose up -d
   ```
3. Buka n8n di `http://localhost:5679`.

## Import Workflow

1. Masuk ke n8n UI.
2. Import setiap file JSON di folder `/workflows`:
   - `WF_INGEST_SINGLE_CASE.json`
   - `WF_BATCH_TILANG_IMPORT.json`
   - `WF_SUBMIT_CHECKLIST.json`
   - `WF_SLA_MONITOR.json`
   - `WF_ERROR_HANDLER.json`

## Variabel Environment (QGR_*)

* `QGR_DB_NAME`
* `QGR_DB_USER`
* `QGR_DB_PASSWORD`
* `QGR_N8N_BASIC_AUTH_ACTIVE`
* `QGR_N8N_BASIC_AUTH_USER`
* `QGR_N8N_BASIC_AUTH_PASSWORD`

## Endpoint

* `POST /webhook/ingest/case`
* `POST /webhook/ingest/tilang-batch`
* `POST /webhook/cases/:id/checklist`

## Contoh cURL

### Ingest Single Case
```bash
curl -X POST http://localhost:5679/webhook/ingest/case \
  -H 'Content-Type: application/json' \
  -d @examples/case_pidum.json
```

### Batch Tilang
```bash
curl -X POST http://localhost:5679/webhook/ingest/tilang-batch \
  -H 'Content-Type: application/json' \
  -d @examples/tilang_batch.json
```

### Submit Checklist
```bash
curl -X POST http://localhost:5679/webhook/cases/<case_id>/checklist \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: qgr_demo_validator_key' \
  -d @examples/checklist_submit.json
```
