import { LitElement, html, css } from 'lit';
import './suggested-plan.js';

export class PlanTemplate extends LitElement {
  static get tag() {
    return 'plan-template';
  }

  static get properties() {
    return {
      plan: { type: Array },
    };
  }

  constructor() {
    super();
    this.plan = [];
    this.updatePlan();
  }

  updatePlan() {
    const address = '../api/plan-data';
    fetch(address)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then(data => {
        this.plan = data;
      });
  }

  static get style() {
    return css``;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.plan.map(
          plan => html`
            <div class="item">
              <plan-template
                weekNum="${plan.weekNum}"
                compTime="${plan.compTime}"
                weekTitle="${plan.weekTitle}"
                weekDescription="${plan.weekDescription}"
              >
              </plan-template>
              <div></div>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define(PlanTemplate.tag, PlanTemplate);
