"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Leading Indicators vs Profit Data
const indicatorProfitData = [
  { indicators: 2, profit: 15, year: "2020" },
  { indicators: 4, profit: 22, year: "2021" },
  { indicators: 8, profit: 35, year: "2022" },
  { indicators: 12, profit: 48, year: "2023" },
  { indicators: 16, profit: 65, year: "2024" },
];

const ChartSection = () => {
  return (
    <div className="bg-white/5 p-4 md:p-6 rounded-lg border border-white/10 mb-12 md:mb-16">
      <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 text-center">
        Leading Indicators Drive Better Underwriting Outcomes
      </h3>
      <div className="h-[300px] md:h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={indicatorProfitData}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis
              dataKey="indicators"
              stroke="#ffffff80"
              label={{
                value: "Leading Indicators",
                position: "bottom",
                fill: "#ffffff80",
                offset: -5,
                fontSize: 12,
              }}
            />
            <YAxis
              stroke="#ffffff80"
              domain={[0, 80]}
              label={{
                value: "Underwriting Profitability (%)",
                angle: -90,
                position: "left",
                fill: "#ffffff80",
                offset: 10,
                fontSize: 12,
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#000000",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "4px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#ffffff" }}
              formatter={(value, name) => {
                return [
                  `${value}${name === "profit" ? "%" : ""}`,
                  name === "profit"
                    ? "Underwriting Profitability"
                    : "Leading Indicators",
                ];
              }}
              labelFormatter={(value) => `Leading Indicators: ${value}`}
            />
            <Line
              type="monotone"
              dataKey="profit"
              name="Profit"
              stroke="#eba200"
              strokeWidth={2}
              dot={{
                stroke: "#eba200",
                strokeWidth: 2,
                r: 3,
                fill: "#000",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-400 mt-4 text-center">
        More leading indicators tracked correlates directly with improved
        underwriting performance
      </p>
    </div>
  );
};

export default ChartSection;
