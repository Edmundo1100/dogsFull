import { Route, Routes } from 'react-router-dom';
import * as S from './styles'; 
import { LoginEntrar } from '../LoginEntrar';
import { LoginCriar } from '../LoginCriar';
import { LoginPerdeuSenha } from '../LoginPerdeuSenha';
import { LoginReset } from '../LoginReset';

export function Login() {
	return (
		<S.Container>
			<Routes>
				<Route path='/' element={<LoginEntrar/>}/>
				<Route path='criar' element={<LoginCriar/>}/>
				<Route path='perdeuSenha' element={<LoginPerdeuSenha/>}/>
				<Route path='resetSenha' element={<LoginReset/>}/>
			</Routes>
		</S.Container>
	);
};