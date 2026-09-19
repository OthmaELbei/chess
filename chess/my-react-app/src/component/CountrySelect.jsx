import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export default function CountrySelect() {
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Morocco',
    code: 'MAR',
    flag: '🇲🇦',
  });

  return (
    <div className="w-full flex flex-col gap-1.5">
      {/* Label */}
      <label className="text-[#C9A126] text-xs font-medium tracking-wide">
        FIDE Federation / Country
      </label>

      {/* Select Field / Dropdown Trigger */}
      <div className="flex items-center justify-between w-full bg-white/[0.07] hover:bg-white/[0.10] rounded-xl px-4 py-3 cursor-pointer transition-colors border border-transparent focus-within:border-[#C9A126]/30">
        {/* Left: Flag + Text */}
        <div className="flex items-center gap-2.5">
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <span className="text-slate-200 text-sm font-medium">
            {selectedCountry.name} ({selectedCountry.code})
          </span>
        </div>

        {/* Right: Dropdown Arrow */}
        <BiChevronDown className="text-slate-400 text-xl shrink-0" />
      </div>
    </div>
  );
}