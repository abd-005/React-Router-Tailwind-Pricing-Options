import React, { use } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const MarksDataRes = use(marksPromise);
    const MarksData = MarksDataRes.data;

    // data processing for chart
    const MarksChartData = MarksData.map(studentData=>{
        const student = {
        id: studentData.student_id,
        name: studentData.name,
        physics: studentData.marks.physics,
        chemistry: studentData.marks.chemistry,
        math: studentData.marks.math,
        }
        const avg = (student.physics + student.chemistry + student.math)/3;

        student.avg = avg;

        return student
    })

console.log(MarksChartData);

    return (
        <div>
            <BarChart width={1000} height={1200} data={MarksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='teal'></Bar>
                <Bar dataKey="chemistry" fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;