export const template = () => {
  /** 
   * display the header and the footer
  */
  document.querySelector("body").innerHTML =
    `<header>
        <nav>
            <div class="nav-wrapper teal lighten-2">
                <a href="#" class="brand-logo center">Kanban Board</a>
            </div>
        </nav>
    </header>

    <main>
    <div class="column-list">

    </div>
    </main>

     
     <footer class="page-footer teal lighten-2">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2014 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
    
    `;

  return null;
}



