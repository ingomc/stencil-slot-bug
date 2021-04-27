import { Component, Prop, Host, h} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: './my-component.css',
  // shadow: true,
})
export class MyComponent {
  /** BTN as native a-tag */
  @Prop({reflect: true}) href: string;


  private handleChange(event) {
    this.href = event.target.value;
  }

  private renderButton() {
    return (
      <div>
        <div>
          <slot name="prefix" />
        </div>
        <div>
          <slot name="middle" />
        </div>
        <div>
          <slot name="suffix" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <Host>
        <div>
          <input type="text" onInput={event => this.handleChange(event)} value={this.href} placeholder="HREF" />
        </div>
        {!this.href ? <button>{this.renderButton()}</button> : <a href={this.href}>{this.renderButton()}</a>}
      </Host>
    );
  }
}
