/**
 * Illustrative Vaniras screen: lower/median/upper estimates at four target
 * dates and a 0–100 scorecard. Values are made up for the illustration and
 * do not describe a real stock.
 */

const START_Y = 110;
/** Vertical scale of the chart: one SVG unit equals half a percent. */
const PERCENT_PER_UNIT = 0.5;

const horizons = [
  { label: "3M", p10: 136, p50: 104, p90: 80 },
  { label: "6M", p10: 148, p50: 100, p90: 66 },
  { label: "9M", p10: 158, p50: 96, p90: 54 },
  { label: "12M", p10: 166, p50: 92, p90: 42 },
] as const;

const scores = [
  { label: "Overall", value: 72 },
  { label: "Value", value: 58 },
  { label: "Quality", value: 81 },
  { label: "Growth", value: 66 },
  { label: "Safety", value: 74 },
  { label: "Momentum", value: 63 },
] as const;

const BAR_WIDTH = 22;

function columnX(index: number) {
  return 52 + index * 64;
}

function percentFromStart(y: number) {
  const value = Math.round((START_Y - y) * PERCENT_PER_UNIT);
  return `${value > 0 ? "+" : value < 0 ? "−" : ""}${Math.abs(value)}%`;
}

export function VanirasForecastVisual({ decorative = false }: { decorative?: boolean }) {
  const last = horizons[horizons.length - 1]!;
  const labelX = columnX(horizons.length - 1) + BAR_WIDTH / 2 + 8;
  const a11y = decorative
    ? ({ "aria-hidden": true } as const)
    : ({
        role: "img",
        "aria-label":
          "Illustrative Vaniras forecast: lower, median and upper price estimates at 3, 6, 9 and 12 months, next to a 0 to 100 scorecard.",
      } as const);

  return (
    <span className="fv" {...a11y}>
      <span className="fv-head">
        <span className="fv-ticker">
          <b>SAMPLE</b> Illustrative stock
        </span>
        <span className="fv-tabs">
          {horizons.map((horizon) => (
            <i key={horizon.label} className={horizon === last ? "is-active" : undefined}>
              {horizon.label}
            </i>
          ))}
        </span>
      </span>

      <span className="fv-body">
        <span className="fv-chart">
          <svg viewBox="0 0 320 204" focusable="false" aria-hidden="true">
            <defs>
              <linearGradient id="fv-range" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2ee59d" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#6ea8ff" stopOpacity="0.32" />
              </linearGradient>
            </defs>

            {[30, 70, 150, 190].map((y) => (
              <line key={y} className="fv-grid" x1="0" x2="320" y1={y} y2={y} />
            ))}
            <line className="fv-start" x1="0" x2="320" y1={START_Y} y2={START_Y} />
            <text className="fv-note" x="4" y={START_Y - 6}>
              Start
            </text>

            {horizons.map((horizon, index) => {
              const x = columnX(index);
              return (
                <g key={horizon.label}>
                  <rect
                    className="fv-range"
                    x={x - BAR_WIDTH / 2}
                    y={horizon.p90}
                    width={BAR_WIDTH}
                    height={horizon.p10 - horizon.p90}
                    rx="3"
                  />
                  <line className="fv-median" x1={x - 16} x2={x + 16} y1={horizon.p50} y2={horizon.p50} />
                  <text className="fv-axis" x={x} y="202" textAnchor="middle">
                    {horizon.label}
                  </text>
                </g>
              );
            })}

            <text className="fv-note fv-note-strong" x={labelX} y={last.p90 + 4}>
              P90 {percentFromStart(last.p90)}
            </text>
            <text className="fv-note fv-note-acid" x={labelX} y={last.p50 + 4}>
              P50 {percentFromStart(last.p50)}
            </text>
            <text className="fv-note fv-note-strong" x={labelX} y={last.p10 + 4}>
              P10 {percentFromStart(last.p10)}
            </text>
          </svg>
          <span className="fv-legend">
            <span>
              <i className="fv-swatch-range" /> Lower to upper (P10–P90)
            </span>
            <span>
              <i className="fv-swatch-median" /> Median (P50)
            </span>
          </span>
        </span>

        <span className="fv-scores">
          <span className="fv-scores-title">Scorecard</span>
          {scores.map((score) => (
            <span key={score.label} className="fv-score">
              <span>{score.label}</span>
              <span className="fv-bar">
                <i style={{ width: `${score.value}%` }} />
              </span>
              <b>{score.value}</b>
            </span>
          ))}
        </span>
      </span>

      <span className="fv-foot">Illustrative example · Model estimates, not financial advice</span>
    </span>
  );
}
