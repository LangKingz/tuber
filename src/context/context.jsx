"use client";

import React, { createContext, useState } from "react";

export const PackagesContext = createContext();

const PackagesProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);
  const [product, setProduct] = useState("");
  const [method, setMethod] = useState("");
  const [email, setEmail] = useState("");
  return <PackagesContext.Provider value={{ selected, setSelected ,method, setMethod, email, setEmail, product, setProduct}}>{children}</PackagesContext.Provider>;
};

export default PackagesProvider;
