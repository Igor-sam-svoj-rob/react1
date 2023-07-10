import React, { useContext } from "react";
import Context from "../Context/Context";
import { motion, AnimatePresence } from "framer-motion";
import StiliziraneKartice from "./StiliziraneKartice";

function ListaKartica() {
  const { kartica } = useContext(Context);

  if (!kartica || kartica.length === 0) {
    return <p>Nema sadržaja</p>;
  }
  return (
    <div className="lista-kartica">
      <AnimatePresence>
        {kartica.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StiliziraneKartice key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ListaKartica;
