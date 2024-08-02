import axios from "axios";
import { useEffect, useState } from "react"
import { Banckend_URL } from "../constants";

export const PendingSchedules = () => {
    const [pendingSchedules, setPendingSchedules] = useState([]);
    const id = localStorage.getItem('userId');

    const getPendingSchedules = async() => {
        const response = await axios.get(Banckend_URL + `/getPendingMessages/${id}`);
        setPendingSchedules(response.data.pendingMessages);
    }
    useEffect(() => {
        getPendingSchedules();
    },[])

    return(
        <div>
            {pendingSchedules.map((schedule) => {
                return(
                    <div key={schedule._id}>
                        {schedule.message}
                    </div>
                )
            })}
        </div>
    )
}