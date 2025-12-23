# SAKURA Officer Dashboard (Demo MVP)

Demo dashboard untuk petugas SAKURA. Proyek ini menggunakan Vite + React + Tailwind CSS, dengan data mock berbasis JSON dan localStorage agar siap dimigrasi ke API/DB nyata.

## ✨ Fitur
- Login sederhana (username + role admin/officer)
- Dashboard overview dengan ringkasan dan chart mock
- Kunjungan: konfirmasi / tolak kunjungan
- Administrasi: tandai permintaan sebagai processed
- Pengunjung: daftar warga
- QR Logs: riwayat QR yang dihasilkan

## 🚀 Cara Menjalankan
```bash
npm install
npm run dev
```

## 📁 Lokasi Mock Data
Mock data disimpan di `src/data`:
- `src/data/visits.json`
- `src/data/adminRequests.json`
- `src/data/visitors.json`
- `src/data/qrLogs.json`

Data di-load pertama kali ke `localStorage` melalui service di `src/services/mockApi.js`. Semua update (confirm, reject, processed) hanya mengubah state di localStorage.

## 🔄 Rencana Migrasi ke API/Database
Semua akses data dipusatkan di folder `src/services`:
- `src/services/mockApi.js`
- `src/services/mockStorage.js`

Ketika siap migrasi:
1. Ganti implementasi di `mockApi.js` dengan fetch ke backend atau repository layer baru.
2. Pertahankan tanda tangan fungsi (misalnya `getVisits`, `updateVisitStatus`) agar komponen UI tetap sama.
3. Pindahkan data ke PostgreSQL + endpoint API (atau n8n lokal) tanpa mengubah UI.

## ✅ Catatan
- Demo only (tanpa hardening/production security)
- Tidak memakai Supabase atau auth pihak ketiga
