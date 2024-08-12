import React from 'react'
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/PuffLoader";

const Loading = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className='flex justify-center items-center w-[100%] h-[100vh]'>
            <ClipLoader
                color='brown'
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading