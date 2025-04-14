import { LineChart } from 'lucide-react';
import React from 'react';
import { Line, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "id": 1,
      "name": "Alice",
      "physics": 85,
      "chemistry": 78,
      "math": 92
    },
    {
      "id": 2,
      "name": "Bob",
      "physics": 70,
      "chemistry": 88,
      "math": 75
    },
    {
      "id": 3,
      "name": "Charlie",
      "physics": 95,
      "chemistry": 82,
      "math": 89
    },
    {
      "id": 4,
      "name": "David",
      "physics": 60,
      "chemistry": 65,
      "math": 70
    },
    {
      "id": 5,
      "name": "Emma",
      "physics": 90,
      "chemistry": 91,
      "math": 94
    },
    {
      "id": 6,
      "name": "Frank",
      "physics": 76,
      "chemistry": 72,
      "math": 80
    },
    {
      "id": 7,
      "name": "Grace",
      "physics": 88,
      "chemistry": 85,
      "math": 87
    },
    {
      "id": 8,
      "name": "Hannah",
      "physics": 82,
      "chemistry": 79,
      "math": 84
    }
  ]
  

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"}></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>

            </LineChart>
        </div>
    );
};

export default ResultChart;