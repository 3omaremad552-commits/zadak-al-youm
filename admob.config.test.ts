import { describe, expect, it } from "vitest";

describe("AdMob configuration", () => {
  it("validates the configured Android App ID and Banner Unit ID", async () => {
    const appId = process.env.EXPO_PUBLIC_ADMOB_APP_ID_ANDROID;
    const bannerId = process.env.EXPO_PUBLIC_ADMOB_BANNER_UNIT_ID;
    expect(appId).toMatch(/^ca-app-pub-\d{16}~\d{10}$/);
    expect(bannerId).toMatch(/^ca-app-pub-\d{16}\/\d{10}$/);
    expect(appId).toBeTruthy();
    expect(bannerId).toBeTruthy();
  });
});
