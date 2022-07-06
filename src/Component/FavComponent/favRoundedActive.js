// Heart Icon for Favourite
import React from 'react';

export default function FavRoundedActive({
  size = 69,
  title = 'Fav Icon',
  color = '#192A55',
  className,
  ...rest
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 69 69" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill="#edf0f8" cx="34.5" cy="34.5" r="34.5"/>
        <path d="M41.297 22c-1.574 0-3.017.506-4.288 1.505-1.22.958-2.031 2.177-2.509 3.064-.478-.887-1.29-2.106-2.509-3.064C30.72 22.506 29.277 22 27.703 22 23.312 22 20 25.648 20 30.485c0 5.226 4.132 8.802 10.386 14.215 1.062.92 2.266 1.961 3.517 3.073a.897.897 0 0 0 1.194 0 358.991 358.991 0 0 1 3.518-3.074C44.868 39.287 49 35.711 49 30.485 49 25.648 45.688 22 41.297 22z"
              fill="#192A55"
              fillRule="nonzero"/>
      </g>
    </svg>


  );
}
