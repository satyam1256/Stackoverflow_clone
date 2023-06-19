import React from 'react'
import './css/AllQuestions.css'
import { Avatar } from '@mui/material'
import {Link } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser';


function AllQuestions({data}) {
  // console.log(data?.tags[0]);

  let tags = JSON.parse(data?.tags[0]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }


  
  // const tags = [];


  return (
    <div className='all-questions'>
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>{data?.answerDetails?.length}</p>
              <span>Answers</span>
            </div>
            <div className="all-option">
              <samll> 0 views</samll>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to={`/view-question?q=${data?._id}`}>{data?.title}</Link>
          
          <div style={{maxWidth:"90%" , }}>
            <div>{HTMLReactParser(truncate(data.body,200))}</div>
          </div>
          
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
          </div>

          
          <div className='author'>
            <small>{new Date(data?.created_at).toLocaleString()}</small>
            <div className="author-info">
              <Avatar src={data?.user?.photo} />
              <p> {data?.user?.displayName ? data?.user.displayName : String(data?.user?.email).split('@')[0]}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AllQuestions

