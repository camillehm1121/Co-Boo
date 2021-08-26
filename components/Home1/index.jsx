import React from "react";
import HomeHeading42 from "../HomeHeading42";
import Group298222 from "../Group298222";
import Group278022 from "../Group278022";
import Group3142 from "../Group3142";
import Group3144 from "../Group3144";
import Group3145 from "../Group3145";
import Group3141 from "../Group3141";
import Group314142 from "../Group314142";
import Group31412 from "../Group31412";
import Group2971 from "../Group2971";
import Group29712 from "../Group29712";
import Group280632 from "../Group280632";
import Group280732 from "../Group280732";
import Group2760 from "../Group2760";
import ScrollGroup1 from "../ScrollGroup1";
import Group2758 from "../Group2758";
import ScrollGroup2 from "../ScrollGroup2";
import Icon34search from "../Icon34search";
import Component10627 from "../Component10627";
import "./Home1.css";

function Home1(props) {
  const {
    fontawsomeBars,
    ellipse2,
    projectSimulator,
    spanText,
    spanText2,
    group2984,
    union13,
    subtraction49,
    union11,
    amount,
    beef,
    color,
    apple,
    serving,
    x1Serving3Oz,
    path11680,
    path11553,
    text3,
    homeHeading42Props,
    group3142Props,
    group3141Props,
    group314142Props,
    group31412Props,
    group2971Props,
    group2758Props,
    scrollGroup2Props,
    icon34searchProps,
    component10627Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-1 screen">
        <div className="overlap-group2">
          <HomeHeading42 component9512Props={homeHeading42Props.component9512Props} />
          <img className="font-awsome-bars" src={fontawsomeBars} />
        </div>
        <div className="overlap-group1">
          <div className="card-1">
            <div className="group-3414">
              <img className="ellipse-2" src={ellipse2} />
              <div className="overlap-group3">
                <div className="project-simulator helveticaneue-regular-normal-dove-gray-20px">{projectSimulator}</div>
                <p className="text-2 opensans-normal-heather-10px">
                  <span className="opensans-normal-heather-10px-2">{spanText}</span>
                  <span className="helveticaneue-regular-normal-heather-20px">{spanText2}</span>
                </p>
              </div>
            </div>
            <div className="group-3417">
              <div className="overlap-group">
                <div className="group-3416">
                  <div className="overlap-group">
                    <Group298222 />
                    <div className="group-2984" style={{ backgroundImage: `url(${group2984})` }}>
                      <img className="union-13" src={union13} />
                    </div>
                    <img className="subtraction-49" src={subtraction49} />
                    <img className="union-11" src={union11} />
                  </div>
                </div>
                <div className="group-3415">
                  <div className="overlap-group4">
                    <Group278022 />
                    <div className="mask-group-10">
                      <div className="overlap-group6">
                        <Group3142 />
                        <Group3142 className={group3142Props.className} />
                        <Group3144 />
                        <Group3145 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-col">
                <div className="amount helveticaneue-regular-normal-dove-gray-16px">{amount}</div>
                <div className="beef">{beef}</div>
                <div className="color">{color}</div>
                <div className="apple">{apple}</div>
              </div>
              <div className="flex-col-1">
                <div className="serving helveticaneue-regular-normal-dove-gray-16px">{serving}</div>
                <p className="x1-serving-3-oz helveticaneue-regular-normal-dove-gray-10px">{x1Serving3Oz}</p>
                <Group3141 group3131Props22={group3141Props.group3131Props22} />
                <Group314142 group313122Props2={group314142Props.group313122Props2} />
                <Group31412 group31313Props44={group31412Props.group31313Props44} />
              </div>
            </div>
          </div>
          <div className="group-40">
            <div className="overlap-group12">
              <img className="path-11680" src={path11680} />
              <img className="path-11553" src={path11553} />
              <div className="ellipse-12 border-3px-white"></div>
            </div>
          </div>
          <Group2971 src={group2971Props.src} />
          <Group29712 />
          <div className="mask-group-4">
            <div className="overlap-group15">
              <Group280632 />
              <Group280732 />
            </div>
          </div>
        </div>
        <Group2760 />
        <div className="overlap-group17">
          <div className="overlap-group-1">
            <ScrollGroup1 />
            <Group2758 iconadd4Props2={group2758Props.iconadd4Props2} iconadd3Props={group2758Props.iconadd3Props} />
            <a onClick={window.event.stopPropagation()}>
              <div className="group-2761">
                <div className="overlap-group8">
                  <div className="text-3 helveticaneue-regular-normal-white-20px">{text3}</div>
                </div>
                <ScrollGroup2 group2734Props={scrollGroup2Props.group2734Props} />
              </div>
            </a>
            <Icon34search src={icon34searchProps.src} />
          </div>
          <Component10627
            overlapGroup16={component10627Props.overlapGroup16}
            group2756={component10627Props.group2756}
            ico={component10627Props.ico}
            setting={component10627Props.setting}
            profile={component10627Props.profile}
          />
        </div>
      </div>
    </div>
  );
}

export default Home1;
