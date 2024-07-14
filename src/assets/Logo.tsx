import { motion } from "framer-motion";

function Logo() {
  // Logo path 적용 icon 애니메이션
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2, // 경로 애니메이션 지속 시간
        ease: "easeInOut",
        fill: {
          delay: 1.5, // 경로 애니메이션 완료 후 fill 애니메이션 시작
          duration: 1,
          ease: "easeInOut",
        }
      },
      fill: "#f47c27"
    }
  };

  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="377.000000pt" height="84.000000pt" viewBox="0 0 377.000000 84.000000"
        preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,84.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <motion.path d="M2474 730 c-12 -4 -31 -21 -43 -36 -20 -25 -21 -38 -21 -211 l0 -185
        34 -34 c31 -31 39 -34 96 -34 34 0 70 5 81 10 30 17 49 64 49 125 l0 55 -45 0
        -45 0 0 -54 c0 -46 -3 -56 -20 -61 -10 -3 -29 -1 -40 5 -20 10 -20 18 -18 177
        3 145 5 167 21 177 28 18 51 -5 57 -55 5 -44 5 -44 48 -47 l42 -3 0 45 c0 62
        -14 93 -52 116 -35 21 -105 26 -144 10z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M100 439 l0 -291 23 6 c12 3 32 6 45 6 22 0 22 2 22 120 l0 119 58 3
        57 3 3 38 3 37 -60 0 -61 0 0 85 0 85 75 0 75 0 0 40 0 40 -120 0 -120 0 0
        -291z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M370 454 l0 -276 68 6 c37 4 93 9 125 12 l57 6 0 39 0 39 -75 -7 -75
        -6 0 75 c0 84 3 88 83 88 38 0 38 0 35 37 l-3 37 -57 -3 -58 -2 0 75 0 76 44
        0 c24 0 58 3 75 6 27 6 31 10 31 40 l0 34 -125 0 -125 0 0 -276z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M1070 480 l0 -250 59 0 c32 0 86 3 120 6 l61 7 0 33 0 34 -75 0 -75
        0 0 210 0 210 -45 0 -45 0 0 -250z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M1340 485 l0 -245 113 0 c61 0 117 4 123 8 5 4 10 21 10 37 l-1 30
        -75 0 -75 0 -3 66 -3 67 61 7 60 7 0 35 0 35 -57 -4 -58 -3 -3 67 -3 67 77 3
        78 3 3 33 4 32 -125 0 -126 0 0 -245z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M1630 490 l0 -240 125 0 125 0 0 35 0 35 -75 0 -75 0 0 70 0 70 60 0
        60 0 0 35 0 35 -60 0 -60 0 0 65 0 65 75 0 75 0 0 35 0 35 -125 0 -125 0 0
        -240z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M1930 490 l0 -240 45 0 45 0 0 73 c0 48 5 80 14 93 14 18 15 17 31
        -19 62 -148 59 -144 106 -149 24 -3 46 -3 48 -1 3 2 -23 63 -56 137 l-60 134
        58 102 c33 56 59 104 59 106 0 2 -20 4 -45 4 l-44 0 -53 -97 -53 -98 -3 98 -3
        97 -44 0 -45 0 0 -240z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M2260 485 l0 -245 45 0 45 0 0 245 0 245 -45 0 -45 0 0 -245z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M2720 481 l0 -248 31 -7 c61 -12 59 -15 59 104 l0 110 50 0 50 0 0
        -109 c0 -119 1 -121 61 -121 l29 0 0 260 0 260 -45 0 -45 0 0 -111 0 -112 -37
        7 c-21 3 -44 6 -50 6 -10 0 -13 28 -13 105 l0 105 -45 0 -45 0 0 -249z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M3125 708 c-11 -50 -85 -492 -82 -494 2 -2 21 -6 43 -10 l41 -6 5 46
        c3 26 8 49 11 52 2 3 26 1 53 -3 48 -8 49 -9 56 -52 4 -24 9 -45 10 -46 2 -1
        22 -5 46 -8 35 -4 42 -2 41 11 0 10 -19 132 -42 272 l-42 255 -67 3 c-63 3
        -68 1 -73 -20z m104 -325 c1 -9 -13 -13 -40 -13 -34 0 -40 3 -36 18 3 9 10 55
        17 102 6 47 14 92 17 100 5 12 39 -158 42 -207z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M3390 455 c0 -255 1 -275 18 -275 9 0 27 -3 39 -6 l23 -6 2 193 3
        194 49 -190 c27 -104 52 -193 55 -196 3 -4 25 -9 49 -13 l42 -6 0 290 0 290
        -40 0 -39 0 -3 -157 -3 -157 -40 155 -41 154 -57 3 -57 3 0 -276z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
        <motion.path d="M815 204 c-93 -7 -171 -13 -172 -13 -2 -1 -3 -15 -3 -32 l0 -32 93 7
        c50 3 140 9 200 13 l107 6 0 34 c0 38 25 36 -225 17z"
          variants={icon}
          initial="hidden"
          animate="visible"
          stroke="#f47c27"
          strokeWidth="2"
          fill="transparent"
        />
      </g>
    </svg>
  );
}

export default Logo;