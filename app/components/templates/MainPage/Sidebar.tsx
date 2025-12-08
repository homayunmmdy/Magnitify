"use client"

import { useContainer } from "@/app/context/ContainerContext";

const Sidebar = () => {
  const { containerType, setContainerType } = useContainer();

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContainerType(e.target.value as 'standard' | 'wide');
  };

  return (
    <div className="w-full px-4">
      <b className="pb-1.5 block mb-1.5 border-b w-full border-[#eaecf0]">
        Appearance
      </b>
      <div>
        <span className="text-sm pb-1.5 mb-1.5 border-b w-full block border-[#eaecf0] text-[#54595d]">width</span>
        <form className="py-1.5">
          <div className="flex gap-0.5 items-center mb-1.5">
            <input 
              name="container-width" 
              id="standard" 
              type="radio" 
              value="standard"
              checked={containerType === 'standard'}
              onChange={handleWidthChange}
            />
            <label htmlFor="standard" className="text-sm cursor-pointer">Standard</label>
          </div>
          <div className="flex gap-0.5 items-center">
            <input 
              name="container-width" 
              id="wide" 
              type="radio" 
              value="wide"
              checked={containerType === 'wide'}
              onChange={handleWidthChange}
            />
            <label htmlFor="wide" className="text-sm cursor-pointer">Wide</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;