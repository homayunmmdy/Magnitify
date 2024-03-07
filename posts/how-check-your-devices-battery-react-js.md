---
Imgsrc : "https://media.licdn.com/dms/image/D4D12AQGkRh_DmHvbHw/article-cover_image-shrink_423_752/0/1707681642183?e=1714003200&v=beta&t=uCvxPtZqxcMNz95-8OT8pYLxnOYi9LHpUYSdWZqeT8c"
title: "چگونه باتری دستگاه خود را در React JS بررسی کنیم"
date: "February 11, 2024"
---

در ReactJS، با استفاده از چیزی به نام Battery Status API، می توانید میزان باتری دستگاهتان را دریابید. این ابزار به شما می گوید باتری شما چقدر شارژ شده است و آیا در حال حاضر شارژ می شود یا خیر. اما گاهی اوقات، این کار نمی کند زیرا برخی از مرورگرهای وب از آن پشتیبانی نمی کنند، که می تواند باعث خطا شود. برای جلوگیری از این مشکل، می‌توانیم از ابزار خاصی به نام hook از بسته‌ای به نام react-use استفاده کنیم تا وضعیت باتری را به راحتی بررسی کنیم.

React-use یک کتابخانه مفید برای ReactJS است که ابزارهای مفید زیادی مانند هوک دارد. یکی از این قلاب‌ها، به نام useBattery، واقعاً مفید است زیرا به شما امکان می‌دهد به سرعت میزان باتری دستگاهتان را ببینید. در این راهنما، نحوه استفاده از قلاب useBattery در ReactJS را یاد خواهیم گرفت.



### الزامات
<ul>
<li>
[reat-use](https://www.npmjs.com/package/react-use)
</li>
</ul>
<h2>مرحله 1: React-use را نصب کنید</h2>
قبل از شروع کار با قلاب useBattery، ابتدا باید بسته React-use را نصب کنیم. برای انجام این کار، ترمینال خود را باز کنید و به دایرکتوری ریشه برنامه ReactJS بروید. سپس دستور زیر را اجرا کنید.

<div dir="ltr">

```javascript
npm install react-use
```

</div>

<h2>مرحله 2: استفاده از باتری را وارد کنید</h2>
برای استفاده از قلاب useBattery، باید آن را از کتابخانه react-use وارد کنیم. در اینجا یک مثال است

<div dir="ltr">

```react
import { useBattery } from 'react-use';
```

</div>
<h2>مرحله 3: از استفاده از قلاب باتری استفاده کنید</h2>
هنگامی که قلاب useBattery وارد شد، می‌توانیم آن را در داخل یک جزء کاربردی استفاده کنیم. قلاب useBattery یک شی را برمی‌گرداند که دارای چندین ویژگی از جمله سطح باتری، وضعیت شارژ، زمان شارژ و زمان تخلیه است. در اینجا مثالی از نحوه استفاده از قلاب useBattery آورده شده است.

<div dir="ltr">


```react
import React from "react";
import { useBattery } from "react-use";

function App() {
  // Calling useBattery hook
  const battery = useBattery();

  // Destructuring battery properties
  const { isSupported, level, charging, dischargingTime, chargingTime } =
    battery;

  //Check if browser support Battery API
  if (!isSupported) {
    return (
      <div>
        <strong>Battery sensor</strong>: <span>Not supported</span>
      </div>
    );
  }

  return (
    <div>
      {/* Display Battery Charge Percentage */}
      <strong>Charge level</strong>:&nbsp;&nbsp;{" "}
      <span>{(level * 100).toFixed(0)}%</span> <br />
      {/* Display Whether Device is charging or not */}
      <strong>Charging</strong>:&nbsp;&nbsp;{" "}
      <span>{charging ? "Yes" : "No"}</span> <br />
      {/* Display Device Charging time */}
      <strong>Charging time</strong>:&nbsp;&nbsp;
      <span>{chargingTime ? chargingTime : "Finished"}</span> <br />
      {/* Display Device Discharging time */}
      <strong>Discharging time</strong>:&nbsp;&nbsp;{" "}
      <span>{dischargingTime}</span>
    </div>
  );
}

export default App;
```

</div>

با تشکر از وقت شما مگ نتی فای

سورس کد: [گیت هاب ](https://github.com/homayunmmdy/Projects/tree/master/Device%20Battery%20Dectector)

نسخه انگلیسی :‌ [ لینکدین ](https://www.linkedin.com/pulse/how-check-your-devices-battery-react-js-homayoun-mohammadi-fldmf/?trackingId=Tlaa%2FOJUTPS42zDl24ussA%3D%3D)