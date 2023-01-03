// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='verify-account'>
    <h2 class='title'>Verify Account</h2>
    <p>We emailed you the six-digit code to johndoe@email.com. Enter the code below to confirm your email address.</p>
    <div>
      ${Array.from({ length: 6 }).map(i => `<input type='number' class='h1' data-code='' placeholder='0' min='0' max='9' required>`).join('')}
    </div>
    <p>This is design only. We didn't actually send you an email as we don't have your email, right?</p>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Create Class
class App {
  constructor() {
    this.DOM = {
      inputs: document.querySelectorAll('[data-code]'),
    };

    this.DOM.inputs[0].focus();
    this.DOM.inputs.forEach((input, idx) => input.addEventListener('keydown', (event) => this.onKeydown(event, idx)));
  }

  /**
   * @function onKeydown - Input event handler
   * @param key
   * @param idx
   */
  onKeydown = ({ key }, idx) => {
    if (key >= 0 && key <= 9) {
      this.DOM.inputs[idx].value = '';
      if (idx !== 5) {
        setTimeout(() => this.DOM.inputs[idx + 1].focus(), 10);
      }
    } else if (key === 'Backspace') {
      if (idx !== 0) {
        setTimeout(() => this.DOM.inputs[idx - 1].focus(), 10);
      }
    }
  };
}

// ⚡️Class instance
new App();
