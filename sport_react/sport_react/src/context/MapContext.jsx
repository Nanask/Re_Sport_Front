import React from "react";
import { createContext } from "react";
import { useContext } from "react";

const MapContext = createContext();

export const useMapContext = () => {
  return useContext(MapContext);
};

const MapContext = ({ children }) => {
  return <MapContext.Provider>{children}</MapContext.Provider>;
};

export default MapContext;
