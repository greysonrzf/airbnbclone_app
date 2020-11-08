import MapboxGL from "@mapbox/react-native-mapbox-gl";
MapboxGL.setAccessToken(
  "pk.eyJ1IjoiZ3J6ZiIsImEiOiJjancxMmlzNTEwMmtrNDNvOHdrbGxmNDF5In0.S0WBgP2VEqwB2wq5RH6QsQ"
);
import React from "react";

import Routes from "./routes";

const App = () => <Routes />;

export default App;
