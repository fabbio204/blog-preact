import './menu.css';

export default class Menu {
    private root: HTMLElement | null;
    constructor(id: string) {
        this.root = document.getElementById(id);
        this.gerarComponente();
    }

    private gerarComponente(): void {
        let div = document.createElement('nav');

        let menuPai = document.createElement('ul');
        div.appendChild(menuPai);
        menuPai.className = 'menu';
        let menus = [
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
        ]

        menus.forEach(x=>{
            let menu = this.gerarMenu(x);
            menuPai.appendChild(menu);
        });

        this.root?.appendChild(div);
    }
    gerarMenu( x: { nome: string; href: string; }) : Node {
        let item = document.createElement('li');
        item.className = 'menu-item';
        
        let link = document.createElement('a');
        link.innerHTML = x.nome;
        link.setAttribute('href', x.href);
        item.appendChild(link)

        return item;
    }
}