import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from  './ApprovalCard';

const App = () =>{
    return (
        <div className = "ui container comments">

          <ApprovalCard>
            <h4>
              Hello..Are you sure?
            </h4>
          </ApprovalCard>
          <ApprovalCard>
          <CommentDetail 
          author ="Sam" 
          timeAgo = "Today at 4.45PM" 
          cmt =" very good" 
          img ={faker.image.avatar()}
          />
          </ApprovalCard>

          <ApprovalCard>
              <CommentDetail 
              author ="Alex" 
              timeAgo = "Today at 1.00AM" 
              cmt = "Great" 
              img ={faker.image.avatar()}
              />

          </ApprovalCard>
         
         <ApprovalCard>
            <CommentDetail 
              author ="Jane" 
              timeAgo = "Today at 5.00PM" 
              cmt = "awesome" 
              img ={faker.image.avatar()}
              />
         </ApprovalCard>
          
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));