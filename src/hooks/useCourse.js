import { useEffect, useState } from "react"
import courseService from "../services/course"

export const useCourse = () => {
    let [courses, setCourse] = useState([])
    useEffect(() => {
        courseService.get()
            .then(res => {
                setCourse(res.data)
            })
    }, [])

    return courses
}