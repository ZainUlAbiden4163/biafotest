import { motion, AnimatePresence } from "framer-motion";
import { answerVariants, itemVariants } from "../_framerVariants/Variants";

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onClick={onToggle}
      className={`
        border rounded-2xl backdrop-blur-sm cursor-pointer
        transition-colors duration-300 overflow-hidden
        ${
          isOpen
            ? "border-(--color-cyan)"
            : "border-(--color-cyan)/50 hover:bg-(--primary-dark)/50 "
        }
      `}
    >
      {/* Question Row */}
      <div className="flex justify-between items-center gap-4 px-6 py-5">
        {/* Number + Question */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-(--color-cyan) text-sm lg:text-xl shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-semibold text-white text-sm md:text-base lg:text-xl leading-snug">
            {faq.question}
          </h3>
        </div>

        {/* Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex justify-center items-center bg-[rgba(255,255,255,0.08)] rounded-full w-8 h-8 text-white shrink-0"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="px-6 pb-6 pl-14 text-(--color-gray) text-sm md:text-base leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default FaqItem;
