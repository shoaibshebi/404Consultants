import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDoAnimation = () => {
  const svgRef = React.useRef(null);
  useGSAP(() => {
    gsap.set(
      [
        "#container1",
        "#container2",
        "#container3",
        "#container4",
        "#container5",
      ],
      { transformOrigin: "50% 50%" }
    );
    gsap.set("#circle-parent", { alpha: 0 });
    const iconAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#whatwedo",
        start: "-70%",
        end: "+=35%",
        scrub: 1,
      },
    });
    iconAnimation
      .from(
        "#container4",
        {
          x: -327,
          y: -153,
          scale: 1.8,
          immediateRender: true,
          duration: 2,
        },
        1
      )
      .from(
        "#container5",
        {
          x: -55,
          y: 7,
          scale: 1.8,
          immediateRender: true,
          duration: 2,
        },
        "<"
      )
      .from(
        "#container1",
        {
          x: 2,
          y: 152,
          scale: 1.8,
          immediateRender: true,
          duration: 2,
        },
        "<"
      )
      .from(
        "#container2",
        {
          x: 50,
          y: 7,
          scale: 1.8,
          immediateRender: true,
          duration: 2,
        },
        "<"
      )
      .from(
        "#container3",
        {
          x: 330,
          y: -153,
          scale: 1.8,
          immediateRender: true,
          duration: 2,
        },
        "<"
      )
      .to(
        ["#border1", "#border2", "#border3", "#border4", "#border5"],
        {
          alpha: 0,
          duration: 0.2,
        },
        "-=1.8"
      )
      .to(
        "#circle-parent",
        {
          alpha: 1,
          duration: 0.3,
        },
        "<"
      )
      .fromTo(
        "#circle-parent",
        {
          scale: 0.2,
          y: 150,
          immediateRender: true,
          transformOrigin: "50% 50%",
        },
        {
          scale: 1,
          duration: 1.5,
          y: 0,
          rotation: 360,
          transformOrigin: "50% 50%",
        },
        "-=1.5"
      )
      .fromTo(
        "#center-text",
        {
          alpha: 0,
        },
        {
          alpha: 1,
          duration: 2,
        }
      )
      .to(["#text1", "#text2", "#text3", "#text4", "#text5"], {
        alpha: 0,
        duration: 0.5,
      })
      .to(
        [
          "#container1",
          "#container2",
          "#container3",
          "#container4",
          "#container5",
        ],
        {
          scale: 1.5,
          duration: 0.5,
        },
        "<"
      );

    () => iconAnimation.kill();
  });
  return (
    <div className="w-full max-w-[315px] w-[100%] h-[328px] justify-center items-center z-10 hidden md:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 484.84 418.59"
        className="w-full h-auto overflow-visible"
        ref={svgRef}
      >
        <defs>
          <style>
            {
              ".cls-1,.cls-11,.cls-16,.cls-17,.cls-20,.cls-6,.cls-7{fill:none;}.cls-2{fill:#011320;stroke-width:5px;stroke:url(#radial-gradient);}.cls-12,.cls-14,.cls-18,.cls-3,.cls-9{fill:#0a1721;stroke-width:3px;}.cls-3{stroke:#6d3c96;}.cls-4{fill:#6d3c96;}.cls-5{clip-path:url(#clip-path);}.cls-6,.cls-7{stroke:#fff;stroke-width:2.11px;}.cls-11,.cls-16,.cls-17,.cls-20,.cls-6,.cls-7{stroke-linecap:round;}.cls-11,.cls-16,.cls-17,.cls-20,.cls-6{stroke-linejoin:round;}.cls-8{fill:#fff;}.cls-9{stroke:#ce2070;}.cls-10{fill:#ce2070;}.cls-11,.cls-16,.cls-17,.cls-20{stroke:#f4f5f5;}.cls-11{stroke-width:2.5px;}.cls-12{stroke:#4979bc;}.cls-13{fill:#4979bc;}.cls-14{stroke:#ef4c5e;}.cls-15{fill:#ef4c5e;}.cls-16{stroke-width:2.44px;}.cls-17{stroke-width:3.25px;}.cls-18{stroke:#7d2984;}.cls-19{fill:#7d2984;}.cls-20{stroke-width:2.56px;}"
            }
          </style>
          <radialGradient
            id="radial-gradient"
            cx={-1.6}
            cy={556.27}
            r={1.87}
            gradientTransform="matrix(41.07, 213.3, 185.79, -35.28, -103079.85, 20035.75)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#b700f8" />
            <stop offset={0.38} stopColor="#1136fa" />
            <stop offset={0.73} stopColor="#fa6161" stopOpacity={0.74} />
            <stop offset={0.86} stopColor="#ce1f6f" stopOpacity={0.65} />
          </radialGradient>
          <clipPath id="clip-path">
            <rect
              className="cls-1"
              x={43.9}
              y={171.09}
              width={33.78}
              height={33.78}
            />
          </clipPath>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="circle-parent">
              <path
                id="gradient-circle"
                data-name="id of circle"
                className="cls-2"
                d="M238.17,26.32h0c103.7,0,187.76,83.48,187.76,186.46v11.56c0,103-84.06,186.46-187.76,186.46h0c-103.69,0-187.75-83.48-187.75-186.46V212.78C50.42,109.8,134.48,26.32,238.17,26.32Z"
              />
              <path
                id="center-text"
                className="cls-8"
                d="M150,228.2v-31h11.76q4.53,0,6.93,2.58a11.45,11.45,0,0,1,0,14q-2.4,2.58-6.93,2.58H155.8V228.2Zm5.81-16.57h4.76a4.94,4.94,0,0,0,3.37-.93,4.06,4.06,0,0,0,1-3.06V206a3.92,3.92,0,0,0-1-3,4.78,4.78,0,0,0-3.37-1H155.8Zm20.59,12.09h5.69V209.77h-5.69v-4.49h11.37v6.27h.36a13.27,13.27,0,0,1,.84-2.31,7.75,7.75,0,0,1,1.42-2,6.78,6.78,0,0,1,2.14-1.42,7.4,7.4,0,0,1,3-.54H198v5.33h-4.71a5.39,5.39,0,0,0-4,1.51,5.33,5.33,0,0,0-1.47,3.87v7.73h8v4.48H176.39Zm36.63,5a12.51,12.51,0,0,1-4.71-.84,10,10,0,0,1-3.51-2.4,10.91,10.91,0,0,1-2.22-3.77,16.88,16.88,0,0,1,0-9.95A11.05,11.05,0,0,1,204.8,208a10.25,10.25,0,0,1,3.51-2.4,13.48,13.48,0,0,1,9.37,0,9.71,9.71,0,0,1,3.51,2.4,10.17,10.17,0,0,1,2.22,3.78,15.87,15.87,0,0,1,0,9.95,10.05,10.05,0,0,1-2.22,3.77,9.47,9.47,0,0,1-3.51,2.4A12.39,12.39,0,0,1,213,228.73Zm0-4.35a5.15,5.15,0,0,0,3.86-1.46,6.19,6.19,0,0,0,1.42-4.4V215a6,6,0,0,0-1.42-4.36,5.7,5.7,0,0,0-7.73,0,6,6,0,0,0-1.42,4.36v3.55a6.19,6.19,0,0,0,1.42,4.4A5.17,5.17,0,0,0,213,224.38Zm31.2-.22h-.31a8.32,8.32,0,0,1-2.58,3.33,6.72,6.72,0,0,1-4.26,1.24,8.9,8.9,0,0,1-3.6-.71,7.6,7.6,0,0,1-2.75-2.22,10.91,10.91,0,0,1-1.78-3.77,20.27,20.27,0,0,1-.62-5.29c0-4,.8-7,2.4-9a7.74,7.74,0,0,1,6.35-3,6.78,6.78,0,0,1,4.26,1.24,8.32,8.32,0,0,1,2.58,3.33h.31v-14h5.69V228.2h-5.69Zm-4.75,0a7,7,0,0,0,1.82-.22,5,5,0,0,0,1.51-.71,3.26,3.26,0,0,0,1-1.2,3.59,3.59,0,0,0,.4-1.73v-7.19a3.33,3.33,0,0,0-.4-1.69,2.79,2.79,0,0,0-1-1.2,3.91,3.91,0,0,0-1.51-.71,5.93,5.93,0,0,0-1.82-.27,4.93,4.93,0,0,0-3.86,1.51,6,6,0,0,0-1.34,4.13v3.64a6,6,0,0,0,1.34,4.13A4.93,4.93,0,0,0,239.47,224.2Zm31.11,0h-.22A8.34,8.34,0,0,1,268,227.4a6.48,6.48,0,0,1-4.35,1.33,7.3,7.3,0,0,1-5.51-2.22,9.16,9.16,0,0,1-2.09-6.44V205.28h5.69v14q0,5,4.3,5a6.44,6.44,0,0,0,1.65-.22,4.36,4.36,0,0,0,1.46-.67,3.5,3.5,0,0,0,1-1.15,3.14,3.14,0,0,0,.39-1.6V205.28h5.69V228.2h-5.69Zm23.22,4.57a12.51,12.51,0,0,1-4.71-.84,9.79,9.79,0,0,1-3.55-2.4,11.09,11.09,0,0,1-2.23-3.77,16.88,16.88,0,0,1,0-9.95,11.23,11.23,0,0,1,2.23-3.78,10.12,10.12,0,0,1,3.5-2.4,12.51,12.51,0,0,1,4.71-.84,10.21,10.21,0,0,1,5.86,1.51,9.68,9.68,0,0,1,3.38,4l-4.4,2.4a5.72,5.72,0,0,0-1.77-2.36,4.65,4.65,0,0,0-3.07-.93,5.1,5.1,0,0,0-3.91,1.47,5.69,5.69,0,0,0-1.33,4v3.82a5.82,5.82,0,0,0,1.33,4,5.21,5.21,0,0,0,4,1.46,5.16,5.16,0,0,0,3.24-.93,6.63,6.63,0,0,0,2-2.49l4.26,2.54a9.53,9.53,0,0,1-3.5,4A10.86,10.86,0,0,1,293.8,228.73Zm27.29-.53a6.21,6.21,0,0,1-4.84-1.73A6.45,6.45,0,0,1,314.7,222V209.77H308v-4.49h4.53a2.86,2.86,0,0,0,2-.53,2.79,2.79,0,0,0,.58-2V197.2h5.28v8.08h9.33v4.49h-9.33v13.95h9.33v4.48Z"
              />
            </g>

            <g id="container4">
              <path
                id="border4"
                data-name="border 4"
                className="cls-9"
                d="M47.18,306.61H148.6a7.29,7.29,0,0,1,7.5,7.06V410a7.29,7.29,0,0,1-7.5,7.06H47.18a7.29,7.29,0,0,1-7.5-7.06V313.67A7.29,7.29,0,0,1,47.18,306.61Z"
              />
              <g id="icon4_with_text" data-name="icon4 with text">
                <path
                  id="circle4"
                  className="cls-10"
                  d="M97.89,318h0a26,26,0,0,1,26,26h0a26,26,0,0,1-26,26h0a26,26,0,0,1-26-26h0A26,26,0,0,1,97.89,318Z"
                />
                <g id="icon4">
                  <path
                    className="cls-11"
                    d="M108.39,350V335.73a3,3,0,0,0-3-3H98.64"
                  />
                  <path className="cls-11" d="M102.39,329l-4.5,3.75,4.5,3.75" />
                  <path className="cls-11" d="M87.39,339.48V350" />
                  <path
                    className="cls-11"
                    d="M87.77,338.73a4.88,4.88,0,1,0-4.88-4.87A4.87,4.87,0,0,0,87.77,338.73Z"
                  />
                  <path
                    className="cls-11"
                    d="M87.39,359a4.5,4.5,0,1,0-4.5-4.5A4.49,4.49,0,0,0,87.39,359Z"
                  />
                  <path
                    className="cls-11"
                    d="M108.39,359a4.5,4.5,0,1,0-4.5-4.5A4.49,4.49,0,0,0,108.39,359Z"
                  />
                </g>
                <path
                  id="text4"
                  className="cls-8"
                  d="M60.67,396V384.81h4.24a3.25,3.25,0,0,1,2.5.93,4.15,4.15,0,0,1,0,5.06,3.25,3.25,0,0,1-2.5.93H62.77V396Zm2.1-6h1.71a1.79,1.79,0,0,0,1.21-.33,1.46,1.46,0,0,0,.37-1.11V388a1.38,1.38,0,0,0-.37-1.09,1.68,1.68,0,0,0-1.21-.36H62.77Zm7.37,4.35h2.62v-8.6H70.14v-1.62h4.67v10.22h2.64V396H70.14ZM86.42,396a1.69,1.69,0,0,1-1.17-.37,1.62,1.62,0,0,1-.48-1.05h-.08a2.1,2.1,0,0,1-.88,1.2,3,3,0,0,1-1.62.41,2.9,2.9,0,0,1-2-.65,2.34,2.34,0,0,1-.74-1.83c0-1.66,1.23-2.49,3.67-2.49h1.45v-.55a1.63,1.63,0,0,0-.38-1.18,1.66,1.66,0,0,0-1.25-.4,2.35,2.35,0,0,0-1.26.3,3.08,3.08,0,0,0-.82.79l-1.17-1A3,3,0,0,1,81,388a4.51,4.51,0,0,1,2.22-.48,3.82,3.82,0,0,1,2.54.77,2.73,2.73,0,0,1,.93,2.26v3.88h1V396Zm-3.54-1.21a2.12,2.12,0,0,0,1.22-.34,1.1,1.1,0,0,0,.49-.94v-1.11h-1.4c-1.12,0-1.68.35-1.68,1.06v.32a.86.86,0,0,0,.36.75A1.78,1.78,0,0,0,82.88,394.77ZM89.37,396v-8.25h2v1.45h.08a3,3,0,0,1,.83-1.15,2.37,2.37,0,0,1,1.59-.5,2.55,2.55,0,0,1,2,.82,3.15,3.15,0,0,1,.77,2.3V396H94.6v-5c0-1.19-.51-1.79-1.55-1.79a2.49,2.49,0,0,0-.61.08,1.5,1.5,0,0,0-.52.26,1.18,1.18,0,0,0-.37.4,1.14,1.14,0,0,0-.13.57V396Zm9.6,0v-8.25h2v1.45h.08a3,3,0,0,1,.84-1.15,2.34,2.34,0,0,1,1.58-.5,2.57,2.57,0,0,1,2,.82,3.2,3.2,0,0,1,.77,2.3V396h-2v-5c0-1.19-.52-1.79-1.56-1.79a2.35,2.35,0,0,0-.6.08,1.54,1.54,0,0,0-.53.26,1.29,1.29,0,0,0-.37.4,1.26,1.26,0,0,0-.13.57V396Zm13.7-9.54a1.37,1.37,0,0,1-1-.3,1,1,0,0,1-.29-.73V385a1,1,0,0,1,.29-.73,1.37,1.37,0,0,1,1-.31,1.33,1.33,0,0,1,1,.31,1,1,0,0,1,.3.73v.39a1,1,0,0,1-.3.73A1.33,1.33,0,0,1,112.67,386.44Zm-3.74,7.92h2.72v-5h-2.72v-1.61h4.77v6.63h2.52V396h-7.29Zm9.22,1.62v-8.25h2v1.45h.08a3,3,0,0,1,.83-1.15,2.38,2.38,0,0,1,1.59-.5,2.55,2.55,0,0,1,2,.82,3.15,3.15,0,0,1,.77,2.3V396h-2v-5c0-1.19-.52-1.79-1.56-1.79a2.35,2.35,0,0,0-.6.08,1.46,1.46,0,0,0-.53.26,1.29,1.29,0,0,0-.37.4,1.14,1.14,0,0,0-.13.57V396Zm17.61.87a2,2,0,0,1-1.09,1.9,6.86,6.86,0,0,1-3.36.62,9.9,9.9,0,0,1-1.87-.14,4,4,0,0,1-1.21-.38,1.55,1.55,0,0,1-.64-.63,1.61,1.61,0,0,1-.2-.8,1.37,1.37,0,0,1,.41-1.06,2.56,2.56,0,0,1,1.11-.54v-.13a1.82,1.82,0,0,1-.76-.44,1.15,1.15,0,0,1-.27-.81,1.08,1.08,0,0,1,.4-.91,3,3,0,0,1,1.08-.46V393a2.71,2.71,0,0,1-1.15-1,2.79,2.79,0,0,1-.41-1.56,2.9,2.9,0,0,1,.24-1.21,2.53,2.53,0,0,1,.7-.91,3.13,3.13,0,0,1,1.1-.58,4.57,4.57,0,0,1,1.43-.21,4.72,4.72,0,0,1,1.5.23v-.35a1.12,1.12,0,0,1,.3-.8,1.19,1.19,0,0,1,.89-.32h1.48v1.53h-1.95v.27a2.51,2.51,0,0,1,.93,1,2.78,2.78,0,0,1,.33,1.39,2.89,2.89,0,0,1-.25,1.24,2.42,2.42,0,0,1-.7.91,3.25,3.25,0,0,1-1.11.58,5.24,5.24,0,0,1-1.42.19l-.63,0a3.47,3.47,0,0,1-.56-.11,1.3,1.3,0,0,0-.43.26.56.56,0,0,0-.21.46.45.45,0,0,0,.37.48,4.48,4.48,0,0,0,.88.08h1.87a5.3,5.3,0,0,1,1.48.18,2.41,2.41,0,0,1,1,.48,1.82,1.82,0,0,1,.56.73A2.47,2.47,0,0,1,135.76,396.85Zm-1.92.14a.71.71,0,0,0-.3-.59,2,2,0,0,0-1.09-.21H129.6a.87.87,0,0,0-.48.8.88.88,0,0,0,.36.72,2,2,0,0,0,1.23.29H132C133.24,398,133.84,397.66,133.84,397Zm-2.57-5a1.6,1.6,0,0,0,1.15-.36,1.42,1.42,0,0,0,.37-1v-.41a1.35,1.35,0,0,0-.37-1,1.56,1.56,0,0,0-1.15-.38,1.54,1.54,0,0,0-1.14.38,1.35,1.35,0,0,0-.37,1v.41a1.42,1.42,0,0,0,.37,1A1.57,1.57,0,0,0,131.27,392Z"
                />
              </g>
            </g>
            <g id="container5">
              <path
                id="border5"
                className="cls-3"
                d="M9,146.55H110.42a7.28,7.28,0,0,1,7.49,7.06V250a7.28,7.28,0,0,1-7.49,7.06H9A7.29,7.29,0,0,1,1.5,250V153.61A7.29,7.29,0,0,1,9,146.55Z"
              />
              <g id="icon5_with_text" data-name="icon5 with text">
                <path
                  id="circle5"
                  className="cls-4"
                  d="M58.92,161.09h2a26,26,0,0,1,26,26h0a26,26,0,0,1-26,26h-2a26,26,0,0,1-26-26h0A26,26,0,0,1,58.92,161.09Z"
                />
                <g id="icon5">
                  <g className="cls-5">
                    <path
                      className="cls-6"
                      d="M74.59,176.64A47.4,47.4,0,0,1,62.45,193l-2.78,2.23a5,5,0,0,1-1.09.63,5.71,5.71,0,0,0-1.69-4,5.84,5.84,0,0,0-3.32-1.67,6,6,0,0,0-.85,0,3.91,3.91,0,0,1,.69-1.19l2.2-2.77A47.33,47.33,0,0,1,72,174.06a2,2,0,0,1,2.14.44A1.9,1.9,0,0,1,74.59,176.64Z"
                    />
                    <path
                      className="cls-6"
                      d="M58.58,195.89a5.76,5.76,0,0,1-5.13,5.79l-3.46.37a3,3,0,0,1-3.28-3.3l.38-3.47a5.73,5.73,0,0,1,5.65-5.1,7.82,7.82,0,0,1,.84,0,5.66,5.66,0,0,1,3.32,1.67,5.56,5.56,0,0,1,1.64,3.23C58.55,195.36,58.58,195.62,58.58,195.89Z"
                    />
                    <path
                      className="cls-6"
                      d="M63.94,191.46a6.66,6.66,0,0,0-6.66-6.66"
                    />
                    <path
                      className="cls-7"
                      d="M72.21,189l1.05,1c2.09,2.09,2.09,4.16,0,6.26l-4.17,4.16c-2.07,2.07-4.17,2.07-6.23,0"
                    />
                    <path
                      className="cls-7"
                      d="M48.28,185.88c-2.07-2.09-2.07-4.16,0-6.26l4.16-4.17c2.07-2.06,4.17-2.06,6.24,0l1,1.05"
                    />
                    <path className="cls-7" d="M59.73,176.51l-5.21,5.21" />
                    <path className="cls-7" d="M72.21,189l-4.16,4.15" />
                  </g>
                </g>
                <path
                  id="text5"
                  data-name="text 5"
                  className="cls-8"
                  d="M32.07,227.92h3.47a3.74,3.74,0,0,1,3.23,1.44,8.6,8.6,0,0,1,0,8.31,3.75,3.75,0,0,1-3.23,1.42H32.07Zm3.32,9.49a2,2,0,0,0,1.7-.75,3.65,3.65,0,0,0,.56-2.19v-1.94a3.6,3.6,0,0,0-.56-2.17,2,2,0,0,0-1.7-.76H34.13v7.81Zm10.09,1.87a4.85,4.85,0,0,1-1.76-.3,3.52,3.52,0,0,1-1.29-.86,4,4,0,0,1-.79-1.35,5.56,5.56,0,0,1-.27-1.79,5.69,5.69,0,0,1,.27-1.81,4.25,4.25,0,0,1,.8-1.36,3.59,3.59,0,0,1,1.24-.86,4.32,4.32,0,0,1,1.64-.31,4.18,4.18,0,0,1,1.62.31,3.27,3.27,0,0,1,1.22.83,3.66,3.66,0,0,1,.78,1.31,5.09,5.09,0,0,1,.27,1.7v.67H43.42v.21a2,2,0,0,0,.56,1.46,2.17,2.17,0,0,0,1.57.54,2.57,2.57,0,0,0,1.31-.31,3,3,0,0,0,.93-.83L49,237.7a3.61,3.61,0,0,1-1.32,1.12A4.43,4.43,0,0,1,45.48,239.28Zm-.14-7.13a1.85,1.85,0,0,0-1.39.54,2,2,0,0,0-.53,1.44v.11h3.74v-.14a2,2,0,0,0-.49-1.42A1.68,1.68,0,0,0,45.34,232.15Zm9.51,7.13a6.21,6.21,0,0,1-2.35-.41A3.87,3.87,0,0,1,51,237.72l1.2-1.09a3.5,3.5,0,0,0,2.72,1.17,2.55,2.55,0,0,0,1.23-.26.84.84,0,0,0,.47-.78.63.63,0,0,0-.32-.61,2.58,2.58,0,0,0-.82-.24l-1.33-.21a8.65,8.65,0,0,1-1-.22,3.46,3.46,0,0,1-.86-.43,2.17,2.17,0,0,1-.59-.69,2.25,2.25,0,0,1-.23-1,2.3,2.3,0,0,1,1-2,4.56,4.56,0,0,1,2.68-.69,5.52,5.52,0,0,1,2,.34,3.64,3.64,0,0,1,1.39.94l-1.07,1.19a3.3,3.3,0,0,0-2.42-1c-1,0-1.57.33-1.57,1a.64.64,0,0,0,.32.62,2.72,2.72,0,0,0,.84.24l1.31.21a5.51,5.51,0,0,1,1,.24,2.65,2.65,0,0,1,.86.42,2,2,0,0,1,.61.68,2.15,2.15,0,0,1,.22,1,2.37,2.37,0,0,1-1,2A4.47,4.47,0,0,1,54.85,239.28ZM65,229.56a1.37,1.37,0,0,1-1-.31,1,1,0,0,1-.29-.73v-.39a1,1,0,0,1,.29-.73,1.37,1.37,0,0,1,1-.31,1.33,1.33,0,0,1,1,.31,1,1,0,0,1,.3.73v.39a1,1,0,0,1-.3.73A1.33,1.33,0,0,1,65,229.56Zm-3.74,7.92H64v-5H61.25v-1.61H66v6.64h2.52v1.61H61.25ZM78.49,240a2,2,0,0,1-1.09,1.9,6.86,6.86,0,0,1-3.36.62,9.83,9.83,0,0,1-1.87-.14A3.82,3.82,0,0,1,71,242a1.55,1.55,0,0,1-.64-.63,1.72,1.72,0,0,1-.19-.8,1.33,1.33,0,0,1,.4-1.05,2.5,2.5,0,0,1,1.12-.55v-.12a2.06,2.06,0,0,1-.77-.45,1.14,1.14,0,0,1-.27-.8,1.08,1.08,0,0,1,.4-.92,3.14,3.14,0,0,1,1.09-.46v-.08a2.66,2.66,0,0,1-1.15-1,2.79,2.79,0,0,1-.42-1.55,2.92,2.92,0,0,1,.24-1.22,2.64,2.64,0,0,1,.7-.91,3.18,3.18,0,0,1,1.11-.58,4.55,4.55,0,0,1,1.42-.21,4.74,4.74,0,0,1,1.51.23v-.35a1.12,1.12,0,0,1,.3-.8,1.16,1.16,0,0,1,.88-.32h1.49v1.53h-2v.27a2.67,2.67,0,0,1,.93,1,2.79,2.79,0,0,1,.33,1.4,2.85,2.85,0,0,1-.25,1.23,2.35,2.35,0,0,1-.71.91,3.29,3.29,0,0,1-1.1.58,5.27,5.27,0,0,1-1.43.19l-.62,0a3.47,3.47,0,0,1-.56-.11,1.3,1.3,0,0,0-.43.26.56.56,0,0,0-.21.46.44.44,0,0,0,.37.48,4.41,4.41,0,0,0,.88.08h1.87a5.18,5.18,0,0,1,1.47.18,2.29,2.29,0,0,1,1,.48,1.71,1.71,0,0,1,.56.73A2.47,2.47,0,0,1,78.49,240Zm-1.92.14a.71.71,0,0,0-.3-.59,2,2,0,0,0-1.09-.21H72.33a.87.87,0,0,0-.48.8.9.9,0,0,0,.35.72,2.06,2.06,0,0,0,1.23.29h1.33C76,241.11,76.57,240.77,76.57,240.1Zm-2.58-5a1.61,1.61,0,0,0,1.16-.37,1.41,1.41,0,0,0,.36-1v-.41a1.35,1.35,0,0,0-.36-1A1.57,1.57,0,0,0,74,232a1.51,1.51,0,0,0-1.13.38,1.31,1.31,0,0,0-.37,1v.41a1.37,1.37,0,0,0,.37,1A1.55,1.55,0,0,0,74,235.13Zm6.08,4v-8.25h2.05v1.45h.08a2.86,2.86,0,0,1,.83-1.15,2.34,2.34,0,0,1,1.58-.5,2.57,2.57,0,0,1,2,.82,3.2,3.2,0,0,1,.77,2.3v5.33h-2v-5c0-1.19-.52-1.79-1.55-1.79a2.37,2.37,0,0,0-.61.08,1.54,1.54,0,0,0-.53.26,1.29,1.29,0,0,0-.37.4,1.26,1.26,0,0,0-.12.57v5.52Z"
                />
              </g>
            </g>
            <g id="container1">
              <path
                id="border1"
                className="cls-12"
                d="M187.22,1.5H288.65a7.28,7.28,0,0,1,7.49,7.06v96.36a7.28,7.28,0,0,1-7.49,7.06H187.22a7.28,7.28,0,0,1-7.49-7.06V8.56A7.28,7.28,0,0,1,187.22,1.5Z"
              />
              <g id="icon1_with_text" data-name="icon1 with text">
                <path
                  id="circle1"
                  className="cls-13"
                  d="M238.17,9.47h0a26,26,0,0,1,26,26h0a26,26,0,0,1-26,26h0a26,26,0,0,1-26-26h0A26,26,0,0,1,238.17,9.47Z"
                />
                <g id="icon1">
                  <path
                    className="cls-11"
                    d="M233.67,37a6.35,6.35,0,0,0-2.43,2.14,1.56,1.56,0,0,0,0,1.71A6.37,6.37,0,0,0,233.67,43"
                  />
                  <path
                    className="cls-11"
                    d="M243,37a6.35,6.35,0,0,1,2.43,2.14,1.56,1.56,0,0,1,0,1.71A6.37,6.37,0,0,1,243,43"
                  />
                  <path
                    className="cls-11"
                    d="M233.67,50.47h9c7.5,0,10.5-3,10.5-10.5V31c0-7.5-3-10.5-10.5-10.5h-9c-7.5,0-10.5,3-10.5,10.5v9C223.17,47.47,226.17,50.47,233.67,50.47Z"
                  />
                  <path className="cls-11" d="M223.52,29.48h28.83" />
                </g>
                <path
                  id="text1"
                  className="cls-8"
                  d="M186.34,76.3h3.47a3.77,3.77,0,0,1,3.24,1.44,6.88,6.88,0,0,1,1.07,4.14A6.9,6.9,0,0,1,193.05,86a3.79,3.79,0,0,1-3.24,1.43h-3.47Zm3.33,9.49a2,2,0,0,0,1.7-.75,3.7,3.7,0,0,0,.56-2.2V80.91a3.63,3.63,0,0,0-.56-2.18,2,2,0,0,0-1.7-.75h-1.26v7.81Zm10.09,1.87a4.81,4.81,0,0,1-1.76-.3,3.46,3.46,0,0,1-2.08-2.21,6.13,6.13,0,0,1,0-3.6,4,4,0,0,1,.8-1.36,3.49,3.49,0,0,1,1.23-.87,4.33,4.33,0,0,1,1.65-.3,4.18,4.18,0,0,1,1.62.3,3.25,3.25,0,0,1,1.21.84,3.66,3.66,0,0,1,.78,1.31,4.83,4.83,0,0,1,.28,1.69v.68H197.7V84a1.94,1.94,0,0,0,.56,1.46,2.14,2.14,0,0,0,1.56.54,2.71,2.71,0,0,0,1.32-.3,2.82,2.82,0,0,0,.92-.83l1.17,1.17a3.66,3.66,0,0,1-1.31,1.12A4.49,4.49,0,0,1,199.76,87.66Zm-.14-7.14a1.89,1.89,0,0,0-1.4.55,2,2,0,0,0-.52,1.44v.11h3.74v-.14a2,2,0,0,0-.5-1.43A1.7,1.7,0,0,0,199.62,80.52Zm8.31,7-3-8.26h2.14l1.11,3.51.93,3h.11l.93-3,1.1-3.51h2.06l-3,8.26Zm11,.19a4.81,4.81,0,0,1-1.76-.3,3.71,3.71,0,0,1-1.3-.87,3.79,3.79,0,0,1-.78-1.34,5.93,5.93,0,0,1,0-3.6,4,4,0,0,1,.8-1.36,3.49,3.49,0,0,1,1.23-.87,4.33,4.33,0,0,1,1.65-.3,4.16,4.16,0,0,1,1.61.3,3.29,3.29,0,0,1,1.22.84,3.66,3.66,0,0,1,.78,1.31,5.08,5.08,0,0,1,.28,1.69v.68h-5.8V84a2,2,0,0,0,.56,1.46A2.19,2.19,0,0,0,219,86a2.67,2.67,0,0,0,1.31-.3,2.76,2.76,0,0,0,.93-.83l1.17,1.17a3.75,3.75,0,0,1-1.31,1.12A4.49,4.49,0,0,1,219,87.66Zm-.15-7.14a1.87,1.87,0,0,0-1.39.55,2,2,0,0,0-.53,1.44v.11h3.75v-.14a2,2,0,0,0-.5-1.43A1.71,1.71,0,0,0,218.8,80.52Zm5.9,5.33h2.62V77.24H224.7V75.63h4.67V85.85H232v1.62H224.7Zm13.24,1.81a4.5,4.5,0,0,1-1.69-.3,3.78,3.78,0,0,1-1.27-.87,3.89,3.89,0,0,1-.8-1.36,6.07,6.07,0,0,1,0-3.58,4,4,0,0,1,.8-1.36,3.64,3.64,0,0,1,1.27-.87,4.88,4.88,0,0,1,3.37,0,3.55,3.55,0,0,1,1.27.87,3.69,3.69,0,0,1,.8,1.36,5.86,5.86,0,0,1,0,3.58,3.61,3.61,0,0,1-.8,1.36,3.68,3.68,0,0,1-1.27.87A4.49,4.49,0,0,1,237.94,87.66Zm0-1.57a1.81,1.81,0,0,0,1.39-.53,2.18,2.18,0,0,0,.52-1.58V82.7a2.14,2.14,0,0,0-.52-1.57,2.06,2.06,0,0,0-2.78,0A2.18,2.18,0,0,0,236,82.7V84a2.22,2.22,0,0,0,.51,1.58A1.82,1.82,0,0,0,237.94,86.09Zm5.9-6.88h2v1.46H246a3.09,3.09,0,0,1,.91-1.2,2.5,2.5,0,0,1,1.55-.45,3,3,0,0,1,1.28.27,2.52,2.52,0,0,1,1,.8,3.69,3.69,0,0,1,.64,1.35,8,8,0,0,1,0,3.8,3.82,3.82,0,0,1-.64,1.36,2.61,2.61,0,0,1-1,.8,3,3,0,0,1-1.28.26,2.5,2.5,0,0,1-1.55-.45A3.09,3.09,0,0,1,246,86h-.11v4.66h-2ZM247.6,86a1.72,1.72,0,0,0,1.38-.55,2.1,2.1,0,0,0,.49-1.48V82.68A2.12,2.12,0,0,0,249,81.2a1.72,1.72,0,0,0-1.38-.55,2.16,2.16,0,0,0-1.22.35,1.17,1.17,0,0,0-.49,1v2.6a1.19,1.19,0,0,0,.49,1A2.15,2.15,0,0,0,247.6,86Zm5.32,1.44V79.21h1.7v1.14h.09a2.7,2.7,0,0,1,.55-.93,1.29,1.29,0,0,1,1-.4,1.3,1.3,0,0,1,1,.37,1.69,1.69,0,0,1,.48,1h.08a2.63,2.63,0,0,1,.61-1,1.58,1.58,0,0,1,1.17-.42,1.4,1.4,0,0,1,1.31.66,3.7,3.7,0,0,1,.4,1.93v5.86h-1.68V81.85a1.81,1.81,0,0,0-.21-1,.64.64,0,0,0-.59-.28.88.88,0,0,0-.62.24,1,1,0,0,0-.24.73v5.94h-1.7V81.85a1.93,1.93,0,0,0-.19-1,.67.67,0,0,0-.59-.28.89.89,0,0,0-.64.24,1,1,0,0,0-.24.73v5.94Zm14,.19a4.77,4.77,0,0,1-1.76-.3,3.63,3.63,0,0,1-1.3-.87,3.79,3.79,0,0,1-.78-1.34,5.93,5.93,0,0,1,0-3.6,4,4,0,0,1,.8-1.36,3.49,3.49,0,0,1,1.23-.87,4.33,4.33,0,0,1,1.65-.3,4.16,4.16,0,0,1,1.61.3,3.29,3.29,0,0,1,1.22.84,3.66,3.66,0,0,1,.78,1.31,5.08,5.08,0,0,1,.27,1.69v.68h-5.79V84a2,2,0,0,0,.56,1.46A2.19,2.19,0,0,0,267,86a2.67,2.67,0,0,0,1.31-.3,3,3,0,0,0,.93-.83l1.17,1.17a3.75,3.75,0,0,1-1.31,1.12A4.49,4.49,0,0,1,266.92,87.66Zm-.15-7.14a1.87,1.87,0,0,0-1.39.55,2,2,0,0,0-.53,1.44v.11h3.75v-.14a2,2,0,0,0-.5-1.43A1.71,1.71,0,0,0,266.77,80.52Zm6,7V79.21h2v1.46h.08a2.86,2.86,0,0,1,.83-1.15,2.34,2.34,0,0,1,1.58-.5,2.54,2.54,0,0,1,2,.82,3.2,3.2,0,0,1,.77,2.3v5.33H278v-5c0-1.2-.52-1.79-1.55-1.79a2,2,0,0,0-.61.08,1.72,1.72,0,0,0-.53.25,1.41,1.41,0,0,0-.37.4,1.28,1.28,0,0,0-.12.58v5.52Zm13.75,0a2.2,2.2,0,0,1-1.74-.63,2.27,2.27,0,0,1-.56-1.61v-4.4h-2.4V79.21h1.63a1,1,0,0,0,.7-.19,1,1,0,0,0,.21-.72v-2h1.91v2.91h3.36v1.62h-3.36v5h3.36v1.62Z"
                />
              </g>
            </g>
            <g id="container3">
              <path
                id="border3"
                className="cls-14"
                d="M329.1,306.61H430.52a7.29,7.29,0,0,1,7.5,7.06V410a7.29,7.29,0,0,1-7.5,7.06H329.1a7.28,7.28,0,0,1-7.49-7.06V313.67A7.28,7.28,0,0,1,329.1,306.61Z"
              />
              <g id="icon3_with_text" data-name="icon3 with text">
                <path
                  id="circle3"
                  className="cls-15"
                  d="M380.52,321.25h0a26,26,0,0,1,26,26h0a26,26,0,0,1-26,26h0a26,26,0,0,1-26-26h0A26,26,0,0,1,380.52,321.25Z"
                />
                <g id="icon3">
                  <path
                    className="cls-16"
                    d="M377.52,354.68h-5.69c-5.05,0-6.31-1.26-6.31-6.32v-9c0-5.05,1.26-6.31,6.31-6.31h15.8c5.05,0,6.31,1.26,6.31,6.31"
                  />
                  <path className="cls-16" d="M377.52,361.46v-6.78" />
                  <path className="cls-16" d="M365.52,348.68h12" />
                  <path
                    className="cls-16"
                    d="M395.52,348.45V357c0,3.55-.88,4.44-4.44,4.44h-5.32c-3.56,0-4.44-.89-4.44-4.44v-8.57c0-3.55.88-4.44,4.44-4.44h5.32C394.64,344,395.52,344.9,395.52,348.45Z"
                  />
                  <path className="cls-17" d="M388.39,356.63h0" />
                </g>
                <path
                  id="text3"
                  className="cls-8"
                  d="M351.19,399.44a5.59,5.59,0,0,1-2.46-.49,4.77,4.77,0,0,1-1.65-1.31l1.26-1.32a4.46,4.46,0,0,0,1.35,1.08,3.78,3.78,0,0,0,1.57.33,2.2,2.2,0,0,0,1.47-.43,1.54,1.54,0,0,0,.51-1.25,1.3,1.3,0,0,0-.38-1,2.52,2.52,0,0,0-1.3-.49l-1.18-.19a3.43,3.43,0,0,1-2.21-1.12,3.28,3.28,0,0,1-.66-2,3,3,0,0,1,1-2.44,4.38,4.38,0,0,1,2.88-.87,5.53,5.53,0,0,1,2.26.42,3.88,3.88,0,0,1,1.53,1.13L354,390.76a3.2,3.2,0,0,0-2.54-1.16c-1.22,0-1.83.51-1.83,1.51a1.19,1.19,0,0,0,.39,1,2.66,2.66,0,0,0,1.31.5l1.17.21a3.69,3.69,0,0,1,2.16,1.07,3,3,0,0,1,.7,2.05,3.77,3.77,0,0,1-.27,1.44,3.25,3.25,0,0,1-.8,1.12,3.67,3.67,0,0,1-1.31.72A5.67,5.67,0,0,1,351.19,399.44Zm11.28-1.64h-.08a3.2,3.2,0,0,1-.85,1.16,2.36,2.36,0,0,1-1.57.48,2.59,2.59,0,0,1-2-.8,3.29,3.29,0,0,1-.76-2.32V391h2v5c0,1.19.52,1.79,1.55,1.79a2.41,2.41,0,0,0,.6-.08,1.92,1.92,0,0,0,.52-.24,1.22,1.22,0,0,0,.37-.42,1.05,1.05,0,0,0,.15-.57V391h2v8.25h-2Zm4.34-6.8h2.05v1.45H369a3.19,3.19,0,0,1,.91-1.2,2.53,2.53,0,0,1,1.56-.45,2.86,2.86,0,0,1,1.28.28,2.41,2.41,0,0,1,1,.8,3.72,3.72,0,0,1,.64,1.34,7.16,7.16,0,0,1,.23,1.9,7.24,7.24,0,0,1-.23,1.91,4,4,0,0,1-.64,1.36,2.67,2.67,0,0,1-1,.8,3.14,3.14,0,0,1-1.28.25,2.6,2.6,0,0,1-1.56-.44,3.19,3.19,0,0,1-.91-1.2h-.11v4.65h-2.05Zm3.76,6.81a1.75,1.75,0,0,0,1.38-.54,2.14,2.14,0,0,0,.49-1.49v-1.31A2.13,2.13,0,0,0,372,393a1.75,1.75,0,0,0-1.38-.54,2,2,0,0,0-1.21.35,1.17,1.17,0,0,0-.5,1v2.59a1.23,1.23,0,0,0,.5,1.06A2.17,2.17,0,0,0,370.57,397.81Zm5.84-6.81h2v1.45h.12a3,3,0,0,1,.91-1.2,2.48,2.48,0,0,1,1.55-.45,2.83,2.83,0,0,1,1.28.28,2.5,2.5,0,0,1,1,.8,3.89,3.89,0,0,1,.64,1.34,7.19,7.19,0,0,1,.22,1.9A7.27,7.27,0,0,1,384,397a4.18,4.18,0,0,1-.64,1.36,2.78,2.78,0,0,1-1,.8,3.11,3.11,0,0,1-1.28.25,2.54,2.54,0,0,1-1.55-.44,3,3,0,0,1-.91-1.2h-.12v4.65h-2Zm3.76,6.81a1.74,1.74,0,0,0,1.37-.54,2.15,2.15,0,0,0,.5-1.49v-1.31a2.13,2.13,0,0,0-.5-1.49,1.74,1.74,0,0,0-1.37-.54,2.06,2.06,0,0,0-1.22.35,1.17,1.17,0,0,0-.5,1v2.59a1.23,1.23,0,0,0,.5,1.06A2.2,2.2,0,0,0,380.17,397.81Zm9.53,1.63a4.56,4.56,0,0,1-1.7-.3,3.48,3.48,0,0,1-1.26-.87,3.78,3.78,0,0,1-.8-1.35,5.4,5.4,0,0,1-.28-1.8,5.3,5.3,0,0,1,.28-1.79,3.92,3.92,0,0,1,.8-1.36,3.58,3.58,0,0,1,1.26-.86,4.76,4.76,0,0,1,3.38,0,3.41,3.41,0,0,1,1.26.86,3.77,3.77,0,0,1,.8,1.36,5.29,5.29,0,0,1,.29,1.79,5.39,5.39,0,0,1-.29,1.8,3.64,3.64,0,0,1-.8,1.35,3.31,3.31,0,0,1-1.26.87A4.56,4.56,0,0,1,389.7,399.44Zm0-1.56a1.86,1.86,0,0,0,1.39-.53,2.25,2.25,0,0,0,.51-1.59v-1.28a2.16,2.16,0,0,0-.51-1.56,1.8,1.8,0,0,0-1.39-.55,1.82,1.82,0,0,0-1.4.55,2.16,2.16,0,0,0-.51,1.56v1.28a2.25,2.25,0,0,0,.51,1.59A1.88,1.88,0,0,0,389.7,397.88Zm6-.24h2.05v-5h-2.05V391h4.1v2.25h.12a4.87,4.87,0,0,1,.31-.83,2.74,2.74,0,0,1,.51-.72,2.46,2.46,0,0,1,.77-.51,2.66,2.66,0,0,1,1.07-.19h.9v1.92h-1.7a2,2,0,0,0-1.46.54,1.92,1.92,0,0,0-.52,1.39v2.79h2.86v1.61h-7Zm13.75,1.61a2.23,2.23,0,0,1-1.74-.62,2.36,2.36,0,0,1-.56-1.62v-4.4h-2.4V391h1.63a1,1,0,0,0,.71-.2,1,1,0,0,0,.2-.72v-2h1.91V391h3.36v1.61h-3.36v5h3.36v1.61Z"
                />
              </g>
            </g>
            <g id="container2">
              <path
                id="border2"
                className="cls-18"
                d="M374.42,146.55H475.84a7.29,7.29,0,0,1,7.5,7.06V250a7.29,7.29,0,0,1-7.5,7.06H374.42a7.29,7.29,0,0,1-7.5-7.06V153.61A7.29,7.29,0,0,1,374.42,146.55Z"
              />
              <g id="icon2_with_text" data-name="icon2 with text">
                <path
                  id="circle2"
                  className="cls-19"
                  d="M425.14,161.19h0a26,26,0,0,1,26,26h0a26,26,0,0,1-26,26h0a26,26,0,0,1-26-26h0A26,26,0,0,1,425.14,161.19Z"
                />
                <g id="icon2">
                  <path
                    className="cls-20"
                    d="M411.66,186v6.73c0,6.74,2.7,9.44,9.43,9.44h8.09c6.73,0,9.43-2.7,9.43-9.44V186"
                  />
                  <path
                    className="cls-20"
                    d="M425.14,187.19a4.45,4.45,0,0,0,4.5-5l-1-10h-7l-1,10A4.45,4.45,0,0,0,425.14,187.19Z"
                  />
                  <path
                    className="cls-20"
                    d="M434.61,187.19a4.89,4.89,0,0,0,4.95-5.48l-.42-4.12c-.54-3.9-2-5.4-6-5.4h-4.58l1.05,10.51A5.12,5.12,0,0,0,434.61,187.19Z"
                  />
                  <path
                    className="cls-20"
                    d="M415.6,187.19a5.08,5.08,0,0,0,4.95-4.49l.33-3.31.72-7.2H417c-3.93,0-5.43,1.5-6,5.4l-.41,4.12A4.89,4.89,0,0,0,415.6,187.19Z"
                  />
                  <path
                    className="cls-20"
                    d="M425.14,194.69c-2.5,0-3.75,1.24-3.75,3.75v3.75h7.5v-3.75C428.89,195.93,427.65,194.69,425.14,194.69Z"
                  />
                </g>
                <path
                  id="text2"
                  className="cls-8"
                  d="M378.31,228h3.47a3.77,3.77,0,0,1,3.24,1.44,8.58,8.58,0,0,1,0,8.3,3.79,3.79,0,0,1-3.24,1.43h-3.47Zm3.33,9.49a1.94,1.94,0,0,0,1.69-.75,3.63,3.63,0,0,0,.57-2.2v-1.93a3.56,3.56,0,0,0-.57-2.18,1.94,1.94,0,0,0-1.69-.75h-1.26v7.81Zm10.09,1.87a4.81,4.81,0,0,1-1.76-.3,3.46,3.46,0,0,1-2.08-2.21,6.13,6.13,0,0,1,0-3.6,3.89,3.89,0,0,1,.8-1.36,3.49,3.49,0,0,1,1.23-.87,4.33,4.33,0,0,1,1.65-.3,4.18,4.18,0,0,1,1.62.3,3.22,3.22,0,0,1,1.21.84,3.66,3.66,0,0,1,.78,1.31,4.79,4.79,0,0,1,.28,1.69v.68h-5.8v.2a2,2,0,0,0,.57,1.46,2.14,2.14,0,0,0,1.56.54,2.71,2.71,0,0,0,1.32-.3,2.82,2.82,0,0,0,.92-.83l1.17,1.17a3.66,3.66,0,0,1-1.31,1.12A4.49,4.49,0,0,1,391.73,239.38Zm-.15-7.14a1.85,1.85,0,0,0-1.39.55,2,2,0,0,0-.53,1.44v.11h3.75v-.14a2,2,0,0,0-.5-1.43A1.71,1.71,0,0,0,391.58,232.24Zm5.85-1.31h2.05v1.46h.11a3.11,3.11,0,0,1,.92-1.2,2.48,2.48,0,0,1,1.55-.45,3,3,0,0,1,1.28.27,2.59,2.59,0,0,1,1,.8,3.89,3.89,0,0,1,.64,1.34,7.27,7.27,0,0,1,.22,1.91A7.14,7.14,0,0,1,405,237a4,4,0,0,1-.64,1.36,2.68,2.68,0,0,1-1,.8,3,3,0,0,1-1.28.26,2.48,2.48,0,0,1-1.55-.45,3.11,3.11,0,0,1-.92-1.2h-.11v4.66h-2.05Zm3.77,6.82a1.71,1.71,0,0,0,1.37-.55,2.12,2.12,0,0,0,.5-1.48V234.4a2.1,2.1,0,0,0-.5-1.48,1.71,1.71,0,0,0-1.37-.55,2.14,2.14,0,0,0-1.22.35,1.18,1.18,0,0,0-.5,1v2.6a1.21,1.21,0,0,0,.5,1A2.13,2.13,0,0,0,401.2,237.75Zm5.88-.18h2.62V229h-2.62v-1.61h4.67v10.22h2.64v1.62h-7.31Zm13.24,1.81a4.56,4.56,0,0,1-1.7-.3,3.74,3.74,0,0,1-1.26-.87,3.89,3.89,0,0,1-.8-1.36,6.07,6.07,0,0,1,0-3.58,3.89,3.89,0,0,1,.8-1.36,3.6,3.6,0,0,1,1.26-.87,4.56,4.56,0,0,1,1.7-.3,4.49,4.49,0,0,1,1.68.3,3.43,3.43,0,0,1,1.26.87,3.61,3.61,0,0,1,.8,1.36,5.67,5.67,0,0,1,0,3.58,3.61,3.61,0,0,1-.8,1.36,3.55,3.55,0,0,1-1.26.87A4.49,4.49,0,0,1,420.32,239.38Zm0-1.57a1.81,1.81,0,0,0,1.39-.53,2.22,2.22,0,0,0,.51-1.58v-1.28a2.18,2.18,0,0,0-.51-1.57,2.06,2.06,0,0,0-2.78,0,2.14,2.14,0,0,0-.52,1.57v1.28a2.18,2.18,0,0,0,.52,1.58A1.81,1.81,0,0,0,420.32,237.81Zm11.85-6.88h2.08l-3.95,9.73a3,3,0,0,1-.9,1.28,2.46,2.46,0,0,1-1.58.45h-1.51v-1.62h2l.62-1.66-3.32-8.18h2.17l1.27,3.46.88,2.62H430l.88-2.62Zm3.13,8.26v-8.26H437v1.14h.1a2.74,2.74,0,0,1,.54-.93,1.52,1.52,0,0,1,2,0,1.69,1.69,0,0,1,.48,1h.08a2.63,2.63,0,0,1,.61-1,1.6,1.6,0,0,1,1.17-.41,1.44,1.44,0,0,1,1.31.65,3.77,3.77,0,0,1,.4,1.94v5.86H442v-5.62a1.81,1.81,0,0,0-.21-1,.66.66,0,0,0-.59-.28.88.88,0,0,0-.63.24,1,1,0,0,0-.24.73v5.94h-1.69v-5.62a2,2,0,0,0-.19-1,.67.67,0,0,0-.6-.28.93.93,0,0,0-.64.24,1,1,0,0,0-.24.73v5.94Zm14,.19a4.81,4.81,0,0,1-1.76-.3,3.53,3.53,0,0,1-2.08-2.21,6.13,6.13,0,0,1,0-3.6,3.89,3.89,0,0,1,.8-1.36,3.49,3.49,0,0,1,1.23-.87,4.33,4.33,0,0,1,1.65-.3,4.18,4.18,0,0,1,1.62.3,3.14,3.14,0,0,1,1.21.84,3.54,3.54,0,0,1,.79,1.31,5,5,0,0,1,.27,1.69v.68h-5.79v.2a1.94,1.94,0,0,0,.56,1.46,2.15,2.15,0,0,0,1.57.54,2.67,2.67,0,0,0,1.31-.3,3,3,0,0,0,.93-.83l1.16,1.17a3.58,3.58,0,0,1-1.31,1.12A4.43,4.43,0,0,1,449.29,239.38Zm-.14-7.14a1.82,1.82,0,0,0-1.39.55,1.94,1.94,0,0,0-.53,1.44v.11H451v-.14a2,2,0,0,0-.49-1.43A1.72,1.72,0,0,0,449.15,232.24Zm5.94,6.95v-8.26h2.05v1.46h.08a3.06,3.06,0,0,1,.83-1.16,2.38,2.38,0,0,1,1.59-.49,2.55,2.55,0,0,1,2,.82,3.19,3.19,0,0,1,.76,2.3v5.33h-2v-5c0-1.2-.52-1.79-1.56-1.79a2.09,2.09,0,0,0-.61.08,1.47,1.47,0,0,0-.52.25,1.41,1.41,0,0,0-.37.4,1.16,1.16,0,0,0-.13.58v5.52Zm13.76,0a2.24,2.24,0,0,1-1.75-.63,2.32,2.32,0,0,1-.56-1.61v-4.4h-2.4v-1.62h1.64a1,1,0,0,0,.7-.19,1,1,0,0,0,.21-.72v-2h1.9v2.91H472v1.62h-3.36v5H472v1.62Z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
export default WhatWeDoAnimation;
