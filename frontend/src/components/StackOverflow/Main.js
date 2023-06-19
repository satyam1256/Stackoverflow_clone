// import { Button } from '@mui/material'
import React from 'react'
import AllQuestions from './AllQuestions'
import FilterListIcon from '@mui/icons-material/FilterList';
import './css/Main.css'
import { Link } from 'react-router-dom';


function Main({questions}){

   // const [questions, setQuestions] = useState([]);

  // console.log(questions);

  return (
    <div className='main'>
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question"><button>Ask Question</button></Link>
        </div>
        <div className="main-desc">
          {/* <p>{questions && questions.length} Questions</p> */}
          
          <p>{questions.length} questions</p>

          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                {/* <a>Newest</a> */}

                <Link to="/">Newest</Link>
              </div>
              <div className="main-tab">
                {/* <a>Active</a> */}
                <Link to="/">Active</Link>

              </div>
              <div className="main-tab">
                {/* <a>More</a> */}

               <Link to="/">More</Link>

              </div>
            </div>
            <div className='main-filter-item'>
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="main-questions">
          {
            questions?.map((_q) => ( 
            <> 
            <div className="question">
              <AllQuestions data={_q} />
            </div>
            </>
          ))}
          </div>
      </div>
      
    </div>
  )
}

export default Main
