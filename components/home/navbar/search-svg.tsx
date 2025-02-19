import React from 'react'

function SearchSvg({ className }: { className?: string }) {
  return (
    <div>
      <svg
        width="26"
        height="27"
        viewBox="0 0 26 27"
        fill="RGB(239, 212, 6)"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {' '}
        <rect
          y="0.507812"
          width="26"
          height="26"
          rx="13"
          fill="RGB(239, 212, 6)"
        ></rect>{' '}
        <path
          d="M14.668 7.67383H19.668"
          stroke="#000039"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M14.668 10.1738H17.168"
          stroke="#000039"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M20.5013 13.0905C20.5013 17.4655 16.9596 21.0072 12.5846 21.0072C8.20964 21.0072 4.66797 17.4655 4.66797 13.0905C4.66797 8.71549 8.20964 5.17383 12.5846 5.17383"
          stroke="#000039"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
        <path
          d="M21.3346 21.8405L19.668 20.1738"
          stroke="#000039"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
      </svg>
    </div>
  )
}

export default SearchSvg
