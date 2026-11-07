import { describe, it, expect } from "vitest";
import { PACKAGES, packageWa, CONTACT_WA } from "../site-data";
describe("packages", () => {
  it("has five packages with exact prices", () => {
    expect(PACKAGES.map((p) => `${p.name} ${p.price}`)).toEqual(["BASIC Rp300.000","STARTER Rp699.000","PRO Rp900.000","PREMIUM Rp1.500.000","CUSTOM Rp7.000.000"]);
  });
  it("domains differ per package", () => {
    expect(PACKAGES.map((p) => p.domain)).toEqual([".vercel.app", ".com", ".com", ".com", ".com"]);
    expect(PACKAGES[0]?.admin).toBe(false);
  });
  it("WA links target the number with package name", () => {
    for (const p of PACKAGES) {
      const u = packageWa(p);
      expect(u.startsWith("https://wa.me/6285643672009?text=")).toBe(true);
      expect(decodeURIComponent(u)).toContain(`Paket Website ${p.name}`);
    }
    expect(CONTACT_WA).toContain("wa.me/6285643672009");
  });
});
