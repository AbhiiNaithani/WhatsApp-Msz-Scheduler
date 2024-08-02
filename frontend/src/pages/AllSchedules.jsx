import axios from "axios";
import { useEffect, useState } from "react"
import { Banckend_URL } from "../constants";

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
        <div>
            {allSchedules.map((schedule) => {
                return(
                    <div key={schedule._id}>
                        {schedule.message}
                    </div>
                )
            })}
        </div>
    )
}