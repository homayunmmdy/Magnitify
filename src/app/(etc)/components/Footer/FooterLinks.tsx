import Link from "next/link";

const FooterLinks = () => {
  return (
    <>
      <div className="col-span-full block text-center min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:py-16 xl:pl-5 xl:text-left">
        <p className="mb-9 text-lg font-bold">تماس بگیرید</p>
        <ul className="gap-6transition-all grid duration-500">
          <li>homayoun763@gmail.com</li>
          <li>+922 4003 487</li>
        </ul>
      </div>
      <div className="col-span-full block min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:py-16">
        <p className="mb-9 text-center text-lg font-bold xl:text-left">
          لینک های سریع
        </p>
        <div className="flex gap-6 max-xl:justify-center xl:gap-12">
          <ul className="grid gap-6 transition-all duration-500">
            <li>
              <Link className="link-hover link hover:text-indigo-700" href="/">
                خانه
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/FAQs"
              >
                سوالات متدوال
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/privacy_policy"
              >
                سیاست حفظ حریم خصوصی
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/tickets/new"
              >
                تیکت جدید
              </Link>
            </li>
          </ul>
          <ul className="grid gap-6 transition-all duration-500">
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/contribution"
              >
                مشارکت ها
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/about"
              >
                درباره ما{" "}
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/contacts"
              >
                تماس باما
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/time"
              >
                وقت
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
