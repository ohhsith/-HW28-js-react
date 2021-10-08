import React, { useState } from 'react'

export default function TableRow({rowData}) {
    const [workdays, setWorkdays] = useState(rowData.workdays)
    const [rate, setRate] = useState(rowData.rate)

    const workdaysHandler = (e) => {
        setWorkdays(e.target.value)
    }

    const rateHandler = (e) => {
        setRate(e.target.value)
    }
    return (
        <tr>
            <td>{rowData.firstName}</td>
            <td>{rowData.lastName}</td>
            <td>
                <input value={workdays} onChange={workdaysHandler} />
            </td>
            <td>
                <input value={rate} onChange={rateHandler} />
            </td>
            <td>{workdays * rate}</td>
            
        </tr>
    )
}
