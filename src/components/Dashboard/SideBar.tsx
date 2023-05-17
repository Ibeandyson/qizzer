import Tab from "./Tab";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-[282px] shadow-sidenav py-[30px] px-[20px]">
      <picture>
        <img className="mx-auto" src="/imgs/logo-large.svg" alt="logo" />
      </picture>
      <div className="w-full h-0 border-[1px] border-[#D7D7D7] mt-[20px]" />
      <div className="pt-[40px] px-[5px]">
        <p className="text-[12px] font-normal text-[#6C6C6C]">MENU</p>
        <div>
          <Tab label="Dashboard" path="/dashboard" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
