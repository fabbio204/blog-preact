import { Component } from 'preact';
import './menu.css';

export default class Menu extends Component {

    private menus = [
        {
            'nome': 'Home',
            'href': '/',
        },
        {
            'nome': 'Contato',
            'href': '/contato',
        },
        {
            'nome': 'Home',
            'href': '/ajuda',
        },
    ];

    render(props: any) {
        return <nav>
            <ul>
                {this.menus.map(x => {
                    return this.gerarMenu(x);
                })}
            </ul>
        </nav>
    }

    gerarMenu(x: { nome: string; href: string; }) {
        return <li className='menu-item'>
            <a href={x.href}>{x.nome}</a>
        </li>;
    }
}