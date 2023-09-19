// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { AnimatePresense, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../config/config";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

const Customizer = () => {
  return <div>Customizer</div>;
};

export default Customizer;
