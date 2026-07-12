"use client";

import React, { useState, useEffect } from "react";

// Dotted Globe/Circle SVG (pulses and rotates slowly for micro-animation)
const DottedGlobe = () => {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="animate-spin text-white" style={{ animationDuration: "12s" }}>
      {/* Center dot */}
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />

      {/* Inner ring (r=4.5) */}
      <circle cx="16.5" cy="12" r="1" fill="currentColor" />
      <circle cx="14.25" cy="15.9" r="1" fill="currentColor" />
      <circle cx="9.75" cy="15.9" r="1" fill="currentColor" />
      <circle cx="7.5" cy="12" r="1" fill="currentColor" />
      <circle cx="9.75" cy="8.1" r="1" fill="currentColor" />
      <circle cx="14.25" cy="8.1" r="1" fill="currentColor" />

      {/* Outer ring (r=8.5) */}
      <circle cx="20.5" cy="12" r="0.8" fill="currentColor" />
      <circle cx="19.36" cy="16.25" r="0.8" fill="currentColor" />
      <circle cx="16.25" cy="19.36" r="0.8" fill="currentColor" />
      <circle cx="12" cy="20.5" r="0.8" fill="currentColor" />
      <circle cx="7.75" cy="19.36" r="0.8" fill="currentColor" />
      <circle cx="4.64" cy="16.25" r="0.8" fill="currentColor" />
      <circle cx="3.5" cy="12" r="0.8" fill="currentColor" />
      <circle cx="4.64" cy="7.75" r="0.8" fill="currentColor" />
      <circle cx="7.75" cy="4.64" r="0.8" fill="currentColor" />
      <circle cx="12" cy="3.5" r="0.8" fill="currentColor" />
      <circle cx="16.25" cy="4.64" r="0.8" fill="currentColor" />
      <circle cx="19.36" cy="7.75" r="0.8" fill="currentColor" />
    </svg>
  );
};

// Dotted X SVG for close button (cross shape built with individual circle dots)
const DottedX = () => {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className="text-white">
      {/* Diagonal 1 */}
      <circle cx="6" cy="6" r="1.1" fill="currentColor" />
      <circle cx="8" cy="8" r="1.1" fill="currentColor" />
      <circle cx="10" cy="10" r="1.1" fill="currentColor" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" />
      <circle cx="14" cy="14" r="1.1" fill="currentColor" />
      <circle cx="16" cy="16" r="1.1" fill="currentColor" />
      <circle cx="18" cy="18" r="1.1" fill="currentColor" />

      {/* Diagonal 2 */}
      <circle cx="18" cy="6" r="1.1" fill="currentColor" />
      <circle cx="16" cy="8" r="1.1" fill="currentColor" />
      <circle cx="14" cy="10" r="1.1" fill="currentColor" />
      {/* (12, 12) is already drawn, skipping intersection to keep dots clean */}
      <circle cx="10" cy="14" r="1.1" fill="currentColor" />
      <circle cx="8" cy="16" r="1.1" fill="currentColor" />
      <circle cx="6" cy="18" r="1.1" fill="currentColor" />
    </svg>
  );
};

// Sun Icon
const SunIcon = () => {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className="text-white">
      <circle cx="12" cy="12" r="3.5" fill="currentColor" />
      <circle cx="12" cy="5" r="1" fill="currentColor" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
      <circle cx="5" cy="12" r="1" fill="currentColor" />
      <circle cx="19" cy="12" r="1" fill="currentColor" />
      <circle cx="7.05" cy="7.05" r="1" fill="currentColor" />
      <circle cx="16.95" cy="16.95" r="1" fill="currentColor" />
      <circle cx="7.05" cy="16.95" r="1" fill="currentColor" />
      <circle cx="16.95" cy="7.05" r="1" fill="currentColor" />
    </svg>
  );
};

// Logo component matching the mockup
const Logo = () => {
  return (
    <div className="flex items-center gap-3 select-none pointer-events-auto">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="black" />
        <path d="M22.6974 21.2661C22.4895 21.4678 22.2775 21.6634 22.0573 21.8507C22.259 21.6428 22.4731 21.4493 22.6974 21.2661Z" fill="url(#paint0_linear_716_616)" />
        <path d="M27.1175 11.5893C27.1175 11.6449 27.1134 11.7004 27.1031 11.7539C27.1093 11.6922 27.1114 11.6284 27.1155 11.5646C27.1175 11.5728 27.1175 11.581 27.1175 11.5893Z" fill="url(#paint1_linear_716_616)" />
        <path d="M28.9081 11.7781C28.8958 11.7184 28.8896 11.6546 28.8896 11.5907C28.8896 11.5722 28.8896 11.5558 28.8916 11.5372C28.8958 11.6175 28.9019 11.6978 28.9081 11.7781Z" fill="url(#paint2_linear_716_616)" />
        <path d="M33.9189 21.8231C33.7172 21.6523 33.5216 21.4732 33.3302 21.288C33.534 21.4568 33.7316 21.6358 33.9189 21.8231Z" fill="url(#paint3_linear_716_616)" />
        <path
          d="M46.6858 29.9022L44.4792 30.7173C38.2259 33.0309 33.2961 37.9627 30.9825 44.2161L30.1653 46.4226C29.4222 48.4316 26.5817 48.4316 25.8386 46.4226L25.0214 44.2161C22.7078 37.9627 17.776 33.0309 11.5227 30.7173L9.31608 29.9022C7.30711 29.157 7.30711 26.3165 9.31608 25.5734L10.3638 25.1864H10.3659C11.0904 25.2976 11.8355 25.3552 12.593 25.3552C16.2054 25.3552 19.5112 24.0358 22.0533 21.856C20.5568 23.3648 19.6347 25.4458 19.6347 27.7368C19.6347 32.3578 23.3809 36.104 28.002 36.104C32.623 36.104 36.3692 32.3578 36.3692 27.7368C36.3692 25.4334 35.4368 23.3442 33.928 21.8313C36.4742 24.0276 39.7882 25.3552 43.413 25.3552C44.1705 25.3552 44.9156 25.2976 45.6401 25.1864L46.6858 25.5734C48.6948 26.3165 48.6948 29.157 46.6858 29.9022Z"
          fill="url(#paint4_linear_716_616)"
        />
        <path d="M22.6974 21.2661C22.4895 21.4678 22.2775 21.6634 22.0573 21.8507C22.259 21.6428 22.4731 21.4493 22.6974 21.2661Z" fill="url(#paint5_linear_716_616)" />
        <path d="M33.9189 21.8231C33.7172 21.6523 33.5216 21.4732 33.3302 21.288C33.534 21.4568 33.7316 21.6358 33.9189 21.8231Z" fill="url(#paint6_linear_716_616)" />
        <path
          d="M45.6365 25.1864C44.9119 25.2975 44.1668 25.3551 43.4093 25.3551C39.7845 25.3551 36.4706 24.0275 33.9244 21.8312C33.9202 21.8312 33.9182 21.8271 33.9141 21.8209C33.7268 21.6336 33.5292 21.4545 33.3254 21.2857C33.3233 21.2857 33.3233 21.2837 33.3213 21.2816C30.7936 18.8466 29.1469 15.5038 28.9061 11.7761C28.8999 11.6958 28.8937 11.6155 28.8896 11.5353C28.9163 10.9692 29.3877 10.5164 29.962 10.5164C30.3943 10.5164 30.7689 10.7737 30.9356 11.1442L30.9788 11.2594C30.9788 11.2594 30.9788 11.2677 30.985 11.2718C30.9871 11.2759 30.9891 11.28 30.9891 11.2841C33.3048 17.5251 38.2305 22.4446 44.4756 24.7562L45.6365 25.1864Z"
          fill="url(#paint7_linear_716_616)"
        />
        <path d="M30.9385 11.1453C30.9591 11.1864 30.9756 11.2276 30.9879 11.2729C30.9838 11.2688 30.9838 11.2646 30.9818 11.2605L30.9385 11.1453Z" fill="url(#paint8_linear_716_616)" />
        <path d="M33.9189 21.8231C33.7172 21.6523 33.5216 21.4732 33.3302 21.288C33.534 21.4568 33.7316 21.6358 33.9189 21.8231Z" fill="url(#paint9_linear_716_616)" />
        <path d="M28.8916 11.5372C28.8958 11.6175 28.9019 11.6978 28.9081 11.7781C28.8958 11.7184 28.8896 11.6546 28.8896 11.5907C28.8896 11.5722 28.8896 11.5558 28.8916 11.5372Z" fill="url(#paint10_linear_716_616)" />
        <path d="M30.9879 11.2729C30.9879 11.2729 30.9838 11.2646 30.9818 11.2605L30.9385 11.1453C30.9591 11.1864 30.9756 11.2276 30.9879 11.2729Z" fill="url(#paint11_linear_716_616)" />
        <path
          d="M27.1156 11.5579C27.1156 11.5579 27.1177 11.562 27.1156 11.5641C27.1115 11.6279 27.1095 11.6917 27.1033 11.7534C26.8666 15.4811 25.2261 18.826 22.7025 21.2652C22.4781 21.4484 22.2641 21.6418 22.0623 21.8497C22.0603 21.8518 22.0582 21.8539 22.0562 21.8559C19.5141 24.0357 16.2083 25.3551 12.5959 25.3551C11.8384 25.3551 11.0933 25.2975 10.3687 25.1864L11.5255 24.7562C17.7686 22.4446 22.6963 17.5272 25.014 11.2862C25.0161 11.28 25.0182 11.2759 25.0182 11.2718C25.0223 11.2677 25.0223 11.2635 25.0243 11.2594L25.0552 11.173C25.0552 11.173 25.0552 11.1647 25.0593 11.1627C25.2261 10.7819 25.6048 10.5164 26.0453 10.5164C26.6257 10.5164 27.1012 10.9815 27.1156 11.5579Z"
          fill="url(#paint12_linear_716_616)"
        />
        <path d="M22.0573 21.8507C22.259 21.6428 22.4731 21.4493 22.6974 21.2661C22.4895 21.4678 22.2775 21.6634 22.0573 21.8507Z" fill="url(#paint13_linear_716_616)" />
        <path d="M25.0548 11.1744L25.0239 11.2609C25.0239 11.2609 25.0218 11.2691 25.0177 11.2732C25.028 11.2383 25.0403 11.2053 25.0548 11.1744Z" fill="url(#paint14_linear_716_616)" />
        <path d="M25.0177 11.2732C25.028 11.2383 25.0403 11.2053 25.0548 11.1744L25.0239 11.2609C25.0239 11.2609 25.0218 11.2691 25.0177 11.2732Z" fill="url(#paint15_linear_716_616)" />
        <path d="M27.1175 11.5893C27.1175 11.6449 27.1134 11.7004 27.1031 11.7539C27.1093 11.6922 27.1114 11.6284 27.1155 11.5646C27.1175 11.5728 27.1175 11.581 27.1175 11.5893Z" fill="url(#paint16_linear_716_616)" />
        <path d="M28.0025 9.13423C29.0268 9.13423 29.8571 8.3039 29.8571 7.27964C29.8571 6.25538 29.0268 5.42505 28.0025 5.42505C26.9782 5.42505 26.1479 6.25538 26.1479 7.27964C26.1479 8.3039 26.9782 9.13423 28.0025 9.13423Z" fill="url(#paint17_linear_716_616)" />
        <defs>
          <linearGradient id="paint0_linear_716_616" x1="-0.00227106" y1="-3.55574" x2="22.6109" y2="43.5109" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint1_linear_716_616" x1="26.9446" y1="-3.60789" x2="27.4511" y2="43.4595" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint2_linear_716_616" x1="28.7332" y1="-3.6245" x2="29.2375" y2="43.4415" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint3_linear_716_616" x1="33.3528" y1="-3.67394" x2="33.8571" y2="43.3928" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint4_linear_716_616" x1="27.9999" y1="14.3718" x2="27.9999" y2="47.7215" gradientUnits="userSpaceOnUse">
            <stop stop-color="#999999" />
            <stop offset="0.04" stop-color="#9F9F9F" />
            <stop offset="0.34" stop-color="#C8C8C8" />
            <stop offset="0.61" stop-color="#E6E6E6" />
            <stop offset="0.84" stop-color="#F8F8F8" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient id="paint5_linear_716_616" x1="-0.00227106" y1="-3.55574" x2="22.6109" y2="43.5109" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint6_linear_716_616" x1="33.3528" y1="-3.67394" x2="33.8571" y2="43.3928" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint7_linear_716_616" x1="-0.00374942" y1="1.64273" x2="0.202088" y2="41.538" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CCCCCC" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient id="paint8_linear_716_616" x1="30.8027" y1="-3.64885" x2="31.307" y2="43.4198" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint9_linear_716_616" x1="33.3528" y1="-3.67394" x2="33.8571" y2="43.3928" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint10_linear_716_616" x1="28.7332" y1="-3.6245" x2="29.2375" y2="43.4415" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint11_linear_716_616" x1="30.8027" y1="-3.64885" x2="31.307" y2="43.4198" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint12_linear_716_616" x1="18.7422" y1="1.64273" x2="18.7422" y2="41.538" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CCCCCC" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient id="paint13_linear_716_616" x1="-0.00227106" y1="-3.55574" x2="22.6109" y2="43.5109" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint14_linear_716_616" x1="24.8757" y1="-3.58441" x2="25.3821" y2="43.4833" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint15_linear_716_616" x1="24.8757" y1="-3.58441" x2="25.3821" y2="43.4833" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint16_linear_716_616" x1="26.9446" y1="-3.60789" x2="27.4511" y2="43.4595" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint17_linear_716_616" x1="28.0025" y1="1.64176" x2="28.0025" y2="41.5371" gradientUnits="userSpaceOnUse">
            <stop stop-color="#CCCCCC" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="115" height="39" viewBox="0 0 115 39" fill="none">
        <path d="M2.41709 34.2686C3.19639 34.2686 3.76345 34.0817 4.12775 33.7047C4.48889 33.3309 4.66946 32.7385 4.66946 31.9339V8.54224H9.17103V32.2634C9.17103 36.2391 7.22594 38.2253 3.33578 38.2253H0V34.2655H2.41709V34.2686Z" fill="#333333" />
        <path
          d="M8.85201 0.769796C9.36521 1.28299 9.62181 1.92924 9.62181 2.70854C9.62181 3.48784 9.36521 4.13409 8.85201 4.64729C8.33881 5.16048 7.69257 5.41708 6.91327 5.41708C6.13397 5.41708 5.44653 5.16048 4.93334 4.64729C4.42014 4.13409 4.16354 3.48784 4.16354 2.70854C4.16354 1.92924 4.42648 1.28299 4.95552 0.769796C5.48455 0.256599 6.13713 0 6.91643 0C7.69573 0 8.34198 0.256599 8.85518 0.769796H8.85201Z"
          fill="#333333"
        />
        <path
          d="M31.95 8.54357V29.8888H27.9901L27.4896 27.1802C25.8772 29.1538 23.6818 30.139 20.9036 30.139C18.4009 30.139 16.3735 29.3597 14.8181 27.8043C13.2626 26.2489 12.4833 23.7463 12.4833 20.2996V8.54357H16.9849V19.8434C16.9849 21.9279 17.4031 23.5118 18.2362 24.5952C19.0694 25.6787 20.308 26.2204 21.9458 26.2204C23.6691 26.2204 25.0155 25.59 25.9912 24.3228C26.9637 23.0588 27.4516 21.3292 27.4516 19.1306V8.54041H31.9532L31.95 8.54357Z"
          fill="#333333"
        />
        <path
          d="M39.8086 0.769796C40.3376 1.28299 40.6006 1.92924 40.6006 2.70854C40.6006 3.48784 40.3376 4.13409 39.8086 4.64729C39.2796 5.16048 38.627 5.41708 37.8477 5.41708C37.0684 5.41708 36.4158 5.16048 35.8868 4.64729C35.3577 4.13409 35.0948 3.48784 35.0948 2.70854C35.0948 1.92924 35.3577 1.28299 35.8868 0.769796C36.4158 0.256599 37.0684 0 37.8477 0C38.627 0 39.2796 0.256599 39.8086 0.769796Z"
          fill="#333333"
        />
        <path d="M40.0995 8.54224H35.5979V29.8874H40.0995V8.54224Z" fill="#333333" />
        <path
          d="M59.9983 28.0334C58.2749 29.4368 56.0637 30.14 53.371 30.14C51.2581 30.14 49.3954 29.6902 47.7829 28.7842C46.1704 27.8813 44.9255 26.5952 44.0511 24.9289C43.1768 23.2626 42.7365 21.3428 42.7365 19.176C42.7365 17.0092 43.18 15.1053 44.0701 13.4643C44.9603 11.8233 46.218 10.553 47.8431 9.65017C49.4682 8.74732 51.3531 8.29431 53.4914 8.29431C56.1588 8.29431 58.3415 8.99758 60.0363 10.401C61.7311 11.8043 62.7892 13.7146 63.2042 16.1348H58.5759C58.2686 14.912 57.6604 13.9395 56.7417 13.2172C55.823 12.4949 54.6984 12.1338 53.3647 12.1338C51.5558 12.1338 50.105 12.7864 49.0089 14.0947C47.9096 15.3999 47.3616 17.0979 47.3616 19.1823C47.3616 21.2668 47.9096 23.0123 49.0089 24.3301C50.1081 25.6512 51.559 26.3101 53.3647 26.3101C54.7554 26.3101 55.9085 25.9426 56.824 25.2045C57.7427 24.4695 58.3383 23.4748 58.6171 22.2235H63.2042C62.786 24.6976 61.7184 26.6364 59.9951 28.0397L59.9983 28.0334Z"
          fill="#333333"
        />
        <path
          d="M66.0314 13.4846C66.9057 11.831 68.1285 10.5512 69.6998 9.64833C71.2711 8.74549 73.0704 8.29248 75.0979 8.29248C77.1253 8.29248 78.969 8.71064 80.5371 9.54379C82.1084 10.3769 83.3439 11.5586 84.2467 13.0887C85.1496 14.6187 85.6152 16.4118 85.6438 18.4677C85.6438 19.0253 85.6026 19.5923 85.5202 20.1784H69.4273V20.4286C69.5382 22.2914 70.1211 23.7644 71.1792 24.8478C72.2341 25.9313 73.6375 26.473 75.3893 26.473C76.78 26.473 77.9458 26.1467 78.893 25.4941C79.837 24.8415 80.4643 23.9165 80.7684 22.7222H85.2699C84.8803 24.889 83.8317 26.6694 82.1211 28.0601C80.4104 29.4508 78.2784 30.1446 75.7219 30.1446C73.4981 30.1446 71.5593 29.6947 69.9057 28.7887C68.2521 27.8858 66.9722 26.6155 66.0694 24.9746C65.1665 23.3336 64.7135 21.4297 64.7135 19.2629C64.7135 17.096 65.1507 15.1414 66.0282 13.4878L66.0314 13.4846ZM81.0598 16.8806C80.8634 15.3252 80.2457 14.1087 79.2034 13.2312C78.1612 12.3569 76.8465 11.9165 75.2626 11.9165C73.7895 11.9165 72.516 12.3695 71.4485 13.2724C70.3777 14.1752 69.76 15.379 69.5921 16.8774H81.0567L81.0598 16.8806Z"
          fill="#333333"
        />
        <path
          d="M88.161 25.261C88.7028 24.7319 89.3902 24.469 90.2233 24.469C91.0565 24.469 91.7503 24.7319 92.3078 25.261C92.8622 25.79 93.141 26.4711 93.141 27.3043C93.141 28.1374 92.8622 28.8185 92.3078 29.3475C91.7503 29.8766 91.0565 30.1395 90.2233 30.1395C89.3902 30.1395 88.7028 29.8766 88.161 29.3475C87.6193 28.8185 87.3469 28.1374 87.3469 27.3043C87.3469 26.4711 87.6193 25.79 88.161 25.261Z"
          fill="#333333"
        />
        <path d="M96.2937 18.3003H96.6612V30.0405H96.2937V18.3003Z" fill="#333333" />
        <path
          d="M106.074 29.6892V30.0408H105.789C105.387 30.0408 105.076 29.9268 104.858 29.6955C104.639 29.4674 104.535 29.1506 104.547 28.7483V27.8423C104.313 28.5456 103.888 29.1063 103.274 29.5181C102.659 29.9331 101.871 30.139 100.911 30.139C100.04 30.139 99.3426 29.9268 98.823 29.5023C98.3035 29.0778 98.0437 28.5012 98.0437 27.7758C98.0437 27.0503 98.3257 26.4357 98.8896 26.0049C99.4534 25.5741 100.268 25.3587 101.329 25.3587H104.532V24.4685C104.532 23.629 104.281 22.9764 103.778 22.5076C103.274 22.0387 102.571 21.8043 101.665 21.8043C100.86 21.8043 100.211 21.9817 99.7195 22.3333C99.2285 22.685 98.9149 23.1697 98.7819 23.7842H98.4144C98.5379 23.081 98.8832 22.5171 99.4534 22.0989C100.024 21.6808 100.762 21.4685 101.668 21.4685C102.707 21.4685 103.508 21.7314 104.066 22.2573C104.623 22.7832 104.905 23.5276 104.905 24.4875V28.6818C104.905 28.9954 104.991 29.2425 105.165 29.4199C105.339 29.6005 105.571 29.6892 105.862 29.6892H106.081H106.074ZM104.532 25.6976H101.294C100.366 25.6976 99.6562 25.8814 99.1652 26.252C98.6741 26.6195 98.4271 27.1232 98.4271 27.7599C98.4271 28.3967 98.652 28.8845 99.105 29.252C99.558 29.6195 100.169 29.8064 100.942 29.8064C101.715 29.8064 102.32 29.6733 102.862 29.4041C103.404 29.1348 103.819 28.761 104.104 28.2795C104.389 27.7979 104.532 27.2562 104.532 26.6512V25.6945V25.6976Z"
          fill="#333333"
        />
        <path
          d="M112.918 22.0157C113.511 22.38 113.973 22.8869 114.303 23.5426C114.632 24.1952 114.797 24.9492 114.797 25.7982C114.797 26.6472 114.632 27.3853 114.303 28.0442C113.973 28.7031 113.511 29.2195 112.918 29.587C112.326 29.9544 111.648 30.1414 110.888 30.1414C110.004 30.1414 109.247 29.8943 108.616 29.3937C107.986 28.8964 107.558 28.2279 107.333 27.3885L107.283 30.0368H106.947V18.2966H107.314V24.2174C107.561 23.3906 107.999 22.7253 108.632 22.2216C109.263 21.7179 110.017 21.4677 110.888 21.4677C111.648 21.4677 112.323 21.6483 112.918 22.0126V22.0157ZM112.709 29.2924C113.251 28.9502 113.672 28.4782 113.976 27.8763C114.277 27.2712 114.429 26.5807 114.429 25.7982C114.429 25.0157 114.277 24.3378 113.976 23.7359C113.675 23.1308 113.251 22.6588 112.709 22.3198C112.168 21.9777 111.556 21.8098 110.872 21.8098C110.188 21.8098 109.576 21.9809 109.035 22.3198C108.493 22.662 108.071 23.134 107.767 23.7359C107.466 24.341 107.314 25.0284 107.314 25.7982C107.314 26.568 107.466 27.2586 107.767 27.87C108.068 28.4782 108.49 28.9534 109.035 29.2955C109.576 29.6377 110.188 29.8056 110.872 29.8056C111.556 29.8056 112.164 29.6345 112.709 29.2955V29.2924Z"
          fill="#333333"
        />
      </svg>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable scroll when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Closed State Header Bar */}
      <header className="fixed top-0 left-0 w-full z-45 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between pointer-events-none">
        {/* Left Side: Logo */}
        <Logo />

        {/* Right Side: Menu Pill Trigger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`pointer-events-auto bg-[#121212] hover:bg-[#222] text-white rounded-full flex items-center gap-3.5 lg:gap-23 pl-3.5 pr-2.5 py-2 border border-white/5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 active:scale-95 cursor-pointer ${isMenuOpen ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"}`}
        >
          <div className="flex items-center gap-2">
            <DottedGlobe />
            <span className="text-sm font-semibold tracking-wide text-neutral-100">Menu</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#262626] text-neutral-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/5 select-none">50%</span>

            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors select-none">
              <SunIcon />
            </div>
          </div>
        </button>
      </header>

      {/* Menu Overlay Container */}
      <div
        className={`fixed inset-3 md:top-4 md:right-4 md:bottom-4 md:left-auto md:w-[420px] bg-[#f0ede6] text-[#1a1a1a] shadow-[0_24px_64px_rgba(0,0,0,0.16)] rounded-[32px] border border-black/5 flex flex-col z-50 transition-all duration-500 ease-out origin-top-right overflow-hidden ${
          isMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header Bar Inside Expanded Menu */}
        <div className="p-4 md:p-5 flex-shrink-0">
          <div className="bg-[#121212] text-white rounded-full flex items-center justify-between pl-4 pr-2.5 py-2 border border-white/5 shadow-sm">
            <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3.5 cursor-pointer active:scale-95 transition-transform">
              <DottedX />
              <span className="text-sm font-semibold tracking-wide text-neutral-100">Close</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="bg-[#262626] text-neutral-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/5 select-none">50%</span>
              <button className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <SunIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-8 pb-10 select-none custom-scrollbar">
          {/* Menu Section */}
          <div className="mt-4">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-4 block">Menu</span>
            <div className="flex flex-col gap-3">
              <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-[32px] font-semibold text-neutral-400 cursor-not-allowed select-none leading-tight">
                Work
              </a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-[32px] font-semibold text-[#1a1a1a] hover:text-black hover:translate-x-2 transition-all duration-300 leading-tight block w-fit">
                Services
              </a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-[32px] font-semibold text-[#1a1a1a] hover:text-black hover:translate-x-2 transition-all duration-300 leading-tight block w-fit">
                Pricing
              </a>
              <a href="#approach" onClick={() => setIsMenuOpen(false)} className="text-[32px] font-semibold text-[#1a1a1a] hover:text-black hover:translate-x-2 transition-all duration-300 leading-tight block w-fit">
                Approach
              </a>
              <a href="#book-a-call" onClick={() => setIsMenuOpen(false)} className="text-[32px] font-semibold text-[#1a1a1a] hover:text-black hover:translate-x-2 transition-all duration-300 leading-tight block w-fit">
                Book a Call
              </a>
            </div>
          </div>

          <hr className="my-7 border-t border-neutral-300/60" />

          {/* Other Section */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-3 block">Other</span>
            <div className="flex flex-col gap-2.5">
              <a href="#privacy" onClick={() => setIsMenuOpen(false)} className="text-[17px] font-medium text-[#1a1a1a] hover:text-black hover:translate-x-1.5 transition-all duration-300 block w-fit">
                Privacy Policy
              </a>
              <a href="#terms" onClick={() => setIsMenuOpen(false)} className="text-[17px] font-medium text-[#1a1a1a] hover:text-black hover:translate-x-1.5 transition-all duration-300 block w-fit">
                Terms of Services
              </a>
            </div>
          </div>

          <hr className="my-7 border-t border-neutral-300/60" />

          {/* Social media Section */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-3 block">Social media</span>
            <div className="flex flex-col gap-2.5">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[17px] font-medium text-[#1a1a1a] hover:text-black hover:translate-x-1.5 transition-all duration-300 block w-fit">
                Twitter / X
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[17px] font-medium text-[#1a1a1a] hover:text-black hover:translate-x-1.5 transition-all duration-300 block w-fit">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[17px] font-medium text-[#1a1a1a] hover:text-black hover:translate-x-1.5 transition-all duration-300 block w-fit">
                Instagram
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-[17px] font-medium text-[#1a1a1a] hover:text-black hover:translate-x-1.5 transition-all duration-300 block w-fit">
                Dribbble
              </a>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="text-[17px] font-medium text-[#1a1a1a] hover:text-black hover:translate-x-1.5 transition-all duration-300 block w-fit">
                Behance
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dim/Blur overlay behind menu on desktop and mobile */}
      {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/15 backdrop-blur-[2px] z-40 transition-opacity duration-300" />}
    </>
  );
}
