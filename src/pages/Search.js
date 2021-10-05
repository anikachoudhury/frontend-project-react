import React from 'react';
import './Search.css';
import { Add } from './Add';

function Search(props) {
    return (
        <div className="search">
            <h1>Search For A Patient</h1>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Sex</th>
                    <th>Date of Birth</th>
                    <th>Age</th>
                    <th>Reason for Admission</th>
                    <th>Date of Admission</th>
                    <th>Covid Risk</th>
                    <th>Risk Assessment</th>
                    <th>Doctor</th>
                    <th>Ward</th>
                </tr>
                <tr>
                    <td>Alfred</td>
                    <td>Anders</td>
                    <td>M</td>
                    <td>1956-04-01</td>
                    <td>65</td>
                    <td>Cancer</td>
                    <td>2021-09-30</td>
                    <td>High</td>
                    <td>High</td>
                    <td>Maria Alvarez</td>
                    <td>Oncology</td>
                </tr>
                <tr>
                    <td>Sarah</td>
                    <td>Chen</td>
                    <td>F</td>
                    <td>1999-04-01</td>
                    <td>21</td>
                    <td>Kidney Failure</td>
                    <td>2021-09-30</td>
                    <td>High</td>
                    <td>High</td>
                    <td>Anna Todd</td>
                    <td>Nephrology</td>
                </tr>
                <tr>
                    <td>Ali</td>
                    <td>Hassan</td>
                    <td>M</td>
                    <td>1993-04-01</td>
                    <td>27</td>
                    <td>Osteoporosis</td>
                    <td>2021-09-30</td>
                    <td>Low</td>
                    <td>High</td>
                    <td>Hani Oman</td>
                    <td>Osteopothy</td>
                </tr>
            </table>
        </div>
    )
}

export default Search;
