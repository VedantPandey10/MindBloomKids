import { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph() {
  const [moodData, setMoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartType, setChartType] = useState("line");

  useEffect(() => {
    fetchMoodData();
  }, []);

  const fetchMoodData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:8000/mood/");
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const data = await response.json();
      setMoodData(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching mood data:", err);
      setError(err.message);
      setMoodData([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="graph-container">
        <h3>📊 Mood Analytics</h3>
        <div className="card">Loading your mood data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="graph-container">
        <h3>📊 Mood Analytics</h3>
        <div className="card" style={{ color: "#D64A8C" }}>
          ⚠️ Error loading data: {error}
        </div>
        <button onClick={fetchMoodData} className="refresh-btn">
          🔄 Try Again
        </button>
      </div>
    );
  }

  if (moodData.length === 0) {
    return (
      <div className="graph-container">
        <h3>📊 Mood Analytics</h3>
        <div className="card">
          No mood data yet! Start tracking your moods to see your progress 💫
        </div>
        <button onClick={fetchMoodData} className="refresh-btn">
          🔄 Refresh
        </button>
      </div>
    );
  }

  const moodLabels = moodData.map((_, index) => `Day ${index + 1}`);
  const moodValues = moodData.map((entry) => entry.mood || 0);
  const stressValues = moodData.map((entry) => entry.stress || 0);
  const energyValues = moodData.map((entry) => entry.energy || 0);

  const moodEmojis = {
    1: "😢",
    2: "😐",
    3: "😊",
    4: "🤩",
  };

  const chartData = {
    labels: moodLabels,
    datasets: [
      {
        label: "😊 Mood",
        data: moodValues,
        borderColor: "#FFB3D9",
        backgroundColor: "rgba(255, 179, 217, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "#FF85CC",
        pointBorderColor: "#FFA8CF",
        pointBorderWidth: 2,
      },
      {
        label: "😰 Stress",
        data: stressValues,
        borderColor: "#FF8A80",
        backgroundColor: "rgba(255, 138, 128, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "#FF6B6B",
        pointBorderColor: "#FF9999",
        pointBorderWidth: 2,
      },
      {
        label: "⚡ Energy",
        data: energyValues,
        borderColor: "#89CFF0",
        backgroundColor: "rgba(137, 207, 240, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "#6BB3D9",
        pointBorderColor: "#A0D8E8",
        pointBorderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 16, weight: "bold" },
          color: "#D64A8C",
          padding: 15,
        },
      },
      title: {
        display: true,
        text: "Your Mood Journey 🌈",
        font: { size: 20, weight: "bold" },
        color: "#D64A8C",
        padding: 20,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          font: { size: 14, weight: "bold" },
          color: "#D64A8C",
          stepSize: 1,
        },
        grid: {
          color: "rgba(255, 179, 217, 0.2)",
          lineWidth: 2,
        },
      },
      x: {
        ticks: {
          font: { size: 14, weight: "bold" },
          color: "#D64A8C",
        },
        grid: {
          color: "rgba(255, 179, 217, 0.1)",
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <h3>📊 Mood Analytics</h3>

      <div className="graph-sticker-wrapper">
        <div className="animated-stickers">
          <div className="sticker sticker-1">🧒</div>
          <div className="sticker sticker-2">👧</div>
        </div>

        <div className="graph-content">
          <div className="card chart-controls">
            <label>View Type:</label>
            <select
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="mood-select"
            >
              <option value="line">📈 Line Chart</option>
              <option value="bar">📊 Bar Chart</option>
            </select>
          </div>

          <div className="card chart-wrapper">
            {chartType === "line" ? (
              <Line data={chartData} options={chartOptions} />
            ) : (
              <Bar data={chartData} options={chartOptions} />
            )}
          </div>

          <div className="card mood-summary">
            <h4>📈 Summary</h4>
            <div className="summary-stats">
              <div className="stat">
                <span className="stat-label">Total Entries:</span>
                <span className="stat-value">{moodData.length}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Average Mood:</span>
                <span className="stat-value">
                  {moodValues.length > 0
                    ? (moodValues.reduce((a, b) => a + b) / moodValues.length).toFixed(1)
                    : "N/A"}
                  /4
                </span>
              </div>
              <div className="stat">
                <span className="stat-label">Best Day:</span>
                <span className="stat-value">
                  {moodEmojis[Math.max(...moodValues)] || "🌟"}
                </span>
              </div>
            </div>
          </div>

          <button onClick={fetchMoodData} className="refresh-btn">
            🔄 Refresh Data
          </button>
        </div>
      </div>

      <div className="animated-stickers-right">
        <div className="sticker sticker-5">👦</div>
        <div className="sticker sticker-6">🧒</div>
      </div>
    </div>
  );
}
