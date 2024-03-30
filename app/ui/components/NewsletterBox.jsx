"use client";
import React, { useState } from "react";

const NewsletterBox = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/Newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setEmail("");
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("خطایی رخ داد. لطفاً بعداً دوباره امتحان کنید.");
        }
    };
    return (
        <div className='my-3'>
            <div class=" w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 ">
                <div className='text-center'>
                    {message && (
                        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-700 dark:text-gray-300">
                            {message}
                        </p>
                    )}
                    <h4 class="font-semibold text-custom-4 text-dark mb-4">
                        خبرنامه
                    </h4>
                    <p class="font-medium text-custom-lg mb-5.5">
                        به 1450 مشترک بپیوندید!
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="لطفا ایمیل خود را وارد کنید" class="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3.5 px-5 outline-none text-center focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent" />
                    <button class="font-medium rounded-md text-white bg-indigo-700 flex justify-center text-center w-full p-2 hover:opacity-90 transition-all duration-200 mt-4">
                        اکنون مشترک شوید
                    </button>
                </form>
                <p class="text-custom-sm mt-5 text-center">
                    با ثبت نام، با سیاست حفظ حریم خصوصی ما موافقت می کنید
                </p>
            </div>
        </div>
    )
}

export default NewsletterBox