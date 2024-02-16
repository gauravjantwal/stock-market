import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import { Financialbarchart } from "./financial-barchart";
import axios from "axios";

function DeatilsFinancialsSection(props) {
  const [key, setKey] = useState("revenue");
  const [revenue, setrevenue] = useState({});
  const [profit, setprofit] = useState({});
  const [networth, setnetworth] = useState({});
  // const revenudata = {
  //   labels: ["Dec '22", "Mar '23", "Jun '23", "Sep '23", "Dec '23"],
  //   values: [1644, 1319, 613, 1400, 1300],
  // };

  async function fetchData(url, updatestate) {
    await axios
      .get(`${url}`)
      .then((resp) => {
        updatestate(resp.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData(
      "https://mocki.io/v1/e98fbac7-f3e6-4edd-b9c5-53c4e4adedf9",
      setrevenue
    );

    fetchData(
      "https://mocki.io/v1/12b2235e-df9e-4cc0-aa2d-9cfe6823b6dd",
      setprofit
    );
    fetchData(
      "https://mocki.io/v1/e98fbac7-f3e6-4edd-b9c5-53c4e4adedf9",
      setnetworth
    );    
  }, []);
  return (
    <div>
      <h5 className="section-title">Financials</h5>
      <div className="financialbarchart">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="revenue" title="Revenue">
            <Financialbarchart tabname={"revenu"} data={revenue} />
          </Tab>
          <Tab eventKey="profit" title="Profit">
            <Financialbarchart tabname={"profit"} data={profit} />
          </Tab>
          <Tab eventKey="netWorth" title="Net Worth">
            <Financialbarchart tabname={"netWorth"} data={networth} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export const DeatilsFinancials = React.memo(DeatilsFinancialsSection);
//export default DeatilsFinancials;
