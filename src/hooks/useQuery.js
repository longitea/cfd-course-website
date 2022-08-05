import { useEffect, useState } from "react"

export const useQuery = (promise, depenecyList = []) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        promise().then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
    }, depenecyList)

    return {
        data,
        isLoading
    }
}

