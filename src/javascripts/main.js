import '../styles/main.scss';

const bearInputForm = document.querySelector('#inputForm');

// display form
const inputForm = () => {
  bearInputForm.innerHTML = `
<div>
    <form id="bearInputFormForm">
      <div class="row g-3">
      <div class="col">
      <input type="text" class="form-control" placeholder="Bear Name" aria-label="Bear name">
      </div>
     <div class="col">
      <input type="url" class="form-control" placeholder="Bear Image url" aria-label="Image UR">
      </div>
      </div>
     <button type="submit" class="btn btn-primary" id="Submit">Submit</button>
    </form>
  </div>`;
};

const handleButtonClick = (event) => {
  if (event.target.id === 'Submit') {
    console.warn('Submit Button Clicked');
  }
  handleButtonClick();
};

const buttonEvents = () => {
  bearInputForm.addEventListener('click', handleButtonClick);
};

const init = () => {
  $('#app').html('<h1>Bear-Watcher</h1>');
  inputForm();
  buttonEvents();
};

init();
