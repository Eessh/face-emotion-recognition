import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ initialState, offFunc, onFunc, transitionType }) => {
  // const {theme} = useThemeBoiiContext();
  const [toggleDirection, setToggleDirection] = useState(initialState === true ? 20 : 0);

  const handleClick = () => {
    setToggleDirection(toggleDirection === 0 ? 20 : 0);
    toggleDirection === 0 ? onFunc() : offFunc();
  }

  return (
    <motion.div
      className={"ToggleContainer p-1 w-12 h-7 rounded-l-full rounded-r-full cursor-pointer"}
      style={{
        // backgroundColor: toggleDirection === 20
        //                   ? theme.toggle.state.on.backgroundColor
        //                   : theme.toggle.state.off.backgroundColor
        backgroundColor: toggleDirection === 20
                          ? "#FE8F8F"
                          : "#FE8F8F"
      }}
      onTap={handleClick}
    >
      <motion.div
        className="flex flex-row items-center justify-center w-5 h-5 rounded-full ToggleCircle"
        onTap={handleClick}
        animate={{ x: toggleDirection }}
        transition={{
          type: transitionType ? transitionType : "tween",
          stiffness: 700,
          damping: 30
        }}
      >
        <motion.div
          className="w-4 h-4 rounded-full ToggleHoverCircle"
          style={{
            // backgroundColor: toggleDirection === 20
            //                   ? theme.toggle.state.on.color
            //                   : theme.toggle.state.off.color
            backgroundColor: toggleDirection === 20
                              ? "#483434"
                              : "whitesmoke"
          }}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
        >
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Toggle