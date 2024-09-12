"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Janvier", desktop: 186, mobile: 80 },
  { month: "Février", desktop: 305, mobile: 200 },
  { month: "Mars", desktop: 237, mobile: 120 },
  { month: "Avril", desktop: 73, mobile: 190 },
  { month: "Mai", desktop: 209, mobile: 130 },
  { month: "Juin", desktop: 214, mobile: 140 },
  { month: "Juillet", desktop: 166, mobile: 85 },
  { month: "Aout", desktop: 105, mobile: 40 },
  { month: "Septembre", desktop: 337, mobile: 160 },
  { month: "Octobre", desktop: 173, mobile: 59 },
  { month: "Novembre", desktop: 83, mobile: 27 },
  { month: "Décembre", desktop: 8, mobile: 4 },
];

const chartConfig = {
  desktop: {
    label: "Heures",
    color: "#FF9053",
  },
  mobile: {
    label: "Examens",
    color: "#F8EFE2",
  },
} satisfies ChartConfig;

export function ChartBar() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
