import classNames from 'classnames';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

export default function Lesson(props: LessonProps) {
	const { slug } = useParams<{ slug: string }>();

	const isActiveLesson = slug === props.slug;
	const isLessonAvailable = isPast(props.availableAt);
	const availableAtFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR });

	return (
		<Link to={`/event/lesson/${props.slug}`} className="group">
			<span className="text-gray-300">{availableAtFormated}</span>

			<div
				className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
					'bg-green-500': isActiveLesson,
				})}
			>
				<header className="flex items-center justify-between">
					{isLessonAvailable ? (
						<span className="text-sm text-blue-500 font-medium flex items-center gap-2">
							<CheckCircle size={20} />
							Conteudo Liberado
						</span>
					) : (
						<span className="text-sm text-orange-500 font-medium flex items-center gap-2">
							<CheckCircle size={20} />
							Em breve
						</span>
					)}

					<span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
						{props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>
				<strong
					className={classNames('mt-2 block', { 'text-white': isActiveLesson, 'text-gray-200': !isActiveLesson })}
				>
					{props.title}
				</strong>
			</div>
		</Link>
	);
}
