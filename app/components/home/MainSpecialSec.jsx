import Link from 'next/link'
import React from 'react'

const MainSpecialSec = () => {
    return (
        <div>
            <Link href="#">
                <div class="bg-cover text-center overflow-hidden min-h-80"
                    style={{ backgroundImage: url("/1.jpg")}}
                    title="Woman holding a mug">
                </div>
            </Link>
            <div
                class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div class="">
                    <Link href="#"
                        class="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!</Link>
                    <p class="text-gray-700 text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugiat autem excepturi? Enim assumenda doloremque possimus ut, odit esse?</p>
                </div>
            </div>
        </div>
    )
}

export default MainSpecialSec