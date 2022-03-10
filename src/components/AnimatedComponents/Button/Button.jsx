import { motion } from "framer-motion";

const Button = ({onClick, children, rotateAnimation}) => {
  return (
    <motion.button
      className={"flex flex-row items-center h-12 px-2 rounded-lg text-gray-600 outline-none focus:outline-none"}
      whileHover={{scale: 1.025, rotate: rotateAnimation ? 90 : 0}}
      whileTap={{scale: 0.9, rotate: rotateAnimation ? -90: 0, borderRadius: rotateAnimation ? "100%": "0.5rem"}}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;