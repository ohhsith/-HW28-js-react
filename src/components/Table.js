import React from 'react'
import data from '../utils/data'
import TableRow from './TableRow'

export default function Table() {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Days worked
                    </th>
                    <th>
                        Rate
                    </th>
                    <th>
                        Sum
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((person) => {
                    return <TableRow key={person.id} rowData={person} />
                })}
            </tbody>
        </table>
    )
}
