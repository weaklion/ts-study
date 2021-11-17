import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params: any) {
    super(params);
    this.setTitle("Detail");
  }

  async getHtml() {
    return `
      <h1 class="detail">상세 페이지입니다</h1>
      <p>      
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolore quia
        voluptate odio corporis aliquid? At adipisci labore eligendi rerum qui
        numquam tempora molestiae porro! Maxime hic aperiam sit eligendi?
      </p>
      <nav class="nav">
        <a href="/" class="nav__link" data-link>초기페이지</a>
      </nav>
    `
  }
}