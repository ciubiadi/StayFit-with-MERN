import React, { useEffect } from 'react'

const StravaInfo = () => {
    useEffect(() => {
        const fetchActivities = async () => {
            try {
              const response = await fetch('https://www.strava.com/api/v3/athlete/activities?access_token=420f2cf94c15109685556f068d4bbe9f5f2f2e1f');
              
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
      
              const data = await response.json();
              console.log('data: ', data);
            } catch (error) {
              console.log('error: ', error.message);
            }
          };

          fetchActivities();
    }, []);

  return (
    <div style={{textAlign: 'center', color: 'white'}}>StravaInfo</div>
  )
}

export default StravaInfo