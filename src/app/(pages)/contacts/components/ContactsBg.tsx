import Circles from "./Circle";

const ContactsBg = () => {
  return (
    <div>
      <span className="absolute -right-9 -top-10 z-[-1]">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
            fill="#6366f1"
          />
        </svg>
      </span>
      <span className="absolute -right-10 top-[90px] z-[-1]">
        <Circles />
      </span>
      <span className="absolute -bottom-7 -left-7 z-[-1]">
        <Circles />
      </span>
    </div>
  );
};

export default ContactsBg;
