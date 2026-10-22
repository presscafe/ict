/**
 * ============================================================================
 * ZERO-PAUSE FREE GOOGLE SHEETS + GMAIL BACKEND FOR STOREFRONTS & LANDING PAGES
 * ============================================================================
 * WHY USE THIS FOR CATALOGS, QUOTE REQUESTS & FACEBOOK LANDING PAGES:
 * Unlike free database tiers that sleep or pause after 7 days of inactivity,
 * Google Sheets + Google Apps Script runs 24/7/365 on Google's infrastructure
 * for $0.00/month and NEVER pauses — even if 6 months pass between campaigns!
 *
 * 2-MINUTE SETUP INSIDE YOUR GOOGLE SHEET:
 * 1. Open your Google Sheet -> Extensions -> Apps Script -> paste this file.
 * 2. Click Deploy -> New deployment -> Type: "Web app":
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 3. Copy the Web App URL into your storefront `config.js` (`WEBHOOK_URL`).
 * ============================================================================
 */

const TARGET_TAB_NAME = "01_LIVE_DEALS_AND_REACTIVATION";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const raw = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
    const data = JSON.parse(raw);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(TARGET_TAB_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(TARGET_TAB_NAME);
      sheet.appendRow([
        "REF_ID",
        "CLIENT / ORGANIZATION",
        "CONTACT DETAILS",
        "REQUESTED SPEC & SIZES",
        "SOURCE CHANNEL",
        "QUOTED / TARGET VALUE (BWP)",
        "STATUS"
      ]);
    }

    const refId = "WEB-" + Utilities.formatDate(new Date(), "Africa/Gaborone", "yyyyMMdd-HHmmss");
    sheet.appendRow([
      refId,
      String(data.company || data.name || "Website Enquiry").slice(0, 140),
      String((data.name || "") + " · " + (data.phone || "") + " · " + (data.email || "")).slice(0, 180),
      String(data.items || data.spec || data.message || "").slice(0, 500),
      String(data.channel || "Web Storefront / Mockup Studio").slice(0, 80),
      Number(data.estimatedTotalBwp || 0) || "",
      "NEW — SEND VISUAL PROOF WITHIN 15 MIN"
    ]);

    // Optional instant email notification to the Google account owner
    const ownerEmail = Session.getEffectiveUser().getEmail();
    if (ownerEmail) {
      MailApp.sendEmail({
        to: ownerEmail,
        subject: "[NEW QUOTE LEAD " + refId + "] " + (data.company || data.name || "Storefront Lead"),
        body:
          "Reference: " + refId + "\n" +
          "Client: " + (data.company || data.name || "-") + "\n" +
          "Contact: " + (data.phone || "-") + " / " + (data.email || "-") + "\n" +
          "Requested Items / Dimensions:\n" + (data.items || data.spec || data.message || "-") + "\n\n" +
          "Action: Generate HD Visual Proof Card in Command Studio & reply on WhatsApp!"
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, refId: refId }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: "PressCafe Zero-Pause Google Sheets Lead Engine" }))
    .setMimeType(ContentService.MimeType.JSON);
}
