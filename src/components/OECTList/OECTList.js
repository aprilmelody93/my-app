import './oectlist.css';
export default function OECTList(props) {   

return (
    <>
   {/* Number of students in 2018 testing period: {props.students.length} */}
        {props.students.map(student => (
            <>
                <h2 key={student._id}> Name: {student._id}</h2>

                <h4>OPI Score: {student.FinalOPIscore} 
                <br></br> 
                TEACH Score: {student.FinalTEACHscore}</h4>

                <h4 className='listStyle'>Raters:</h4> 
                {student.Raters.map(rater => (
                    <p key={rater} className='listStyle'> {rater} | </p>
                ))}

                <h4>OPI Comments:</h4> 
                {student.OPIComments.map(comment => (
                    <>{Object.keys(comment).map(key => (
                        <li>{comment[key]}</li>
                        ))}
                    </>
                ))}

                <h4>TEACH Comments:</h4> 
                {student.TEACHComments.map(comment => (
                    <>{Object.keys(comment).map(key => (
                        <li>{comment[key]}</li>
                        ))}
                    </>
                ))}
            </>
        ))}

    </>   
  )}   

