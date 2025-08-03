"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./grid.module.scss";
import {
  WidthProvider,
  ResponsiveGridLayout as Responsive,
} from "react-grid-layout-next";
import { heights, layouts } from "@/data";
import ThemeToggle from "../theme-toggle";
import BlurFade from "../magic-ui/blur-fade";
import {
  TextMarqueeCard,
  MyTechCard,
  JobsCard,
  AboutCard,
  MapCard,
  ResumeCard,
  IconCard,
  DapurRefaCard,
  StationSetupCard,
  AllianceLandingCard,
  DailyActivityLandingCard,
  DeveloperLandingCard,
  KSUDCard,
} from "@/components/cards";
import Nav from "../nav";
import type { FilterType } from "@/types";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Grid = () => {
  const [height, setHeight] = useState(280);
  const [isMounted, setMounted] = useState(false);
  const [activeLayout, setActiveLayout] = useState<FilterType>("all");

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);

  const handleTabClick = (layout: FilterType) => {
    setActiveLayout(layout);
  };

  return (
    <>
      <BlurFade>
        <Nav onTabClick={handleTabClick} />
      </BlurFade>
      <div className={styles.container}>
        <ResponsiveGridLayout
          useCSSTransforms
          className={styles.layout}
          layouts={layouts[activeLayout]}
          breakpoints={{
            lg: 1199,
            md: 799,
            sm: 374,
          }}
          cols={{
            lg: 12,
            md: 10,
            sm: 4,
          }}
          isDraggable={true}
          rowHeight={height}
          onBreakpointChange={(breakpoint: any) => {
            setHeight(heights[breakpoint]);
          }}
          margin={[16, 16]}
        >
          <div
            key="bio"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "work",
            })}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
              height: "100%",
            }}
          >
            <BlurFade delay={0.01}>
              <AboutCard />
            </BlurFade>
          </div>
          <div
            key="theme-toggle"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <div
              className={`flex flex-col-reverse sm:flex-col gap-3 h-full ${
                activeLayout === "about" ? styles.disabled : ""
              }`}
            >
              <BlurFade delay={0.1}>
                <ResumeCard />
              </BlurFade>
              <BlurFade delay={0.12}>
                <ThemeToggle />
              </BlurFade>
            </div>
          </div>
          <div
            key="map"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "work",
            })}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.08}>
              <MapCard />
            </BlurFade>
          </div>
          <div
            key="text-marquee"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout !== "all",
            })}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.04}>
              <TextMarqueeCard />
            </BlurFade>
          </div>
          <div
            key="linkedin"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "work",
            })}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.24}>
              <IconCard
                title="Linkedin"
                link="https://www.linkedin.com/in/muhammad-alfazrian-a296bb154/"
              />
            </BlurFade>
          </div>
          <div
            key="github"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "work",
            })}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.26}>
              <IconCard title="Github" link="https://github.com/malfazrian" />
            </BlurFade>
          </div>
          <div
            key="codepen"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "work",
            })}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.28}>
              <IconCard
                title="Codepen"
                link="https://codepen.io/ryandacclo/pens/showcase"
              />
            </BlurFade>
          </div>
          <div
            key="email"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "work",
            })}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.3}>
              <IconCard title="Email" link="mailto:moh.alfazrian@gmail.com" />
            </BlurFade>
          </div>
          <div
            key="my-stack"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "work",
            })}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.35}>
              <MyTechCard />
            </BlurFade>
          </div>
          <div
            key="jobs"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "about",
            })}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.4}>
              <JobsCard />
            </BlurFade>
          </div>
          <div
            key="dapur-refa"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "about",
            })}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.5}>
              <DapurRefaCard />
            </BlurFade>
          </div>
          <div
            key="station-landing"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "about",
            })}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.55}>
              <DailyActivityLandingCard />
            </BlurFade>
          </div>
          <div
            key="station-setup"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "about",
            })}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.6}>
              <StationSetupCard />
            </BlurFade>
          </div>
          <div
            key="ksud"
            className={cn(styles.itemGrab, styles.item, {
              [styles.disabled]: activeLayout === "about",
            })}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.65}>
              <KSUDCard />
            </BlurFade>
          </div>
        </ResponsiveGridLayout>
      </div>
    </>
  );
};

export default Grid;
