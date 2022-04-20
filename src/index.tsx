import { render } from 'preact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Menu from './components/menu/menu';

let root = <div>
    <Menu/>
    <Header/>
    <Footer/>
</div>;

render(root, document.body);