class Dropdown {
  constructor(element) {
    console.log('INSIDE Dropdown ******  dropdown passed in as attr obj');
    // Assign this.element to the dropdown element
    this.element = element;
    console.log('this.element is ', this.element );

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    console.log('this.button is ', this.button);
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
      console.log('this.content is ',  this.content );

    // Add a click handler to the button reference and call the toggleContent method.
    //   the arrow function is using the implicit (automatic) binding to provide
    //   value of 'this' where the arrow function was called.
    //   We call this "lexical scope."
    this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    // using 'this' allows toggleContent() to see context of this.content
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown =>
    {
      console.log('NEW Dropdown MADE, dropdown passed to UNHOISTED class  is ', dropdown);
      new Dropdown(dropdown)
    }
);
