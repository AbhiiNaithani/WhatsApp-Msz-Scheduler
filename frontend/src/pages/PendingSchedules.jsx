import axios from "axios";
import { useEffect, useState } from "react"
import { Banckend_URL } from "../constants";
import { ScheduleCard } from "../components/scheduleCard";

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
        <div className="w-full h-full overflow-y-auto">
            {pendingSchedules.map((schedule) => {
                return(
                    <div key={schedule._id} className="w-full h-1/6">
                        <ScheduleCard schedule={schedule} callbackFn={getPendingSchedules}/>
                    </div>
                )
            })}
        </div>
    )
}