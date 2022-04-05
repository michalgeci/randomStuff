$(document).ready(function(){

    const numberOfStars = 50;
  
    function freshDot(){
      this.obj = document.createElement("div");
      this.obj.classList.add("star");
      this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
      this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
      this.size = Math.floor(4 * Math.random()) + 1;
      this.obj.style.height =  this.size + 'px';
      this.obj.style.width = this.size + 'px';
      
      document.body.appendChild(this.obj);
    }

    var dot = [];

    function addStars() {
      dot = []
      for(var i = 0; i < numberOfStars; i++) {
        dot.push(new freshDot());
      }
    }

    addStars();

    $(window).resize(function(){
      for (i = 0; i < numberOfStars; i++) {
        document.body.removeChild(dot[i].obj);
      }
      addStars();
    });

  });