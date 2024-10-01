import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [ipaddress, setIpaddress] = useState("");
  const fetchIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      setIpaddress(data);
    } catch (error) {
      console.error("Failed to fetch API", error);
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);
  return (
    <div className="App">
      <h2>
        <i>IP Address:</i> <span className="ipaddressColor">{ipaddress}</span>
      </h2>
      <div className="ip2location">
        {ipaddress && (
          <a
            href={`https://www.ip2location.com/demo/${ipaddress}`}
            target="_blank"
          >
            IP2Location
          </a>
        )}
      </div>
    </div>
  );
};

export default App;
