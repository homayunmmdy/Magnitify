import { CgFeed } from "react-icons/cg";
import { MdOutlineMail, MdOutlinePostAdd } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiCloudflarepages } from "react-icons/si";
import { TbNewSection } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { adminPages } from "../../config/adminPage";

describe("adminPages", () => {
  const AmountAdminPages = 8
    describe("Structure and Content", () => {
      it("should have correct number of admin pages", () => {
        expect(adminPages).toHaveLength(AmountAdminPages);
      });
  
      it("should have valid structure for each admin page", () => {
        adminPages.forEach((page) => {
          expect(page).toHaveProperty("name");
          expect(page).toHaveProperty("href");
          expect(page).toHaveProperty("icon");
          expect(typeof page.name).toBe("string");
          expect(typeof page.href).toBe("string");
        });
      });
  
      it("should have proper icon components", () => {
        const iconComponents = [
          TiHome,
          CgFeed,
          MdOutlinePostAdd,
          RiAdvertisementLine,
          SiCloudflarepages,
          TbNewSection,
          MdOutlineMail,
          PiPhoneCallFill,
        ];
  
        adminPages.forEach((page) => {
          expect(iconComponents).toContain(page.icon);
        });
      });
    });
  
    describe("Routing", () => {
      it("should have valid href formats", () => {
        adminPages.forEach((page) => {
          expect(page.href).toMatch(/^\/admin/);
        });
      });
  
      it("should have unique hrefs", () => {
        const hrefs = adminPages.map((page) => page.href);
        const uniqueHrefs = new Set(hrefs);
        expect(hrefs.length).toBe(uniqueHrefs.size);
      });
  
      it("should maintain proper admin route hierarchy", () => {
        const mainAdminPage = adminPages.find((page) => page.name === "Admin");
        expect(mainAdminPage?.href).toBe("/admin");
  
        const subPages = adminPages.filter((page) => page.name !== "Admin");
        subPages.forEach((page) => {
          expect(page.href).toMatch(/^\/admin\//);
        });
      });
    });
  });