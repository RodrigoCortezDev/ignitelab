import Lesson from './Lesson';
import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
	query {
		lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			lessonType
			availableAt
			slug
			title
		}
	}
`;

interface GetLessonsQuery {
	lessons: {
		id: string;
		lessonType: 'live' | 'class';
		availableAt: string;
		slug: string;
		title: string;
	}[];
}

export default function Sidebar() {
	const { data } = useQuery<GetLessonsQuery>(GET_LESSONS_QUERY);

	return (
		<aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 ">
			<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronograma de Aulas</span>
			<div className="flex flex-col gap-8">
				{data?.lessons.map(lesson => {
					return (
						<Lesson
							key={lesson.id}
							title={lesson.title}
							slug={lesson.slug}
							type={lesson.lessonType}
							availableAt={new Date(lesson.availableAt)}
						/>
					);
				})}
			</div>
		</aside>
	);
}
