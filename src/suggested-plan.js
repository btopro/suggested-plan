import { LitElement, html, css } from 'lit';

export class SuggestedPlan extends LitElement {
  static get properties() {
    return {
      weekNum: { type: String },
      compTime: { type: String },
      weekTitle: { type: String },
      weekDescription: { type: String },
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
    this.compTime = '3 Hours';
    this.weekTitle = 'Misconceptions about happiness';
    this.weekDescription =
      'In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="weekly-syllabus">
          <div class="week">
            <p>Week</p>
            ${this.weekNum}
          </div>
          <div class="week-info">
            ${this.compTime}
            <p>${this.weekTitle}</p>
            <p>${this.weekDescription}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('suggested-plan', SuggestedPlan);
