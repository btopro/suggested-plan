import { LitElement, html, css } from 'lit';

export class SuggestedPlan extends LitElement {
  static get properties() {
    return {
      weekNum: { type: String },
    };
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.weekNum = '1';
  }

  render() {
    return html`
      <div class="outline">
        <div class="weekly-syllabus">
          <div class="week">Week ${this.weekNum}</div>
          <div class="week-info">${this.compTime}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('suggested-plan', SuggestedPlan);
