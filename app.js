const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));

function copyscream() {
    navigator.clipboard.writeText(
      "0;P;c;5;o;1;d;1;z;3;0t;1;0l;1;0o;1;0a;1;0f;0;1b;0"
    );
    alert("Copied");
  }
  function copytenz() {
    navigator.clipboard.writeText(
      "0;s;1;P;c;5;h;0;0l;5;0v;0;0g;1;0a;1;0f;0;1l;0;1v;4;1g;1;1o;2;1a;1;1m;0;1f;0;S;c;5;o;1"
    );
    alert("Copied");
  }
  function copyyay() {
    navigator.clipboard.writeText(
      "0;P;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0"
    );
    alert("Copied");
  }
  function copyasuna() {
    navigator.clipboard.writeText(
      "0;P;o;1;0t;1;0l;2;0a;1;0f;0;1b;0"
    );
    alert("Copied");
  }