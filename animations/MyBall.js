export default class MyBall extends HTMLElement {
    static get tagName() { return 'my-ball'; }
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `<style>
        :host {
            position: absolute;
            background: orangered;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0px 0px 40px magenta;
            display: flex;
            justify-content: center;
            padding: 4px;
        }
        img { height: 100%; mix-blend-mode: multiply; }
        </style>
        <img src="./alice.webp" alt="Alice">`
    }
}