# Ruleset v1 (Deterministic)

Ruleset ini digunakan oleh workflow validasi otomatis. Semua rule bersifat deterministik, berbasis field wajib, tanpa AI.

## Daftar Jenis Perkara

* `PIDUM`
* `TIPIKOR`
* `PERDATA`
* `PHI`
* `TILANG`

## Aturan Wajib per Jenis

| Jenis | Field wajib pada `data` | Catatan |
| --- | --- | --- |
| PIDUM | `suspect_name`, `pasal` | Nama tersangka dan pasal wajib diisi. |
| TIPIKOR | `suspect_name`, `nilai_kerugian` | Nilai kerugian angka > 0. |
| PERDATA | `penggugat`, `tergugat` | Minimal satu penggugat dan tergugat. |
| PHI | `penggugat`, `perusahaan` | Nama perusahaan wajib. |
| TILANG | `vehicle_plate`, `violation_code` | Plat dan kode pelanggaran wajib. |

## Checklist

* Checklist minimal 1 item untuk keluar dari status `TERTAHAN`.
* Jika checklist belum ada, status tetap `TERTAHAN` walau rule otomatis lulus.

## Idempotency

* `idempotency_key` dihitung dari payload yang dinormalisasi.
* Payload sama tidak membuat duplikat, hanya memperbarui `updated_at`.

## Audit Trail

* Semua perubahan penting disimpan pada `case_audit_events`.
* Field `diff` berupa JSONB untuk menyimpan perubahan sebelum/sekudah jika diperlukan.
