---
Imgsrc : "https://media.licdn.com/dms/image/D4D12AQHcfN1WYjmr-g/article-cover_image-shrink_720_1280/0/1709891760393?e=1715212800&v=beta&t=VybuZ1_12fIhOigksrpyoA6_UrITrhvO83ciMGabhWs"
title: "چرا برای رندر از map استفاده می کنیم نه foreach؟"
date: "March 8, 2024"
subtitle : "چرا هنگام رندر کردن لیست ها در کامپوننت های React اغلب استفاده از map را به forEach ترجیح می دهیم؟
هم map و هم forEach متدهای آرایه ای در جاوا اسکریپت هستند، اما رفتار متفاوتی دارند، مخصوصاً هنگام کار با اجزای React."
---

چرا هنگام رندر کردن لیست‌ها در مؤلفه‌های React، اغلب استفاده از «map» را به «forEach» ترجیح می‌دهیم؟

هر دو «map» و «forEach» متدهای آرایه‌ای در جاوا اسکریپت هستند، اما رفتار متفاوتی دارند، به‌خصوص هنگام کار با مؤلفه‌های React.

«forEach»: این روش روی هر آیتم در یک آرایه تکرار می‌شود و یک تابع فراخوانی را روی هر عنصر انجام می‌دهد. با این حال، چیزی را پس نمی دهد. از سوی دیگر، 'map' با اعمال یک تابع برای هر عنصر در آرایه اصلی، یک آرایه جدید ایجاد می کند و آرایه حاصل را برمی گرداند. در اینجا یک مثال ساده برای کمک به درک بهتر شما آورده شده است:

```javascript
const names = ['Alice', 'Bob', 'Charlie'];

// Using map:
const nameListMap = names.map((name, index) => (
  <li key={index}>{name}</li>
));

// Using forEach:
const nameListForEach = [];
names.forEach((name, index) => {
  nameListForEach.push(<li key={index}>{name}</li>);
});
```

با «نقشه»، می‌توانیم مستقیماً آرایه‌ای از عناصر JSX ایجاد کنیم، در حالی که با «forEach»، باید هر عنصر JSX را به صورت دستی به یک آرایه جدید فشار دهیم. از آنجایی که "map" یک آرایه جدید را برمی گرداند، برای رندر کردن لیست ها در اجزای React مختصرتر و اصطلاحی تر است. امیدوارم این مفاهیم را درک کرده باشید. ممنون بخاطر وقتی که گذاشتید.

با تشکر از وقت شما مگ نتی فای


<div id="pos-article-text-card-94410"></div>
<div id="pos-article-display-94407"></div>

نسخه انگلیسی :‌ [ لینکدین ](https://www.linkedin.com/pulse/why-we-use-map-foreach-rendering-homayoun-mohammadi-jf40f/)
نسخه انگلیسی :‌ [ medium ](https://medium.com/@Magnitify/why-we-use-map-not-foreach-for-rendering-3aacbaff1fd0)