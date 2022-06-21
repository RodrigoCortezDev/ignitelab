import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
	query {
		lessons {
			id
			title
		}
	}
`;

interface lessons {
	id: string;
	title: string;
}

function App() {
	const { data } = useQuery<{ lessons: lessons[] }>(GET_LESSONS_QUERY);
	console.log(data);

	return (
		<>
			<h1 className="text-2xl">Hello Ignite</h1>
			<ul>
				{data?.lessons.map(lesson => {
					return <li key={lesson.id}>{lesson.title}</li>;
				})}
			</ul>
		</>
	);
}

export default App;
