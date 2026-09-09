import { Cell, Legend, Pie, PieChart, Sector, Tooltip } from 'recharts';

const renderLegend = ({ payload }) => {
  return (
    <div className="flex justify-center gap-6">
      {payload.map((entry) => (
        <div key={entry.value} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.payload.color }}
          />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function PieChartWithPaddingAngle({ isAnimationActive = true, data }) {
    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                margin={{ bottom: 100 }}
                fill
                innerRadius="70%"
                outerRadius="90%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="10%"
                // padding angle is the gap between each pie slice
                paddingAngle={1}
                dataKey="value"
                isAnimationActive={isAnimationActive}
                shape={(props) => (
                    <Sector
                        {...props}
                        fill={props.payload.color}
                    />
                )}
            />

            <br />
            <Legend iconType='circle' position='bottom' content={renderLegend}></Legend>
            <Tooltip></Tooltip>
        </PieChart>
    );
}