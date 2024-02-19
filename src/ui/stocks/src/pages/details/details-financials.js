import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import { Financialbarchart } from "./financial-barchart";
import axios from "axios";

function DeatilsFinancialsSection(props) {
  const Income = props.Income;
  const [key, setKey] = useState("revenue");
  const [reportKey, setReportKey] = useState("quarterly");
  const [financialdata, setfinancialdata] = useState(null);
  // quarterly -1
  // yearly -2
  const [report, setReport] = useState(1);

  const convertdollerintomillions = (dollers) => {
    return Math.round(dollers / 1000000, 2);
  };

  const isNumeric = (value) => {
    return /^-?\d+$/.test(value);
  };

  const dateFormat = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    });
  };

  const filterfinancialdata = () => {
    if (
      Income &&
      Income?.quarterlyReports &&
      Income?.annualReports &&
      financialdata == null
    ) {
      const quarterlylabels = [];
      const annuallabels = [];
      const revenudata = { quarterly: [], annual: [] };
      const networthdata = { quarterly: [], annual: [] };
      const profitdata = { quarterly: [], annual: [] };
      const quarterlydata = Income?.quarterlyReports?.slice(0, 20);
      const annualdata = Income?.annualReports?.slice(0, 20);
      quarterlydata?.forEach((value) => {
        if (
          isNumeric(value.totalRevenue) &&
          isNumeric(value.netIncome) &&
          isNumeric(value.grossProfit)
        ) {
          quarterlylabels.push(dateFormat(value.fiscalDateEnding));
          // revenu
          revenudata.quarterly.push(
            convertdollerintomillions(value.totalRevenue)
          );
          // networth
          networthdata.quarterly.push(
            convertdollerintomillions(value.netIncome)
          );
          //profit
          profitdata.quarterly.push(
            convertdollerintomillions(value.grossProfit)
          );
        }
      });
      annualdata?.forEach((value) => {
        if (
          isNumeric(value.totalRevenue) &&
          isNumeric(value.netIncome) &&
          isNumeric(value.grossProfit)
        ) {
          annuallabels.push(dateFormat(value.fiscalDateEnding));
          // revenu
          revenudata.annual.push(convertdollerintomillions(value.totalRevenue));
          // networth
          networthdata.annual.push(convertdollerintomillions(value.netIncome));
          //profit
          profitdata.annual.push(convertdollerintomillions(value.grossProfit));
        }
      });
      setfinancialdata({
        revenue: {
          data: revenudata,
          annuallabels: annuallabels,
          quarterlylabels: quarterlylabels,
        },
        profit: {
          data: profitdata,
          annuallabels: annuallabels,
          quarterlylabels: quarterlylabels,
        },
        networth: {
          data: networthdata,
          annuallabels: annuallabels,
          quarterlylabels: quarterlylabels,
        },
      });
    }
  };

  const selectReport = (reportname) => {};

  useEffect(() => {
    filterfinancialdata();
  }, [props.Income]);
  return (
    <>
      {financialdata && (
        <>
          <h5 className="section-title mb-2">Financials</h5>
          <div className="financialbarchart">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="revenue" title="Revenue">
                <Financialbarchart
                  tabname={"revenu"}
                  report={report}
                  data={financialdata.revenue}
                />
              </Tab>
              <Tab eventKey="profit" title="Profit">
                <Financialbarchart
                  tabname={"profit"}
                  report={report}
                  data={financialdata.profit}
                />
              </Tab>
              <Tab eventKey="netWorth" title="Net Worth">
                <Financialbarchart
                  tabname={"netWorth"}
                  report={report}
                  data={financialdata.networth}
                />
              </Tab>
            </Tabs>
            <div>
              <button
                type="button"
                className={
                  report == 1
                    ? "btn btn-light ml-2 text-color-green"
                    : "btn ml-2"
                }
                onClick={() => setReport(1)}
              >
                Quarterly
              </button>
              <button
                type="button"
                className={
                  report == 2
                    ? "btn btn-light ml-2 text-color-green"
                    : "btn ml-2"
                }
                onClick={() => setReport(2)}
              >
                Yearly
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export const DeatilsFinancials = React.memo(DeatilsFinancialsSection);
