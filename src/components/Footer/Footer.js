import * as React from 'react';
import '../../css/styles.css';
import '../../css/responsive.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

    const url = "https://www.google.com/maps/dir//%2740.7569206,-73.9933326%27";

    function Footer() {
        return(
            <React.Fragment>
                <div 
                    className='container'
                    style={
                        {
                            marginTop:"40px",
                        }
                    }>
                        <div 
                            className='row responDiv'>
                                <div 
                                    className='col-6'>
                                        <h2
                                            style={
                                                {
                                                    fontFamily:"'Slabo 27px', serif",
                                                    fontWeight:"600"
                                                }
                                            }>
                                            Address
                                            </h2>
                                        <Stack 
                                            direction="row" 
                                            spacing={2}>
                                        <Button 
                                            variant="contained" 
                                            href={url} 
                                            target={'_blank'}
                                            id='btn-link'>
                                            GET DIRECTIONS  
                                        </Button>
                                        </Stack>
                                        <p
                                            className='p-link'>
                                        542 9th Avenue <br />
                                        Uzbekistan, NY 10018 <br />
                                        UZB
                                        </p>
                                    </div>
                                <div 
                                    className='col-6'>
                                        <h2
                                            style={
                                                {
                                                    fontFamily:"'Slabo 27px', serif",
                                                    fontWeight:"600"
                                                }
                                            }>
                                        Business Hours
                                        </h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th className='x2TOCf'>
                                                        Mon: 
                                                    </th>
                                                    <td className='o0m3Qb'>
                                                        <span className='WF8WNe'>
                                                        6:00 AM – 7:00 PM
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className='x2TOCf'>
                                                        Tue: 
                                                    </th>
                                                    <td className='o0m3Qb'>
                                                        <span className='WF8WNe'>
                                                        6:00 AM – 7:00 PM
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className='x2TOCf'>
                                                        Wed: 
                                                    </th>
                                                    <td className='o0m3Qb'>
                                                        <span className='WF8WNe'>
                                                        6:00 AM – 7:00 PM
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className='x2TOCf'>
                                                        Thu: 
                                                    </th>
                                                    <td className='o0m3Qb'>
                                                        <span className='WF8WNe'>
                                                        6:00 AM – 7:00 PM
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className='x2TOCf'>
                                                        Fri: 
                                                    </th>
                                                    <td className='o0m3Qb'>
                                                        <span className='WF8WNe'>
                                                        6:00 AM – 7:00 PM
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className='x2TOCf'>
                                                        Sat: 
                                                    </th>
                                                    <td className='o0m3Qb'>
                                                        <span className='WF8WNe'>
                                                        6:00 AM – 7:00 PM
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className='x2TOCf'>
                                                        Sun: 
                                                    </th>
                                                    <td className='o0m3Qb'>
                                                        <span className='WF8WNe'>
                                                        6:00 AM – 7:00 PM
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                            <hr></hr>
                    </div>

                    <div 
                        className='container'
                            style={
                                {
                                    marginTop:"30px",
                                }
                            }>
                        <div
                            className='row'>
                                <div 
                                    className='col-4'>
                                      <span
                                        className='spn-link'>
                                      Report abuse
                                      </span>
                                    </div>
                                <div 
                                    className='col-4'>
                                        <span
                                            className='spn-link'>
                                        Header photo by Dino Rodriguez
                                        </span>
                                    </div>
                                <div 
                                    className='col-4'>
                                        <span
                                            className='spn-link'>
                                        Powered by <a href='https://t.me/zsm_developer'>ZSM</a>
                                        </span>
                                    </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }

export default Footer;