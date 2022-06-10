import React, { useState, useEffect } from 'react';
import tabledata from './tabledata.css'

function TableData() {
    const [data, getData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const mainURL = 'https://forge.smartcampus.city/api/airquality/';
 
    useEffect(() => {
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(mainURL)
            .then((res) =>
                res.json())
 
            .then((response) => {
              let aqidata = response.sensor_readings
              console.log(aqidata);
              getData(aqidata);
                
            })
 
    }
 
    return (
        <>
            <h1>AQI DATA</h1>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            <tbody>
                <tr>
                    <th>datetime</th>
                    <th>id</th>
                    <th>pm25</th>
                    {/* <th>Description</th> */}
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.datetime}</td>
                        <td>{item.id}</td>
                        <td>{item.pm25}</td>
                        {/* <td>{item.body}</td> */}
                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default TableData;