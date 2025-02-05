import React, { useMemo } from "react";
import { Group } from "@visx/group";
import { Line, Area } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { Text } from "@visx/text";
import { curveLinearClosed } from "@visx/curve"; // ✅ visx のカーブ関数を使用！

const data = [
  { skill: "Python", value: 8 },
  { skill: "JavaScript", value: 9 },
  { skill: "Ruby", value: 5 },
  { skill: "Java", value: 7 },
  { skill: "HTML/CSS", value: 9 },
];

const SkillSpiderChart = ({ width = 600, height = 600 }) => {
  const radius = Math.min(width, height) / 2.5;

  const angleScale = scaleLinear({
    domain: [0, data.length],
    range: [0, Math.PI * 2],
  });

  const valueScale = scaleLinear({
    domain: [0, 10],
    range: [0, radius],
  });

  const points = useMemo(() => {
    return data.map((d, i) => {
      const angle = angleScale(i);
      return {
        x: Math.cos(angle) * valueScale(d.value),
        y: Math.sin(angle) * valueScale(d.value),
        label: d.skill,
      };
    });
  }, [angleScale, valueScale]);

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
      <Group top={height / 2} left={width / 2}>
        {points.map((p, i) => (
          <Line
            key={i}
            from={{ x: 0, y: 0 }}
            to={p}
            stroke="gray"
            strokeWidth={1}
            strokeOpacity={0.5}
          />
        ))}

        {[2, 4, 6, 8, 10].map((tick) => (
          <circle
            key={tick}
            cx={0}
            cy={0}
            r={valueScale(tick)}
            fill="none"
            stroke="gray"
            strokeWidth={1}
            opacity={0.5}
          />
        ))}

        <Area
          data={points}
          x={(d) => d.x}
          y={(d) => d.y}
          curve={curveLinearClosed} 
          fill="rgba(200, 200, 200, 0.3)" 
          stroke="#50555F"
          strokeWidth={2}
        />

        {points.map((p, i) => (
          <Line
            key={i}
            from={p}
            to={points[i + 1] || points[0]}
            stroke="#50555F"
            strokeWidth={2}
          />
        ))}

        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={5} fill="#50555F" />
        ))}

        {points.map((p, i) => (
          <Text
            key={i}
            x={p.x * 1.2}
            y={p.y * 1.2}
            fill="black"
            fontSize={12}
            textAnchor="middle"
          >
            {p.label}
          </Text>
        ))}
      </Group>
    </svg>
  );
};

export default SkillSpiderChart;
