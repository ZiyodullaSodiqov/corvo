import React from 'react';

    function Us() {
        const mapUrl ="https://www.google.com/maps/search/542+9th+Avenue,+New+York,+NY/data=!3m1!4b1";
        return(
            <React.Fragment>
                <div
                    className='container'
                        style={
                        {
                            marginTop:"80px",
                        }
                    }>
                        <div 
                            className='row'>
                                <div className='col-12'>
                                    <h2
                                        style={{
                                            fontWeight:"bolder",
                                            textAlign:"center",
                                            textDecoration:"overline",
                                            fontFamily:" 'Ultra', serif",
                                        }}>
                                        CONTACT US
                                    </h2>
                                </div>

                                <a 
                                    href={mapUrl}
                                    target={'_blank'}>
                                    <div
                                        className='col-12'
                                        style={
                                            {
                                                background:"url(https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en&region=US&markers=color:0x88b06a|40.7569206,-73.9933326&zoom=16&client=google-presto&signature=3Aqamvst3UX8IeWj5PbmnKCcF28)",
                                                height:"604px",
                                                backgroundSize:"cover",
                                                borderRadius:"10px",
                                                marginTop:"30px",
                                            }
                                        }>
                                            </div>
                                </a>
                            </div>
                    </div>
            </React.Fragment>
        )
}

export default Us;