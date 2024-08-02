import axios from "axios";
import { useEffect, useState } from "react"
import { Banckend_URL } from "../constants";
import { ScheduleCard } from "../components/scheduleCard";

export const AllSchedules = () => {
    const [allSchedules, setAllSchedules] = useState([]);
    const id = localStorage.getItem('userId');

    const getAllSchedules = async() => {
        const response = await axios.get(Banckend_URL + `/getAllScheduleMessages/${id}`);
        setAllSchedules(response.data.allScheduleMessages);
    }
    useEffect(() => {
        getAllSchedules();
    },[])

    return(
        <div className="w-full h-full overflow-y-auto">
            {allSchedules.map((schedule) => {
                return(
                    <div key={schedule._id} className="w-full h-1/6">
                        <ScheduleCard schedule={schedule} callbackFn={getAllSchedules}/>
                    </div>
                )
            })}
        </div>
    )
}