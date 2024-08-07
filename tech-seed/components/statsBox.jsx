export default function StatsBox({ vertical, stat, title, icon }) {
  return (
    <div
      className={`bg-[#F5F5F4] rounded-lg border border-[#20B486] z-50 w-[150px] px-4 py-2 flex items-center shadow-xl shadow-[#0000003e]`}
    >
      <span className=" bg-[#20B486] rounded-md h-fit p-1">
        <img src={icon} alt="" className="w-[28px] h-[28px]" />
      </span>
      <div className="flex flex-col ml-4">
        <span className="text-[#101828] font-bold text-xl">{stat}</span>
        <span className="text-[#646464] text-sm">{title}</span>
      </div>
    </div>
  );
}
