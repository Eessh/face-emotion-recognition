import { motion } from "framer-motion";

const BackDrop = (props) => {
  return (
    <motion.div
      className="Backdrop bg-[#000000e1] flex items-center justify-center absolute top-0 left-0 z-20 w-full h-full"
      onClick={props.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  )
}

export default BackDrop;