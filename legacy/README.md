# おもちゃ屋01 — 月面ドライブ・ログ

three.js 月面海報網頁（3D 場景 + 2D 排版）。

## 檔案
- `index.html`：整個頁面（HTML / CSS / JS 都在這一個檔）
- `car.png`：車子與人物去背圖
- `satellite.webp`：太空站去背圖
- `shop-map.webp`：本店紹介的地圖插畫
- `earth_brc.jpg`：地球資料（R 高程 / G 陸地遮罩 / B 雲圖）
- `earth_day.jpg`：地表顏色

## 本機預覽
貼圖用 WebGL 載入，直接雙擊 `index.html`（file://）會被瀏覽器擋下，請用本機伺服器開：

```bash
cd omochaya01
npx serve .          # 或 python3 -m http.server 8000
```

three.js（0.160.0）由 unpkg CDN 載入，字型來自 Google Fonts，所以預覽時需要連網。

## 授權
地球貼圖：Solar System Scope（CC BY 4.0），頁面右下角已附出處，公開發布時請保留。
