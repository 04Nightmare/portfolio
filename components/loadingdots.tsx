import { motion } from "framer-motion";

const LoadingDots = () => {
    return (
        <span className="inline-flex ml-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="text-orange-500"
        >
          .
        </motion.span>
      ))}
    </span>
    )
}

export default LoadingDots;