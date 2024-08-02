import axios from "axios";
import { useEffect, useState } from "react"
import { Banckend_URL } from "../constants";
import { ScheduleCard } from "../components/scheduleCard";

export const CompletedSchedules = () => {
    const [completedSchedules, setCompletedSchedules] = useState([]);
    const id = localStorage.getItem('userId');

    const getCompletedSchedules = async() => {
        const response = await axios.get(Banckend_URL + `/getCompletedMessages/${id}`);
        setCompletedSchedules(response.data.completedMessages);
    }
    useEffect(() => {
        getCompletedSchedules();
    },[])

    return(
        <div className="w-full h-full overflow-y-auto">
            {completedSchedules.map((schedule) => {
                return(
                    <div key={schedule._id} className="w-full h-1/6">
                        <ScheduleCard schedule={schedule} callbackFn={getCompletedSchedules}/>
                    </div>
                )
            })}
        </div>
    )
}