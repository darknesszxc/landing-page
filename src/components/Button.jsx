const Button = ({ className, href, children }) => {
  const handleClick = (event) => {
    if (href) {
      event.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex w-[139px] h-[39px] items-center justify-center px-[13px] py-[12px] mt-[27px] gap-[8px] bg-lavender font-montserrat text-white font-semibold text-mobile-body rounded-full 
  hover:bg-[#6C2BD9] hover:border-[#6C2BD9]  border-1 border-transparent active:border-3 active:border-[#CABFFD] transition  
  tablet:text-subtitle2 tablet:w-[188px] tablet:h-[50px] desktop:mt-[60px] ${className}`}
    >
      {children}
      <img
        src="./assets/icons/paper-airplane.svg"
        alt="Arrow"
        className="w-[16px] h-[16px]"
      />
    </button>
  );
};

export default Button;
