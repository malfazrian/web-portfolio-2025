"use client";

import { useState } from "react";
import styles from "./nav.module.scss";
import type { FilterType } from "@/types";

interface NavProps {
  onTabClick: (layout: FilterType) => void;
}

const Nav: React.FC<NavProps> = ({ onTabClick }) => {
  const [activeTab, setActiveTab] = useState<FilterType>("all"); // Default to "all"
  const tabPositions: Record<FilterType, number> = {
    all: 6,
    about: 103,
    work: 210,
  };

  const handleTabClick = (layout: FilterType) => {
    setActiveTab(layout);
    onTabClick(layout);
  };

  return (
    <nav className="grid px-[3.5vw] py-12 sm:py-16 md:pb-20 justify-center w-[100vw]">
      <div style={{ height: "100%" }}>
        <div className="group w-full h-full relative overflow-hidden rounded-[24px] p-[1px] dark:bg-white/10 bg-white/60">
          <div className="relative h-full">
            <div className="flex relative rounded-3xl p-[6px] z-10 gap-1">
              <div
                className={styles.highlight__rmG8A}
                style={{
                  left: `${tabPositions[activeTab]}px`,
                  width: "81px",
                }}
              ></div>

              {/* Tabs */}
              <div
                className={styles.option__mlVkw}
                onClick={() => handleTabClick("all")}
              >
                All
              </div>
              <div
                className={styles.option__mlVkw}
                onClick={() => handleTabClick("about")}
              >
                About
              </div>
              <div
                className={styles.option__mlVkw}
                onClick={() => handleTabClick("work")}
              >
                Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
