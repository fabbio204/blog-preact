import { Component } from 'preact';
import './footer.css';

export default class Footer extends Component {
    render(){
        return <footer>Fábio Lima {new Date().getFullYear()}</footer>
    }
}