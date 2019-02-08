
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    console.log('element is ',this.element);

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    console.log('this.data tabLink constructor is ', this.data);
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    console.log('this.itemElement inside tabLink constructor is ', this.itemElement);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    console.log('this.tabItem inside of tabLink constructor is ', this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select() );

  };

  select() {
    console.log('click fired, inside the select method');

    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    console.log('links inside TabLink select() method are ', links);

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected') );
    console.log('links is now ', links);


    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    console.log('this.element is', this.element);  // shows which is selected
    
    // Call the select method on the item associated with this link
    this.tabItem.select();

  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
    console.log('this.element inside TabItem CONSTRUCTOR is ', this.element );
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    console.log('INSIDE TabItem select() items is ', items);

    // Remove the class "tabs-item-selected" from each element
    //     ... SPREAD OPERATOR RULES !!!!!
    [...items].forEach( item => item.classList.remove('tabs-item-selected') );
    console.log('items after removal of tabs-item-selected is ', items );
    
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/
// let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));
console.log('links from QSA is ', document.querySelectorAll('.tabs-link') );