import './header.css';

export default class Header {
    private root: HTMLElement|null;
    constructor(id: string){
        this.root = document.getElementById(id);
        this.gerarComponente();
    }

    private gerarComponente(): void {
        let h4 = document.createElement('h4');
        h4.className = 'titulo';
        h4.innerHTML = 'Meu Sistema'
        this.root?.appendChild(h4);
    }
}