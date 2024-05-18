"use client"

import { useEffect } from "react"

interface Props {
    params: { productId: string }
}

export default function ServiceId({ params }: Props) {

    useEffect(() => {
        console.log("params => ", params)
    }, [])


    return (
        <>
            Mayli
        </>
    )
}