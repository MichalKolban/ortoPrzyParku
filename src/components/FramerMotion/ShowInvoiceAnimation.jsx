import { motion } from "framer-motion";

export const ShowInvoiceAnimation = ({ param, children }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={
        param ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
      }
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
