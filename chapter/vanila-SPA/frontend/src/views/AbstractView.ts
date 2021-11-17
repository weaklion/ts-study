
//모든 view가 상속받을 템플릿

export default class {

  params : any ;

  constructor(params : any) {
    this.params = params;
  }

  setTitle(title : string) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}