import { saludar } from './messages';
import './styles.css';

//saludar = () => alert("Vamos bien")

document.getElementById('btn-alert')
    .addEventListener('click', saludar );

    