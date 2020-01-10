import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4> Warning ! </h4>
				Are You Sure You Want to do this?
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="sam" 
					timeAgo="Today at 4:50pm" 
					avatar={Faker.image.avatar()} 
					content="Hello World 1"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="jane" 
					timeAgo="Yesterday at 7pm"
					avatar={Faker.image.avatar()} 
					content="Hello World 2"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="mike" 
					timeAgo="3 Months Ago" 
					avatar={Faker.image.avatar()} 
					content="Hello World 3"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="MeeGoreng" 
					timeAgo="4 Months Ago" 
					avatar={Faker.image.avatar()} 
					content="Hello World 4"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));
