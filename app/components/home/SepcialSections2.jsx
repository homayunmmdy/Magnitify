import InfluncerSec from './InfluncerSec'
import NextInfluncer from './NextInfluncer'

const SepcialSections2 = () => {
    return (
        <div>
            <div className="">
                <div className="container grid grid-cols-12 mx-auto">
                    <InfluncerSec />
                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10">
                        <NextInfluncer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SepcialSections2