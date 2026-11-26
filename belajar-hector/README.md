# Belajar Hector: kode sumber prototipe

Kode sumber 14 artifact prototipe aplikasi belajar SD (kelas 2C, persiapan ASAS November 2026). Semua halaman sudah terbit di claude.ai; folder ini menyimpan salinan kodenya agar bisa dipakai untuk membangun aplikasi (APK) berikutnya.

Rencana pengembangan dan prompt untuk Claude ada di dokumen [Rencana Aplikasi Belajar Hector](https://claude.ai/artifact/DyuV4yFSLNhR1WsSA3vK23).

## Daftar artifact

| No | Artifact | Link terbit | File di `published/` | Sumber di `source/` |
| --- | --- | --- | --- | --- |
| 1 | Rencana Belajar Hector | https://claude.ai/artifact/Vwovm1PMFqUwxuwLEnmA3N | `rencana-belajar-hector.html` | `hector/` |
| 2 | 写字 Reel Hector | https://claude.ai/artifact/JawaJsvGsfdGRpvuWdZfT2 | `xie-zi-reel/` | `reel/` (+ `hector/wdata.js`) |
| 3 | 说话 Reel Hector | https://claude.ai/artifact/RX2pKJvwSj2nWY98LGEgvw | `shuo-hua-reel/` | `voice/` |
| 4 | English Quest 100 | https://claude.ai/artifact/P4bdWvSr84rAaKvMskf4vE | `english-quest-100.html` | `q100/` |
| 5 | English Island | https://claude.ai/artifact/P4pe2uhoMpv82GAPTp4SEv | `english-island.html` | `eng/` |
| 6 | Countable Cove | https://claude.ai/artifact/84KLXiQE7eU31DWRncpvHp | `countable-cove.html` | `cnt/` |
| 7 | Zero and the Monster Planet | https://claude.ai/artifact/13BaeZfPBwieJg2THb2E1d | `zero-monster-planet.html` | `zero/` |
| 8 | Zero's RPG Quest | https://claude.ai/artifact/HimaDxykBSXHzLHRa2uxNt | `zero-rpg-quest.html` | `rpg/` (+ `zero/art.js`) |
| 9 | Pilot Kelas Zero Quest | https://claude.ai/artifact/Xh2y5SoV4VCA8hsEdM6Der | `pilot-kelas-zero-quest/` | (desain kanvas, file sama) |
| 10 | Latihan Bebras Siaga | https://claude.ai/artifact/5NVEAjaftM99HzbDu4BgMf | `latihan-bebras-siaga.html` | (satu file) |
| 11 | Paspor Logika Dunia | https://claude.ai/artifact/KUHTbe8PXACriheDr7axVD | `paspor-logika-dunia.html` | (satu file) |
| 12 | Misi Galaksi Bip | https://claude.ai/artifact/QUKGght5CxCoS67BxT8gpz | `misi-galaksi-bip.html` | (satu file) |
| 13 | Petualangan Hutan Rimba | https://claude.ai/artifact/SvUiEmjK8Rggz218rnj1sM | `petualangan-hutan-rimba.html` | `tools/` (build_jungle.py) |
| 14 | Ekspedisi Laut Dalam | https://claude.ai/artifact/ENNKwDGuHZ4U5XvRpYLTWL | `ekspedisi-laut-dalam.html` | `tools/` (build_sea.py) |

Terkait: [Soal Ulangan PAK Kelas 2](https://claude.ai/artifact/WUPb3eFLzXDMUihY8HwuhM) dan [Latihan Matematika Kelas 2](https://claude.ai/artifact/Gnge15kbnZeQSP3RTX1VdY) (kodenya tidak ada di folder ini).

## Struktur

- `published/`: halaman HTML siap pakai, persis seperti yang diterbitkan. Halaman yang membaca file data (`wdata.json`, `vdata.json`) harus dibuka lewat server web, misalnya `python3 -m http.server`, bukan langsung dari file.
- `source/`: potongan kode yang dipakai untuk merakit halaman.

### Merakit ulang Rencana Belajar Hector

Halaman ini dirakit dari beberapa file di `source/hector/` dalam urutan:

```
sila.js + data.js + app.js
  (sebelum baris terakhir `render();` di app.js disisipkan:
   theme.js, gen.js, wdata.js, miniwriter.js, mand.js, plh.js, pjok.js)
```

Gaya ada di `style.css`. Bagian kepala halaman (title, font) diambil dari `published/rencana-belajar-hector.html`.

### Data huruf Mandarin

`wdata.json` dan `source/hector/wdata.js` berisi data goresan 74 huruf dari paket [hanzi-writer-data](https://github.com/chanind/hanzi-writer-data) 2.0.1 (lisensi Arphic Public License). Skrip pembuatnya: `source/reel/make-wdata.py`.

## Catatan

- Fitur mikrofon (dikte) dan suara Claude hanya berjalan di dalam claude.ai. Di luar itu, halaman memakai suara bawaan browser.
- Penyimpanan nilai memakai `localStorage` di browser, jadi belum anti-curang. Lihat bagian Anti-curang di dokumen rencana.
