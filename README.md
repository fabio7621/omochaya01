# おもちゃ屋01 — 月面ドライブ・ログ

three.js 月面海報網頁（3D 場景 + 2D 排版），Vue 3 + Vite 版本。

## 開發

```bash
npm install
npm run dev        # 本機開發（http://localhost:5173）
npm run build      # 輸出到 dist/
npm run preview    # 預覽 build 結果
```

字型來自 Google Fonts，預覽時需要連網。three.js（0.160.0）已改由 npm 安裝。

## 目錄結構

```
index.html                 Vite 進入點（只放字型與 #app）
src/
  main.js                  建立 Vue app
  App.vue                  頁面骨架：導覽列 / 舞台 / 本店紹介 / 燈箱
  styles/base.css          色票、--u 單位、reset、版面模式說明
  config/poster.js         海報安全框比例（743:1005），版面與相機共用
  data/                    文案與清單（改內容只要動這裡）
    site.js                  logo、期數、首屏標題
    categories.js            漢堡選單的商品分類與次要連結
    shop.js                  本店紹介、營業資訊
  composables/             跨元件的狀態與行為
    useLayout.js             side / stack / phone / hoverable 版面模式
    useUi.js                 選單、本店紹介抽屜、地圖燈箱的開關與焦點
    useGlobalKeys.js         Esc 關閉、選單內 Tab 焦點循環
  components/
    layout/                  TopNav.vue、MenuButton.vue
    stage/                   MoonStage.vue（畫布與場景生命週期）、HeroTitle.vue、
                             SatelliteLock.vue、ScrollHint.vue
    menu/                    CategoryMenu.vue
    about/                   AboutPanel.vue、MapLightbox.vue
  three/                   3D 場景（純 JS，不依賴 Vue）
    createMoonScene.js       組裝場景、resize、每幀更新；對外只有這一個入口
    core/                    setup（renderer、共用 uniform）、view（相機與構圖）、
                             controls（滑鼠視差）、post（後製）、noise（CPU 雜訊）
    materials/               outline（描邊）、shadow（地面投影）
    objects/                 terrain、rocks、earth、sky（星空與月塵）、car、satellite
    shaders/                 各物件的 GLSL 字串
  assets/
    textures/                car.png、satellite.webp、earth_brc.jpg、earth_day.jpg
    images/                  shop-map.webp
legacy/                    改寫前的單檔版本（index.html + 圖片），僅供對照
```

### 版面模式

`<html>` 上的 class 決定排版，由 `useLayout.js` 依視窗尺寸切換：

- `side`：桌機寬螢幕，本店紹介是左側抽屜（點太空站的鎖定框開啟）
- `stack`：窄螢幕，本店紹介排在第一屏下方
- `phone`：比海報比例更窄，以整個螢幕為構圖框
- `hoverable`：有滑鼠的裝置才顯示太空站鎖定框

### 貼圖

- `earth_brc.jpg`：地球資料（R 高程 / G 陸地遮罩 / B 雲圖）
- `earth_day.jpg`：地表顏色
- `car.png`、`satellite.webp`：去背圖，在場景裡當 2D 立牌

## 授權
地球貼圖：Solar System Scope（CC BY 4.0），頁面右下角已附出處，公開發布時請保留。
