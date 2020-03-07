  // -    -   -   -   -  //
  // JAVASCRIPT CARNIVAL //
  // -    -   -   -   -  //

  console.log("Inflate The Unicorn!")

  let imageState = 4
  let names = ["Unicorn1", "Unicorn2", "Unicorn3"]
  let images = document.getElementsByClassName('inflate-an-image');
  for (let i = 0; i < images.length; i++) {
      images[i].name = names[i];
      images[i].onclick = imageClicked();
  }

  function imageClicked() {
      let counter = 0;
      return function() {
          counter++;
          this.src = `images/unicorn-${counter % imageState}.png`;
          if (counter == images.length) {
              setTimeout(() => {
                  alert(`${this.name} says thank you!`)
              }, 200);
          }
      }
  }