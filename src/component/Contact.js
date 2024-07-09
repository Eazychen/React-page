import React from "react";
import { FaPhone, FaLine, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="bg-gray-200">
      <motion.main
        className="container-layout container-layout-lg container-layout-xl mb-10 mt-20 flex flex-col py-10 md:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex w-full flex-col items-center p-2 md:w-1/2"
          variants={itemVariants}
        >
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            聯繫資訊
          </h2>
          <motion.div
            className="mb-4 flex items-center text-left"
            variants={itemVariants}
          >
            <FaPhone className="mr-2 text-gray-700" />
            <strong>聯絡電話：</strong>
            <a
              href="tel:0953537123"
              className="ml-1 text-blue-500 hover:underline"
            >
              0953-537-123
            </a>
          </motion.div>
          <motion.div
            className="mb-4 flex items-center text-left"
            variants={itemVariants}
          >
            <FaLine className="mr-2 text-gray-700" />
            <strong>官方 Line:</strong>
            <a
              href="https://lin.ee/pa7PkA0"
              className="ml-1 text-blue-500 hover:underline "
            >
              @pa7PkA0
            </a>
          </motion.div>
          <motion.div
            className="mb-4 flex items-center text-left"
            variants={itemVariants}
          >
            <FaMapMarkerAlt className="mr-2 text-gray-700" />
            <strong>地址：</strong>
            <a
              href="https://maps.app.goo.gl/Fj1eKydQsmeyTaBS6"
              target="_blank"
              rel="noopener noreferrer" //安全性考量
              className="ml-1 text-sm text-blue-500 hover:underline md:text-base"
            >
              412台中市大里區立仁路42-7號
            </a>
          </motion.div>
          <motion.div
            className="flex w-full justify-center md:w-3/4"
            variants={itemVariants}
            whileHover={{ scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <motion.img
              src="/images/contact.jpg"
              alt="contact"
              className="w-full rounded-lg object-cover opacity-80 shadow-md"
              loading="lazy"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-lg border-4 border-white shadow-lg md:w-1/2"
          variants={containerVariants}
        >
          <h3 className="bg-white p-2 pb-2 text-center text-xl font-semibold text-gray-800">
            我們的位置
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.759884106482!2d120.6996926748433!3d24.10993817487945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dab3fc97ec9%3A0x50df1b9e2b7c9649!2z56uL5piO6Zu75Zmo6KGMLeWkp-mHjOWGt-awo-e2reS_ruaOqOiWpnzlhrfmsKPkv53ppIp85bCI5qWt5Ya35rCj5L-d6aSKfOWGt-awo-W_q-mAn-e2reS_rnzngYzlhrfnhaR85Ya35rCj5a6J6KOdfOWwiOalreWGt-awo-S_nemkinzmmbrmhaflrrbpm7s!5e0!3m2!1szh-TW!2stw!4v1720441687503!5m2!1szh-TW!2stw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Google Map of our location"
          ></iframe>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Contact;
