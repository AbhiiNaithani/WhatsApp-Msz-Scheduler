import axios from "axios";
import { useEffect, useState } from "react"
import { Banckend_URL } from "../constants";

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
        <div>
            {completedSchedules.map((schedule) => {
                return(
                    <div key={schedule._id}>
                        {schedule.message}
                    </div>
                )
            })}
        </div>
    )
}