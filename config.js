// ═══════════════════════════════════════════════════════
//  config.js — Cơ Học Đất · Nền Móng
//  ► GV chỉ cần sửa file này → git commit → git push
//  ► Tất cả SV thấy ngay (~1 phút sau khi push)
//  ► KHÔNG cần sửa index.html hay các file bài tập
// ═══════════════════════════════════════════════════════

// ── Cloudflare Worker URL (nhận kết quả → Google Sheet) ─
window.WORKER_URL = "https://dqt-chdnm.phamvietanh158.workers.dev";

// ── % số câu phải LÀM (không cần đúng) để được nộp bài ─
//    Test: 5   |   Chính thức: 70 hoặc 80
window.MIN_ATTEMPT_PCT = 5;

window.CHAPTER_SCHEDULE = {

  // ── PHẦN I: CƠ HỌC ĐẤT ─────────────────────────────
  c0: {          // Chương Mở Đầu
    active: true,
    open:   null,          // null = mở ngay, không giới hạn
    close:  null,          // null = không tự đóng
  },
  c1: {          // Chương 1 — Tính Chất Vật Lý
    active: true,
    open:   null,
    close:  null,
  },
  c2: {          // Chương 2 — Ứng Suất Trong Đất
    active: true,
    open:   null,
    close:  null,
  },
  c3: {          // Chương 3 — Tính Chất Cơ Học
    active: false,
    open:   null,
    close:  null,
  },
  c4: {          // Chương 4 — Độ Lún
    active: false,
    open:   null,
    close:  null,
  },
  c5: {          // Chương 5 — SCT & Ổn Định Mái
    active: true,
    open:   null,
    close:  null,
  },
  c6: {          // Chương 6 — Áp Lực Đất Lên Tường Chắn
    active: true,
    open:   null,
    close:  null,
  },

  // ── PHẦN II: NỀN MÓNG ───────────────────────────────
  c7: {          // Chương 7 — Vấn Đề Chung Nền & Móng
    active: false,
    open:   null,
    close:  null,
  },
  c8: {          // Chương 8 — Móng Nông
    active: false,
    open:   null,
    close:  null,
  },
  c9: {          // Chương 9 — Nền Đất Yếu
    active: false,
    open:   null,
    close:  null,
  },
  c10: {         // Chương 10 — Móng Cọc
    active: false,
    open:   null,
    close:  null,
  },

};

// ═══════════════════════════════════════════════════════
//  VÍ DỤ ĐẶT LỊCH CÓ GIỜ MỞ/ĐÓNG:
//
//  c3: {
//    active: true,
//    open:  "2025-10-01T07:00:00",   ← mở lúc 7h sáng 01/10
//    close: "2025-10-08T23:59:00",   ← đóng cuối ngày 08/10
//  },
//
//  CẤU TRÚC THƯ MỤC GITHUB:
//
//  📁 BT_CHDNM_DHXDHN/
//  ├── index.html          ← Trang chủ
//  ├── config.js           ← File này — GV chỉ sửa ở đây
//  ├── chuong-02/
//  │   ├── index_C2.html   ← Trang chương 2
//  │   ├── 2.1_DANG_1.html
//  │   └── ...
//  └── chuong-XX/
//
// ═══════════════════════════════════════════════════════

  // ── PHẦN I: CƠ HỌC ĐẤT ─────────────────────────────
  c0: {          // Chương Mở Đầu
    active: true,
    open:   null,          // null = mở ngay, không giới hạn
    close:  null,          // null = không tự đóng
    minPct: 60,            // % tối thiểu để nộp bài
  },
  c1: {          // Chương 1 — Tính Chất Vật Lý
    active: true,
    open:   null,
    close:  null,
    minPct: 70,
  },
  c2: {          // Chương 2 — Ứng Suất Trong Đất
    active: true,
    open:   null,
    close:  null,
    minPct: 5,
  },
  c3: {          // Chương 3 — Tính Chất Cơ Học
    active: false,         // ← chưa dạy, khóa
    open:   null,
    close:  null,
    minPct: 70,
  },
  c4: {          // Chương 4 — Độ Lún
    active: false,
    open:   null,
    close:  null,
    minPct: 70,
  },
  c5: {          // Chương 5 — SCT & Ổn Định Mái
    active: true,
    open:   null,
    close:  null,
    minPct: 70,
  },
  c6: {          // Chương 6 — Áp Lực Đất Lên Tường Chắn
    active: true,
    open:   null,
    close:  null,
    minPct: 70,
  },

  // ── PHẦN II: NỀN MÓNG ───────────────────────────────
  c7: {          // Chương 7 — Vấn Đề Chung Nền & Móng
    active: false,
    open:   null,
    close:  null,
    minPct: 70,
  },
  c8: {          // Chương 8 — Móng Nông
    active: false,
    open:   null,
    close:  null,
    minPct: 70,
  },
  c9: {          // Chương 9 — Nền Đất Yếu
    active: false,
    open:   null,
    close:  null,
    minPct: 70,
  },
  c10: {         // Chương 10 — Móng Cọc
    active: false,
    open:   null,
    close:  null,
    minPct: 70,
  },

};

// ═══════════════════════════════════════════════════════
//  VÍ DỤ ĐẶT LỊCH CÓ GIỜ MỞ/ĐÓNG:
//
//  c3: {
//    active: true,
//    open:  "2025-10-01T07:00:00",   ← mở lúc 7h sáng 01/10
//    close: "2025-10-08T23:59:00",   ← đóng cuối ngày 08/10
//    minPct: 70,
//  },
//
//  CẤU TRÚC THƯ MỤC GITHUB:
//
//  📁 nen-mong-baitap/
//  ├── index.html          ← Trang chủ
//  ├── config.js           ← File này — GV sửa ở đây
//  ├── chuong-2/
//  │   └── index.html      ← Bài tập C2 ✅
//  ├── chuong-5/
//  │   └── index.html      ← Bài tập C5 ✅
//  └── chuong-X/
//      └── index.html      ← Thêm dần khi build xong
//
// ═══════════════════════════════════════════════════════
