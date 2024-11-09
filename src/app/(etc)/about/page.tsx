import SiteConfig from "@/etc/config/stie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SiteConfig.name} | هوش مصنوعی | کسب و کار | صفحه درباره ما`,
  description:
    "ارائه مقالاتی با کیفیت بالا است که الهام بخش و خوانندگان خود را در مورد آخرین روندهای مصنوعی مطلع کنید هوش، استراتژی های کسب و کار و توسعه فردی",
  keywords:
    `${SiteConfig.name},سایت ${SiteConfig.name} , ${SiteConfig.name} چیست ,  ${SiteConfig.name} فارسی, درباره ما ${SiteConfig.name} , درباره  ${SiteConfig.name}`  ,
  alternates: {
    canonical: `${SiteConfig.siteURL}/about`,
  },
  publisher : "همایون محمدی"
};

const About = () => {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold">درباره ما</h1>
        <div className="b overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6">
              به وبلاگ {SiteConfig.name} خوش آمدید
            </h3>
            <p className="mt-1 max-w-2xl text-sm">
              بینش‌هایی را در مورد هوش مصنوعی، کسب‌وکار و توسعه فردی کشف کنید.
            </p>
          </div>
          <div className="border-t shadow-lg">
            <dl>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">هدف ما</dt>
                <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                  هدف ما ارائه مقالاتی با کیفیت بالا است که الهام بخش و
                  خوانندگان خود را در مورد آخرین روندهای مصنوعی مطلع کنید هوش،
                  استراتژی های کسب و کار و توسعه فردی
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">آنچه ما ارائه می دهیم</dt>
                <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                  وبلاگ ما دارای مقالات عمیق، راهنماهای نحوه کار و متخصص است
                  نظرات در مورد:
                  <ul className="ml-5 mt-2 list-disc">
                    <li>هوش مصنوعی</li>
                    <li>کسب و کار</li>
                    <li>توسعه فردی</li>
                    <li>بیوگرافی</li>
                    <li>تاریخ</li>
                    <li>تجربیات</li>
                  </ul>
                </dd>
              </div>

              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">درباره نکسا</dt>
                <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                  نکسا مدیر مدیریت پست‌ها و محتوا است. نکسا تضمین می‌کند که تمام
                  محتوا مدیریت شده است و تحویل داده شده تا استانداردهای بالای ما
                  را برآورده کند.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
