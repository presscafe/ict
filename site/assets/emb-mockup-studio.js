/* ============================================================================
 * ZERO-DONGLE .EMB / .DST / LOGO VISUAL MOCKUP & WHATSAPP CONVERSION STUDIO
 * Pure Client-Side Browser Engine (Zero Server Cost · Zero Pause · Zero Leaks)
 * ============================================================================
 * Capabilities:
 *  1. Unpacks industrial Wilcom `.EMB` (OLE2 Compound Binary -> `DESIGN_ICON`
 *     stream -> skip 4-byte size header -> RFC1950 zlib stream via native
 *     `DecompressionStream('deflate')` -> 100x100 indexed BMP stitch preview!)
 *     WITH ZERO WILCOM DONGLE OR PAID DESKTOP SOFTWARE REQUIRED!
 *  2. Decodes industrial Tajima `.DST` 3-byte stitch records directly onto an
 *     offscreen stitch canvas at crisp vector-grade resolution!
 *  3. Auto-keys `.PNG` / `.JPG` / `.SVG` client logos (e.g. saved in 5 seconds
 *     from a prospect's Facebook page when they message `BW Branded Mats`!).
 *  4. Generates instant vector Shield Crests when pitching a school or company
 *     before downloading their file!
 *  5. Composites a 1600 x 1120 HD 4-in-1 Proof & 3-Tier Price Anchor Card ready
 *     to paste (`Ctrl+V`) or send on WhatsApp / Facebook Messenger in 15 sec!
 * ============================================================================ */

(function () {
  "use strict";

  const PRESETS = [
    {
      id: "bw-mat-qsr",
      group: "BW Branded Mats — Commercial Doorways",
      name: "KFC / Forecourt QSR Storefront",
      motto: "FRESH · FAST · SAFE ENTRY",
      initials: "QSR",
      mode: "mat-first",
      shirtColor: "#ffffff",
      blazerColor: "#b91c1c",
      matColor: "#1f2428",
      shieldPrimary: "#b91c1c",
      shieldAccent: "#f59e0b",
      matDim: "1500 × 900 mm",
      tier1Label: "Single Door Pilot (1× 1500×900mm)",
      tier1Bwp: 1950,
      tier2Label: "⭐ 2-Door Entrance + Counter Pack (Save 10%)",
      tier2Bwp: 3500,
      tier3Label: "10+ Multi-Store Rollout Rate (Each)",
      tier3Bwp: 1650,
      note: "High-footfall QSR & fuel forecourt doorway spec — bevelled non-slip safety edge + optional forecourt feather flags."
    },
    {
      id: "bw-mat-agency",
      group: "BW Branded Mats — Agency Reseller",
      name: "Agency / Corporate Lobby Spec",
      motto: "HEAVY-DUTY INLAID ENTRANCE MAT",
      initials: "CORP",
      mode: "mat-first",
      shirtColor: "#f8fafc",
      blazerColor: "#0f172a",
      matColor: "#1e2226",
      shieldPrimary: "#0f4c81",
      shieldAccent: "#eab308",
      matDim: "1500 × 900 mm / 1000 × 1000 mm",
      tier1Label: "1× Custom Logo Entrance Mat",
      tier1Bwp: 2140,
      tier2Label: "⭐ 3× Branch / Reception Pack (Save 12%)",
      tier2Bwp: 5650,
      tier3Label: "15+ Trade / Agency Batch Rate (Each)",
      tier3Bwp: 1490,
      note: "Fast Botswana production turnaround with zero cross-border delay — ideal for marketing agencies, banks, universities & malls."
    },
    {
      id: "sch-kgale",
      group: "82-School Drive Goldmine — Top Re-Order",
      name: "Kgale Hill CJSS",
      motto: "THUTO KE LESEDI",
      initials: "KHC",
      mode: "school",
      shirtColor: "#ffffff",
      blazerColor: "#1e3a5f",
      matColor: "#1f2428",
      shieldPrimary: "#1e3a5f",
      shieldAccent: "#fbbf24",
      matDim: "1500 × 900 mm Admin Mat",
      tier1Label: "100× Pre-Embroidered White Shirt Pockets",
      tier1Bwp: 4200,
      tier2Label: "⭐ 250× Pockets + 30 Prefect/Monitor Ties",
      tier2Bwp: 11900,
      tier3Label: "500× Bulk Pocket Pack + FREE Admin Logo Mat!",
      tier3Bwp: 19500,
      note: "Proven past pocket account (`KGALE HILL WHITE POCKET .EMB` + Prefect/Monitor/Monitress Ties ready in your Google Drive!)."
    },
    {
      id: "sch-goodhope",
      group: "82-School Drive Goldmine — Southern Home Turf",
      name: "Goodhope Senior Secondary",
      motto: "EXCELLENCE & DISCIPLINE",
      initials: "GSS",
      mode: "school",
      shirtColor: "#dbeafe",
      blazerColor: "#14532d",
      matColor: "#1f2428",
      shieldPrimary: "#14532d",
      shieldAccent: "#facc15",
      matDim: "1500 × 900 mm Admin Mat",
      tier1Label: "100× Embroidered Shirt Pockets",
      tier1Bwp: 4200,
      tier2Label: "⭐ 250× Pockets + 100 Embroidered Jerseys",
      tier2Bwp: 26500,
      tier3Label: "500× Pocket Pack + FREE Principal Office Mat!",
      tier3Bwp: 19500,
      note: "Southern District home-turf senior school — `GSS.EMB` ready in Google Drive with zero setup fee."
    },
    {
      id: "sch-moshupa",
      group: "82-School Drive Goldmine — Southern Home Turf",
      name: "Moshupa Senior & Manaana / Baitirile Cluster",
      motto: "TSWELELOPELE",
      initials: "MSS",
      mode: "school",
      shirtColor: "#ffffff",
      blazerColor: "#7f1d1d",
      matColor: "#1f2428",
      shieldPrimary: "#7f1d1d",
      shieldAccent: "#f59e0b",
      matDim: "1500 × 900 mm Admin Mat",
      tier1Label: "100× Pre-Embroidered Shirt Pockets",
      tier1Bwp: 4200,
      tier2Label: "⭐ 250× Pockets + 50 Embroidered Ties",
      tier2Bwp: 13200,
      tier3Label: "3-School Uniform Shop Trade Pack (750 Pockets)",
      tier3Bwp: 26250,
      note: "Pitch local Moshupa / Kanye / Lobatse uniform stockists — 3 complete schools digitized and ready!"
    },
    {
      id: "sch-jwaneng",
      group: "82-School Drive Goldmine — Jwaneng A2 Backyard",
      name: "Mahotshwane · Khuduga · Matsha Corridor",
      motto: "KGALAGADI CORRIDOR SCHOOLS",
      initials: "JWN",
      mode: "school",
      shirtColor: "#dbeafe",
      blazerColor: "#1e3a8a",
      matColor: "#1f2428",
      shieldPrimary: "#1e3a8a",
      shieldAccent: "#38bdf8",
      matDim: "1500 × 900 mm School Office Mat",
      tier1Label: "80× Complete Embroidered School Shirts",
      tier1Bwp: 10800,
      tier2Label: "⭐ 120× Embroidered Tracksuits + Shirts Bundle",
      tier2Bwp: 44400,
      tier3Label: "200× Pre-Embroidered Pockets Pack",
      tier3Bwp: 7600,
      note: "Right on your Jwaneng doorstep (`MAHOTSHWANE P SCH.EMB`, `khuduga p school TRACKTOP/SHIRT/JERSEY.EMB`, `Matsha College.EMB`)!"
    },
    {
      id: "sch-elite",
      group: "82-School Drive Goldmine — Elite Private Gaborone",
      name: "Baobab · Maru-a-Pula · Westwood · Thornhill · LKC",
      motto: "PRIVATE SCHOOL SPORTS & UNIFORM SUITE",
      initials: "BAO",
      mode: "school",
      shirtColor: "#ffffff",
      blazerColor: "#1f4d3a",
      matColor: "#1f2428",
      shieldPrimary: "#1f4d3a",
      shieldAccent: "#eab308",
      matDim: "1600 × 900 mm Campus Reception Mat",
      tier1Label: "60× Embroidered Sports Caps & Bush Hats",
      tier1Bwp: 6900,
      tier2Label: "⭐ 100× House Golfers + 60 Caps + 2 Entrance Mats",
      tier2Bwp: 28900,
      tier3Label: "Full Term Uniform & Sports Bag Embroidery Contract",
      tier3Bwp: 49500,
      note: "All 5 elite Gaborone schools (`BAOBAB PR SCHOOL2.EMB`, `MAP`, `Westwood`, `Thornhill`, `LKC.EMB`) are already in your Google Drive!"
    },
    {
      id: "sch-preschool",
      group: "82-School Drive Goldmine — Fast-Cash Pre-Schools (27 Ready!)",
      name: "Kidz Academy / Al-Haq / Little Kingdom Pre-School",
      motto: "GROWING BRIGHT FUTURES",
      initials: "KZA",
      mode: "school",
      shirtColor: "#fef9c3",
      blazerColor: "#0f766e",
      matColor: "#1f2428",
      shieldPrimary: "#0f766e",
      shieldAccent: "#f97316",
      matDim: "1500 × 900 mm Welcome Logo Mat",
      tier1Label: "60× Kids Embroidered Golfers / T-Shirts",
      tier1Bwp: 6600,
      tier2Label: "⭐ 80× T-Shirts + 80× Bucket Hats + FREE Door Mat!",
      tier2Bwp: 15800,
      tier3Label: "100× Winter Tracksuits + Summer Pack",
      tier3Bwp: 36500,
      note: "FASTEST 7-DAY CASH SECRET: Private pre-school owners decide in 24h without government tender bureaucracy!"
    }
  ];

  const state = {
    presetId: PRESETS[0].id,
    crestSourceLabel: "Instant Vector Shield (Drop any .EMB, .DST, .PNG or .JPG to override!)",
    crestCanvas: null,
    removeWhiteBg: true,
    scriptStage: "fb-mat"
  };

  /* ---------- 1. ZERO-DONGLE WILCOM `.EMB` OLE2 -> DESIGN_ICON BMP EXTRACTOR ---------- */
  async function inflateZlibBytes(uint8WithHeader) {
    if (typeof DecompressionStream === "undefined") {
      throw new Error("Browser does not support DecompressionStream");
    }
    for (const fmt of ["deflate", "deflate-raw"]) {
      try {
        const src = fmt === "deflate-raw" ? uint8WithHeader.subarray(2) : uint8WithHeader;
        const ds = new DecompressionStream(fmt);
        const writer = ds.writable.getWriter();
        writer.write(src);
        writer.close();
        const buf = await new Response(ds.readable).arrayBuffer();
        if (buf.byteLength > 64) return new Uint8Array(buf);
      } catch (_e) {
        /* try fallback deflate framing */
      }
    }
    throw new Error("Could not decompress embedded DESIGN_ICON stream");
  }

  async function extractEmbCrestBitmap(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    const dv = new DataView(arrayBuffer);

    // Check OLE2 Compound Document magic D0 CF 11 E0 A1 B1 1A E1
    if (
      bytes.length < 512 ||
      bytes[0] !== 0xd0 ||
      bytes[1] !== 0xcf ||
      bytes[2] !== 0x11 ||
      bytes[3] !== 0xe0
    ) {
      throw new Error("Not a valid OLE2 .EMB compound file");
    }

    const sectorShift = dv.getUint16(30, true);
    const sectorSize = 1 << sectorShift;
    const miniShift = dv.getUint16(32, true);
    const miniSectorSize = 1 << miniShift;
    const firstDirSid = dv.getUint32(48, true);
    const miniCutoff = dv.getUint32(56, true);
    const firstMiniFatSid = dv.getInt32(60, true);
    const numMiniFatSectors = dv.getUint32(64, true);

    const END_OF_CHAIN = -2;
    const FREE_SECT = -1;

    // Collect DIFAT entries (109 in header + optional extra DIFAT chain)
    const difat = [];
    for (let i = 0; i < 109; i++) {
      const sid = dv.getInt32(76 + i * 4, true);
      if (sid >= 0) difat.push(sid);
    }

    const fat = [];
    for (const fatSid of difat) {
      const off = (fatSid + 1) * sectorSize;
      for (let p = 0; p + 4 <= sectorSize && off + p + 4 <= bytes.length; p += 4) {
        fat.push(dv.getInt32(off + p, true));
      }
    }

    function readSectorChain(startSid, maxLen) {
      const chunks = [];
      let total = 0;
      let sid = startSid;
      let guard = 0;
      while (sid >= 0 && sid !== END_OF_CHAIN && sid !== FREE_SECT && guard++ < 65536) {
        const off = (sid + 1) * sectorSize;
        if (off >= bytes.length) break;
        const slice = bytes.subarray(off, Math.min(off + sectorSize, bytes.length));
        chunks.push(slice);
        total += slice.length;
        sid = fat[sid] !== undefined ? fat[sid] : END_OF_CHAIN;
      }
      const out = new Uint8Array(total);
      let pos = 0;
      for (const c of chunks) {
        out.set(c, pos);
        pos += c.length;
      }
      return maxLen !== undefined ? out.subarray(0, maxLen) : out;
    }

    const dirBytes = readSectorChain(firstDirSid);
    const dirView = new DataView(dirBytes.buffer, dirBytes.byteOffset, dirBytes.byteLength);

    let rootStartSid = -1;
    let targetEntry = null;

    for (let off = 0; off + 128 <= dirBytes.length; off += 128) {
      const nameBytesLen = dirView.getUint16(off + 64, true);
      const objType = dirBytes[off + 66];
      if (objType === 0 || nameBytesLen < 2) continue;
      let name = "";
      for (let j = 0; j + 2 < nameBytesLen; j += 2) {
        name += String.fromCharCode(dirView.getUint16(off + j, true));
      }
      const startSid = dirView.getInt32(off + 116, true);
      const sizeLow = dirView.getUint32(off + 120, true);
      if (objType === 5) rootStartSid = startSid;
      if (
        name.toUpperCase() === "DESIGN_ICON" ||
        (name.toUpperCase().includes("ICON") && !targetEntry)
      ) {
        targetEntry = { name, startSid, size: sizeLow };
      }
    }

    if (!targetEntry) {
      throw new Error("No embedded preview icon found inside .EMB container");
    }

    let rawStream;
    if (targetEntry.size < miniCutoff && firstMiniFatSid >= 0 && rootStartSid >= 0) {
      const miniFatBytes = readSectorChain(firstMiniFatSid, numMiniFatSectors * sectorSize);
      const miniFatView = new DataView(
        miniFatBytes.buffer,
        miniFatBytes.byteOffset,
        miniFatBytes.byteLength
      );
      const miniStream = readSectorChain(rootStartSid);
      const out = new Uint8Array(targetEntry.size);
      let msid = targetEntry.startSid;
      let written = 0;
      let guard = 0;
      while (msid >= 0 && written < targetEntry.size && guard++ < 16384) {
        const mOff = msid * miniSectorSize;
        const take = Math.min(miniSectorSize, targetEntry.size - written);
        out.set(miniStream.subarray(mOff, mOff + take), written);
        written += take;
        msid = msid * 4 + 4 <= miniFatBytes.length ? miniFatView.getInt32(msid * 4, true) : END_OF_CHAIN;
      }
      rawStream = out;
    } else {
      rawStream = readSectorChain(targetEntry.startSid, targetEntry.size);
    }

    // Wilcom DESIGN_ICON prefixes 4-byte uncompressed length before standard 0x78 zlib stream
    let payload = rawStream;
    if (!(payload[0] === 0x42 && payload[1] === 0x4d)) {
      payload = await inflateZlibBytes(rawStream.subarray(4));
    }

    const blob = new Blob([payload], { type: "image/bmp" });
    return await bitmapBlobToKeyedCanvas(blob);
  }

  /* ---------- 2. ZERO-DONGLE TAJIMA `.DST` STITCH RENDERER ---------- */
  function decodeDstToCanvas(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    if (bytes.length <= 512) throw new Error(".DST file too short");

    const stitches = [];
    let x = 0;
    let y = 0;
    let minX = 0, maxX = 0, minY = 0, maxY = 0;
    let colorIdx = 0;

    for (let i = 512; i + 2 < bytes.length; i += 3) {
      const b1 = bytes[i];
      const b2 = bytes[i + 1];
      const b3 = bytes[i + 2];
      if (b1 === 0x00 && b2 === 0x00 && b3 === 0xf3) break;

      let dx = 0;
      let dy = 0;
      if (b1 & 0x01) dx += 1;
      if (b1 & 0x02) dx -= 1;
      if (b1 & 0x04) dx += 9;
      if (b1 & 0x08) dx -= 9;
      if (b1 & 0x80) dy += 1;
      if (b1 & 0x40) dy -= 1;
      if (b1 & 0x20) dy += 9;
      if (b1 & 0x10) dy -= 9;

      if (b2 & 0x01) dx += 3;
      if (b2 & 0x02) dx -= 3;
      if (b2 & 0x04) dx += 27;
      if (b2 & 0x08) dx -= 27;
      if (b2 & 0x80) dy += 3;
      if (b2 & 0x40) dy -= 3;
      if (b2 & 0x20) dy += 27;
      if (b2 & 0x10) dy -= 27;

      if (b3 & 0x04) dx += 81;
      if (b3 & 0x08) dx -= 81;
      if (b3 & 0x20) dy += 81;
      if (b3 & 0x10) dy -= 81;

      const isColorStop = (b3 & 0xc0) === 0xc0;
      const isJump = (b3 & 0x80) === 0x80 && !isColorStop;

      const nx = x + dx;
      const ny = y - dy;
      if (!isJump && !isColorStop) {
        stitches.push({ x1: x, y1: y, x2: nx, y2: ny, c: colorIdx });
        if (nx < minX) minX = nx;
        if (nx > maxX) maxX = nx;
        if (ny < minY) minY = ny;
        if (ny > maxY) maxY = ny;
      }
      if (isColorStop) colorIdx++;
      x = nx;
      y = ny;
    }

    const palette = ["#facc15", "#ef4444", "#ffffff", "#22c55e", "#38bdf8", "#f97316"];
    const size = 420;
    const cv = document.createElement("canvas");
    cv.width = size;
    cv.height = size;
    const ctx = cv.getContext("2d");
    const span = Math.max(maxX - minX, maxY - minY, 1);
    const scale = (size * 0.86) / span;
    const ox = (size - (maxX - minX) * scale) / 2 - minX * scale;
    const oy = (size - (maxY - minY) * scale) / 2 - minY * scale;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 1.65;
    for (const s of stitches) {
      ctx.strokeStyle = palette[s.c % palette.length];
      ctx.beginPath();
      ctx.moveTo(s.x1 * scale + ox, s.y1 * scale + oy);
      ctx.lineTo(s.x2 * scale + ox, s.y2 * scale + oy);
      ctx.stroke();
    }
    return cv;
  }

  /* ---------- 3. IMAGE / BMP LOADER WITH SMART BACKGROUND KEYING ---------- */
  function bitmapBlobToKeyedCanvas(blobOrFile) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(blobOrFile);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        const scale = Math.min(480 / Math.max(img.width, img.height, 1), 4);
        const w = Math.max(1, Math.round(img.width * scale));
        const h = Math.max(1, Math.round(img.height * scale));
        const cv = document.createElement("canvas");
        cv.width = w;
        cv.height = h;
        const ctx = cv.getContext("2d");
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, w, h);

        if (state.removeWhiteBg) {
          const imgData = ctx.getImageData(0, 0, w, h);
          const d = imgData.data;
          // Sample top-left corner background colour (handles white or grey Wilcom icon canvas)
          const bgR = d[0], bgG = d[1], bgB = d[2];
          for (let p = 0; p < d.length; p += 4) {
            const distCorner =
              Math.abs(d[p] - bgR) + Math.abs(d[p + 1] - bgG) + Math.abs(d[p + 2] - bgB);
            const nearPureWhite = d[p] > 244 && d[p + 1] > 244 && d[p + 2] > 244;
            if (distCorner < 34 || nearPureWhite) {
              d[p + 3] = 0;
            }
          }
          ctx.putImageData(imgData, 0, 0);
        }
        resolve(cv);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Could not decode image format"));
      };
      img.src = url;
    });
  }

  /* ---------- 4. INSTANT VECTOR CREST SHIELD WHEN NO FILE IS DROPPED YET ---------- */
  function buildVectorCrestCanvas(brandName, motto, initials, primaryHex, accentHex) {
    const cv = document.createElement("canvas");
    cv.width = 420;
    cv.height = 420;
    const ctx = cv.getContext("2d");

    ctx.save();
    // Classic embroidered shield silhouette
    ctx.beginPath();
    ctx.moveTo(210, 28);
    ctx.lineTo(356, 68);
    ctx.lineTo(344, 224);
    ctx.quadraticCurveTo(332, 326, 210, 388);
    ctx.quadraticCurveTo(88, 326, 76, 224);
    ctx.lineTo(64, 68);
    ctx.closePath();

    ctx.fillStyle = primaryHex;
    ctx.fill();
    ctx.lineWidth = 13;
    ctx.strokeStyle = accentHex;
    ctx.stroke();

    // Inner satin stitch border
    ctx.strokeStyle = "rgba(255,255,255,0.65)";
    ctx.setLineDash([7, 4]);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.setLineDash([]);

    // Crown / star bar
    ctx.fillStyle = accentHex;
    ctx.font = "700 28px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("★   ★   ★", 210, 108);

    // Bold monogram / initials
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 78px system-ui, -apple-system, sans-serif";
    ctx.fillText((initials || "BDB").slice(0, 5).toUpperCase(), 210, 205);

    // Ribbon banner across lower shield
    ctx.fillStyle = accentHex;
    ctx.fillRect(54, 246, 312, 46);
    ctx.fillStyle = "#111827";
    ctx.font = "800 18px system-ui, -apple-system, sans-serif";
    ctx.fillText((motto || "EXCELLENCE").slice(0, 26).toUpperCase(), 210, 276);

    // Short brand arc label
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 17px system-ui, -apple-system, sans-serif";
    ctx.fillText((brandName || "").slice(0, 22).toUpperCase(), 210, 328);
    ctx.restore();
    return cv;
  }

  /* ---------- 5. PHOTOREALISTIC 1600x1120 HD 4-PANEL PROOF CARD RENDERER ---------- */
  function drawFabricWeave(ctx, x, y, w, h, hex, weaveAlpha) {
    ctx.save();
    ctx.fillStyle = hex;
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = `rgba(0,0,0,${weaveAlpha || 0.045})`;
    ctx.lineWidth = 1;
    for (let gx = x; gx < x + w; gx += 6) {
      ctx.beginPath();
      ctx.moveTo(gx, y);
      ctx.lineTo(gx, y + h);
      ctx.stroke();
    }
    for (let gy = y; gy < y + h; gy += 6) {
      ctx.beginPath();
      ctx.moveTo(x, gy);
      ctx.lineTo(x + w, gy);
      ctx.stroke();
    }
    ctx.restore();
  }

  function renderProofCard() {
    const canvas = document.getElementById("mockup-proof-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const name = (document.getElementById("mk-name").value || "Client Organization").trim();
    const motto = (document.getElementById("mk-motto").value || "QUALITY · PRIDE").trim();
    const initials = (document.getElementById("mk-init").value || "BDB").trim();
    const shirtHex = document.getElementById("mk-shirt").value;
    const blazerHex = document.getElementById("mk-blazer").value;
    const matDim = (document.getElementById("mk-matdim").value || "1500 × 900 mm").trim();
    const primaryHex = document.getElementById("mk-primary").value;
    const accentHex = document.getElementById("mk-accent").value;

    const t1Label = document.getElementById("mk-t1-label").value;
    const t1Price = Number(document.getElementById("mk-t1-price").value || 0);
    const t2Label = document.getElementById("mk-t2-label").value;
    const t2Price = Number(document.getElementById("mk-t2-price").value || 0);
    const t3Label = document.getElementById("mk-t3-label").value;
    const t3Price = Number(document.getElementById("mk-t3-price").value || 0);

    const crest =
      state.crestCanvas || buildVectorCrestCanvas(name, motto, initials, primaryHex, accentHex);

    // Master 1600x1120 canvas background
    ctx.clearRect(0, 0, 1600, 1120);
    ctx.fillStyle = "#f4f6f8";
    ctx.fillRect(0, 0, 1600, 1120);

    // Top Executive Header Bar
    ctx.fillStyle = "#16382b";
    ctx.fillRect(0, 0, 1600, 108);
    ctx.fillStyle = "#eab308";
    ctx.fillRect(0, 104, 1600, 5);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 31px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("DIGITAL VISUAL PROOF — " + name.toUpperCase(), 44, 52);
    ctx.fillStyle = "#d1fae5";
    ctx.font = "500 19px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      "Branding & Decoration Botswana · BW Branded Mats  |  Gaborone · Jwaneng · Nationwide Delivery",
      44,
      84
    );

    ctx.textAlign = "right";
    ctx.fillStyle = "#fde68a";
    ctx.font = "700 18px system-ui, -apple-system, sans-serif";
    ctx.fillText("PRE-PRODUCTION VISUAL SAMPLE", 1556, 52);
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "500 16px system-ui, -apple-system, sans-serif";
    ctx.fillText("100% Approved Before Stitching / Moulding", 1556, 82);
    ctx.textAlign = "left";

    // ---------------- PANEL A (TOP LEFT): EMBROIDERED SHIRT POCKET ----------------
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(38, 134, 480, 560);
    drawFabricWeave(ctx, 56, 196, 444, 478, shirtHex, 0.04);

    // Shirt pocket shape + realistic top-stitch seam
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(148, 250);
    ctx.lineTo(408, 250);
    ctx.lineTo(408, 520);
    ctx.lineTo(278, 588);
    ctx.lineTo(148, 520);
    ctx.closePath();
    ctx.shadowColor = "rgba(0,0,0,0.16)";
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 6;
    ctx.fillStyle = shirtHex;
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "rgba(30,41,59,0.28)";
    ctx.stroke();

    // Pocket top hem + dashed twin-needle sewing line
    ctx.beginPath();
    ctx.moveTo(148, 294);
    ctx.lineTo(408, 294);
    ctx.stroke();
    ctx.setLineDash([6, 5]);
    ctx.strokeStyle = "rgba(51,65,85,0.45)";
    ctx.strokeRect(156, 258, 244, 258);
    ctx.setLineDash([]);

    // Embroidered crest on pocket with realistic thread elevation shadow
    ctx.shadowColor = "rgba(0,0,0,0.28)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 2;
    ctx.drawImage(crest, 193, 314, 170, 170);
    ctx.restore();

    ctx.fillStyle = "#0f172a";
    ctx.font = "800 20px system-ui, -apple-system, sans-serif";
    ctx.fillText("A. EMBROIDERED SHIRT POCKET", 56, 172);

    // ---------------- PANEL B (TOP MIDDLE): BLAZER / CORPORATE GOLFER ----------------
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(542, 134, 480, 560);
    drawFabricWeave(ctx, 560, 196, 444, 478, blazerHex, 0.09);

    // Subtle lapel / collar V-line
    ctx.save();
    ctx.strokeStyle = "rgba(255,255,255,0.16)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(560, 210);
    ctx.lineTo(710, 470);
    ctx.lineTo(665, 674);
    ctx.stroke();

    // Left-chest embroidered crest on dark garment
    ctx.shadowColor = "rgba(0,0,0,0.42)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 3;
    ctx.drawImage(crest, 742, 310, 186, 186);
    ctx.restore();

    ctx.fillStyle = "rgba(255,255,255,0.88)";
    ctx.font = "700 15px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("LEFT-CHEST EMBROIDERY SPEC (85–95 mm)", 782, 646);
    ctx.textAlign = "left";

    ctx.fillStyle = "#0f172a";
    ctx.font = "800 20px system-ui, -apple-system, sans-serif";
    ctx.fillText("B. BLAZER / GOLFER / TRACKTOP", 560, 172);

    // ---------------- PANEL C (TOP RIGHT): BW BRANDED RUBBER ENTRANCE MAT ----------------
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(1046, 134, 516, 560);

    // Stone floor tile backdrop
    ctx.fillStyle = "#cbd5e1";
    ctx.fillRect(1064, 196, 480, 478);
    ctx.strokeStyle = "rgba(100,116,139,0.25)";
    ctx.lineWidth = 2;
    ctx.strokeRect(1064, 355, 480, 160);

    // Heavy-duty black/charcoal bevelled rubber mat frame
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.42)";
    ctx.shadowBlur = 22;
    ctx.shadowOffsetY = 10;
    ctx.fillStyle = "#111317";
    ctx.fillRect(1092, 266, 424, 310);
    ctx.restore();

    // Inner ribbed charcoal rubber surface
    drawFabricWeave(ctx, 1110, 284, 388, 274, "#23272e", 0.16);
    ctx.strokeStyle = "#3f4652";
    ctx.lineWidth = 3;
    ctx.strokeRect(1110, 284, 388, 274);

    // Inlaid centre logo + brand lettering on mat
    ctx.drawImage(crest, 1226, 304, 156, 156);
    ctx.fillStyle = "#f8fafc";
    ctx.font = "800 22px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(name.slice(0, 24).toUpperCase(), 1304, 496);
    ctx.fillStyle = "#fbbf24";
    ctx.font = "700 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(motto.slice(0, 32).toUpperCase(), 1304, 520);

    // Dimension callout bar below mat
    ctx.fillStyle = "#0f172a";
    ctx.font = "800 17px system-ui, -apple-system, sans-serif";
    ctx.fillText("◀  HEAVY-DUTY BEVELLED MAT: " + matDim + "  ▶", 1304, 628);
    ctx.font = "600 14px system-ui, -apple-system, sans-serif";
    ctx.fillStyle = "#334155";
    ctx.fillText("UV-Stable · Non-Slip Safety Edge · High-Pressure Washable", 1304, 654);
    ctx.textAlign = "left";

    ctx.fillStyle = "#0f172a";
    ctx.font = "800 20px system-ui, -apple-system, sans-serif";
    ctx.fillText("C. BW BRANDED ENTRANCE MAT", 1064, 172);

    // ---------------- PANEL D (BOTTOM FULL WIDTH): 3-TIER PRICE ANCHOR ----------------
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(38, 718, 1524, 290);
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 2;
    ctx.strokeRect(38, 718, 1524, 290);

    const tiers = [
      { title: "OPTION 1 · STARTER / PILOT", sub: t1Label, bwp: t1Price, highlight: false },
      { title: "OPTION 2 · MOST POPULAR VALUE", sub: t2Label, bwp: t2Price, highlight: true },
      { title: "OPTION 3 · BULK / ROLLOUT RATE", sub: t3Label, bwp: t3Price, highlight: false }
    ];

    tiers.forEach((t, idx) => {
      const bx = 62 + idx * 498;
      const by = 744;
      const bw = 478;
      const bh = 238;
      ctx.fillStyle = t.highlight ? "#ecfdf5" : "#f8fafc";
      ctx.fillRect(bx, by, bw, bh);
      ctx.strokeStyle = t.highlight ? "#15803d" : "#cbd5e1";
      ctx.lineWidth = t.highlight ? 4 : 2;
      ctx.strokeRect(bx, by, bw, bh);

      ctx.fillStyle = t.highlight ? "#15803d" : "#334155";
      ctx.font = "800 17px system-ui, -apple-system, sans-serif";
      ctx.fillText(t.title, bx + 24, by + 40);

      ctx.fillStyle = "#0f172a";
      ctx.font = "700 20px system-ui, -apple-system, sans-serif";
      ctx.fillText(t.sub.slice(0, 42), bx + 24, by + 84);

      ctx.fillStyle = "#16382b";
      ctx.font = "900 46px system-ui, -apple-system, sans-serif";
      ctx.fillText("P " + t.bwp.toLocaleString("en-BW"), bx + 24, by + 158);

      ctx.fillStyle = "#475569";
      ctx.font = "600 15px system-ui, -apple-system, sans-serif";
      ctx.fillText("Includes Free Digital Proof Approval Before Production", bx + 24, by + 204);
    });

    // Bottom Terms Strip
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 1032, 1600, 88);
    ctx.fillStyle = "#f8fafc";
    ctx.font = "700 18px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "ORDER TERMS: Confirm Exact Dimensions / Garment Sizes  •  100% Upfront Payment Prior to Dispatch  •  Nationwide Botswana Courier at Client's Cost",
      800,
      1083
    );
    ctx.textAlign = "left";

    updateWhatsAppScript();
  }

  /* ---------- 6. HIGH-CONVERTING WHATSAPP / FACEBOOK CLOSING SCRIPTS ---------- */
  function updateWhatsAppScript() {
    const box = document.getElementById("mk-script-preview");
    if (!box) return;
    const name = (document.getElementById("mk-name").value || "your team").trim();
    const matDim = (document.getElementById("mk-matdim").value || "1500 × 900 mm").trim();
    const t1L = document.getElementById("mk-t1-label").value;
    const t1P = Number(document.getElementById("mk-t1-price").value || 0).toLocaleString("en-BW");
    const t2L = document.getElementById("mk-t2-label").value;
    const t2P = Number(document.getElementById("mk-t2-price").value || 0).toLocaleString("en-BW");
    const t3L = document.getElementById("mk-t3-label").value;
    const t3P = Number(document.getElementById("mk-t3-price").value || 0).toLocaleString("en-BW");

    const scripts = {
      "fb-mat":
        `Dumelang ${name}! 👋 Thank you for messaging BW Branded Mats.\n\n` +
        `I have already mocked up YOUR logo onto our heavy-duty bevelled entrance mat (${matDim}) + staff uniform preview — attached right above so you can see how crisp it looks at your entrance! 🔥\n\n` +
        `HERE ARE YOUR 3 OPTIONS:\n` +
        `1️⃣ ${t1L}: *P ${t1P}*\n` +
        `2️⃣ ${t2L}: *P ${t2P}*\n` +
        `3️⃣ ${t3L}: *P ${t3P}*\n\n` +
        `✅ Built for Botswana sun, dust & heavy foot traffic (non-slip safety edge, washable with pressure hose).\n` +
        `✅ Fast local Botswana turnaround — zero border delays!\n` +
        `✅ Terms: 100% settlement on artwork sign-off; Gaborone collection or nationwide courier at client's cost.\n\n` +
        `Would Option 1 or Option 2 suit your doorway best? Send me your email/company name and I will issue your formal invoice now!`,

      "school-pitch":
        `Good day Principal / Bursar — ${name},\n\n` +
        `Greetings from Branding & Decoration Botswana! We already hold your pre-digitized school embroidery crest ready to stitch with *ZERO setup or digitizing fee* — please see your attached visual sample sheet showing your crest on shirt pockets, blazers/jerseys, and a custom reception mat.\n\n` +
        `FAST-TURNAROUND BACK-TO-SCHOOL SUPPLY OPTIONS:\n` +
        `• ${t1L}: *P ${t1P}*\n` +
        `• ${t2L}: *P ${t2P}*\n` +
        `• ${t3L}: *P ${t3P}*\n\n` +
        `We also supply plain/embroidered shirts, jerseys, ties, tracksuits & sports caps nationwide across Botswana.\n\n` +
        `May we drop off / courier a stitched physical pocket sample for your Uniform Committee this week?`,

      "nudge-48h":
        `Hi ${name}! 👋 Just checking in on the digital visual mockup I sent through for your ${matDim} branded entrance mat / uniform crest.\n\n` +
        `We are scheduling this week's production batch now — if you confirm Option 1 (*P ${t1P}*) or Option 2 (*P ${t2P}*) today, we slot your order straight into this week's run! Shall I send the invoice across?`,

      "agency-partner":
        `Hi ${name} — quick trade note from Branding & Decoration Botswana / BW Branded Mats!\n\n` +
        `Whenever your agency is pitching corporate, bank, mine, or parastatal clients who need heavy-duty custom logo entrance mats, embroidered workwear, school/sports kits, or forecourt flags, send us their logo on WhatsApp — we send you back a *white-label HD visual proof* like the one above in 15 minutes + protected agency trade rates (${t3L}: *P ${t3P}*).\n\n` +
        `Got any live client RFQs on your desk this week we can price together?`
    };

    box.textContent = scripts[state.scriptStage] || scripts["fb-mat"];
  }

  function applyPreset(presetId) {
    const p = PRESETS.find((x) => x.id === presetId) || PRESETS[0];
    state.presetId = p.id;
    document.getElementById("mk-name").value = p.name;
    document.getElementById("mk-motto").value = p.motto;
    document.getElementById("mk-init").value = p.initials;
    document.getElementById("mk-shirt").value = p.shirtColor;
    document.getElementById("mk-blazer").value = p.blazerColor;
    document.getElementById("mk-matdim").value = p.matDim;
    document.getElementById("mk-primary").value = p.shieldPrimary;
    document.getElementById("mk-accent").value = p.shieldAccent;
    document.getElementById("mk-t1-label").value = p.tier1Label;
    document.getElementById("mk-t1-price").value = p.tier1Bwp;
    document.getElementById("mk-t2-label").value = p.tier2Label;
    document.getElementById("mk-t2-price").value = p.tier2Bwp;
    document.getElementById("mk-t3-label").value = p.tier3Label;
    document.getElementById("mk-t3-price").value = p.tier3Bwp;
    document.getElementById("mk-preset-note").textContent = p.note;
    state.scriptStage = p.mode === "school" ? "school-pitch" : "fb-mat";
    document.querySelectorAll("[data-script-stage]").forEach((b) => {
      b.classList.toggle("active", b.dataset.scriptStage === state.scriptStage);
    });
    renderProofCard();
  }

  async function handleArtworkFile(file) {
    if (!file) return;
    const statusEl = document.getElementById("mk-file-status");
    const upper = file.name.toUpperCase();
    try {
      statusEl.textContent = "Extracting " + file.name + " locally in your browser...";
      if (upper.endsWith(".EMB")) {
        const buf = await file.arrayBuffer();
        state.crestCanvas = await extractEmbCrestBitmap(buf);
        state.crestSourceLabel = "Extracted Live from Wilcom .EMB (" + file.name + " — Zero Dongle!)";
      } else if (upper.endsWith(".DST")) {
        const buf = await file.arrayBuffer();
        state.crestCanvas = decodeDstToCanvas(buf);
        state.crestSourceLabel = "Rendered Live from Tajima .DST Stitches (" + file.name + ")";
      } else {
        state.crestCanvas = await bitmapBlobToKeyedCanvas(file);
        state.crestSourceLabel = "Loaded Client Logo (" + file.name + ")";
      }
      // Auto-populate name from filename if cleanly named
      const stem = file.name.replace(/\.(emb|dst|png|jpe?g|svg|webp)$/i, "").replace(/\s*\(\d+\)\s*$/, "").trim();
      if (stem.length >= 2) {
        document.getElementById("mk-name").value = stem;
      }
      statusEl.textContent = "✅ " + state.crestSourceLabel;
      renderProofCard();
    } catch (err) {
      statusEl.textContent = "⚠️ " + err.message + " — kept vector shield crest active.";
    }
  }

  function initMockupStudio() {
    const sel = document.getElementById("mk-preset-select");
    if (!sel) return;

    for (const p of PRESETS) {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.group + " — " + p.name;
      sel.appendChild(opt);
    }

    sel.addEventListener("change", () => applyPreset(sel.value));

    const fileInput = document.getElementById("mk-file-input");
    fileInput.addEventListener("change", (ev) => {
      if (ev.target.files && ev.target.files[0]) handleArtworkFile(ev.target.files[0]);
    });

    const bgToggle = document.getElementById("mk-key-bg");
    bgToggle.addEventListener("change", () => {
      state.removeWhiteBg = bgToggle.checked;
      if (fileInput.files && fileInput.files[0]) handleArtworkFile(fileInput.files[0]);
      else renderProofCard();
    });

    document.getElementById("btn-reset-crest").addEventListener("click", () => {
      state.crestCanvas = null;
      document.getElementById("mk-file-status").textContent =
        "Using instant generated vector shield (drop any .EMB, .DST, .PNG or .JPG file anytime).";
      renderProofCard();
    });

    [
      "mk-name", "mk-motto", "mk-init", "mk-shirt", "mk-blazer", "mk-matdim",
      "mk-primary", "mk-accent", "mk-t1-label", "mk-t1-price",
      "mk-t2-label", "mk-t2-price", "mk-t3-label", "mk-t3-price"
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", renderProofCard);
    });

    document.querySelectorAll("[data-script-stage]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.scriptStage = btn.dataset.scriptStage;
        document.querySelectorAll("[data-script-stage]").forEach((b) =>
          b.classList.toggle("active", b === btn)
        );
        updateWhatsAppScript();
      });
    });

    document.getElementById("btn-download-proof").addEventListener("click", () => {
      const canvas = document.getElementById("mockup-proof-canvas");
      const slug = (document.getElementById("mk-name").value || "proof")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      const a = document.createElement("a");
      a.download = "BDB-Visual-Proof-" + (slug || "quote") + ".png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    });

    document.getElementById("btn-copy-proof-img").addEventListener("click", () => {
      const canvas = document.getElementById("mockup-proof-canvas");
      const btn = document.getElementById("btn-copy-proof-img");
      canvas.toBlob(async (blob) => {
        try {
          if (blob && navigator.clipboard && window.ClipboardItem) {
            await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
            btn.textContent = "✅ Image Copied! Press Ctrl+V in WhatsApp / Messenger!";
            setTimeout(() => {
              btn.textContent = "Copy Proof Image to Clipboard (Ctrl+V in WhatsApp)";
            }, 3200);
          }
        } catch (_e) {
          btn.textContent = "Use Download HD PNG button below";
        }
      }, "image/png");
    });

    document.getElementById("btn-copy-mk-script").addEventListener("click", () => {
      const txt = document.getElementById("mk-script-preview").textContent;
      navigator.clipboard?.writeText(txt);
      const btn = document.getElementById("btn-copy-mk-script");
      btn.textContent = "✅ Closing Script Copied!";
      setTimeout(() => {
        btn.textContent = "Copy WhatsApp / Messenger Script";
      }, 2500);
    });

    applyPreset(PRESETS[0].id);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMockupStudio);
  } else {
    initMockupStudio();
  }
})();
