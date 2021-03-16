const male = document.querySelector(".male");
const female = document.querySelector(".female");
const input = document.querySelector("input");
const submit = document.querySelector(".btn-outline-success");
const row = document.querySelector(".row");
const body = document.querySelector("body");

// mengambil input untuk melakukan pencarian
const searching = () => {
  // "new DataSource" ada di file dataSource.js
  const data = new DataSource(succes, failed);
  data.search(input.value);
  body.classList.remove("pink");
};

const succes = (result) => {
  row.innerHTML = "";
  let names = [];
  result.forEach((org) => {
    if (org.name) {
      names.push(org.name);
      names.sort();
    }
  });

  names.forEach((n) => {
    row.innerHTML += `<div class="col-6 col-sm-3">
                            <div class="card ${n}" >
                                <img class='card-img-top' src="img/${n}.jpg"  data-toggle="modal" data-target="#exampleModal">
                                <div class="card-body" style="padding: 12px;">
                                <p class="card-text">${n}</p>
                                </div>
                            </div>
                        </div>`;
  });
  showModal(row.innerHTML);
};

const failed = (result) => {
  row.innerHTML = `<h3 style="margin : 0 auto;">${result}</h3>`;
};

submit.addEventListener("click", searching);

// klik female
female.addEventListener("click", function () {
  const filterGenders = org.filter((o) => {
    return o.gender;
  });
  body.classList.add("pink");
  succes(filterGenders);
});

// klik male
male.addEventListener("click", function () {
  const filterGenders = org.filter((o) => {
    return "female" != o.gender;
  });
  body.classList.remove("pink");
  succes(filterGenders);
});

// modal box
const showModal = () => {
  const modalBox = document.querySelector(".modal");
  const img = document.querySelectorAll("img");

  let infoName = "";
  img.forEach((i) => {
    org.forEach((o) => {
      i.addEventListener("click", function () {
        if (i.getAttribute("src") == `img/${o.name}.jpg`) {
          console.log(i);
          infoName = showInfo(o.name, o.info);
          modalBox.innerHTML = infoName;
        }
      });
    });
  });

  function showInfo(n, i) {
    return ` <div class="modal-dialog modal-lg " role="document">
        <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Character Details : ${n} </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <nav>
                                <img src="img/${n}.jpg">
                            </nav>
                            <main>
                               <h5>Description :</h5>
                                <p>${i}</p>
                            </main>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>`;
  }
};

const a = 2;
b = a < 5 ? "anda benar" : "anda salah";
