import React from 'react';
import Button from '../button';
class Formulario extends React.Component {
	render() {
		return (
			<form>
				<div>
					<label htmlFor="tarefa">Adicione um novo estudo</label>
					<input
						type="text"
						name="tarefa"
						id="tarefa"
						placeholder="O que você quer estudar"
						required
					/>
				</div>
				<div>
					<label>Tempo</label>
					<input
						type="time"
						step="1"
						min="00:00:00"
						max="01:30:00"
						name="tempo"
						id="tempo"
					/>
				</div>
				<div>
					<Button />
				</div>
			</form>
		);
	}
}
export default Formulario;