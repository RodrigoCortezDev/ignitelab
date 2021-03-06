import React, { FormEvent, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Logo } from '../components/Logo';
import { useNavigate } from 'react-router-dom';

const CREATE_SUBSCRIBE_MUTATION = gql`
	mutation CreateSubscriber($name: String!, $email: String!) {
		createSubscriber(data: { name: $name, email: $email }) {
			id
		}
	}
`;

export default function Subscribe() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const [createSubsribe, { loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION);
	const navigate = useNavigate();

	async function handleSubscribe(event: FormEvent) {
		event?.preventDefault();
		await createSubsribe({ variables: { name, email } });
		navigate('/event');
	}

	return (
		<div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
			<div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
				<div className="max-w-[640px]">
					<Logo />
					<h1 className="m1-8 text-[2.5rem] leading-tight">
						Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com
						<strong className="text-blue-500"> React</strong>
					</h1>
					<p className="mt-4 leading-relaxed text-gray-200">
						Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta
						demanda para acessar as melhores oportunidades do mercado.
					</p>
				</div>

				<div className="p-8 bg-gray-700 border border-gray-500 rounded">
					<strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
					<form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
						<input
							className="bg-gray-900 rounded px-5 h-14"
							type="text"
							placeholder="Seu nome completo"
							onChange={ev => setName(ev.target.value)}
						/>
						<input
							className="bg-gray-900 rounded px-5 h-14"
							type="email"
							placeholder="Seu e-mail"
							onChange={ev => setEmail(ev.target.value)}
						/>
						<button
							disabled={loading}
							type="submit"
							className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
						>
							Garantir minha vaga
						</button>
					</form>
				</div>
			</div>

			<img src="/src/assets/code-mockup.png" alt="" className="mt-10" />
		</div>
	);
}
