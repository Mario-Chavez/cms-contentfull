function addWorkCard(data) {
  console.log(data);
  const template = document.querySelector("#portfolio-card-template");
  const conteinerEl = document.querySelector(".portfolio-content");

  template.content.querySelector(".portfolio-card-title").textContent =
    data.title;

  template.content.querySelector(".portfolio-card-text").textContent =
    data.descripcion;

  template.content.querySelector(".portfolio-card-link").href = data.url;
  template.content.querySelector(".portfolio-img").src = data.image;

  const clone = document.importNode(template.content, true);
  conteinerEl.appendChild(clone);
}
function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/fobzvqw7vi99/environments/master/entries?access_token=C9sE2bA6FdNYvS3DR6AFLJmTelnkn8xZaUbL8B2c8gc&&content_type=work"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      /* console.log(data); */
      const jsonCollection = data.items.map((item) => {
        return {
          title: item.fields.title,
          descripcion: item.fields.descripcion,
          url: item.fields.url,
          image:
            "//images.ctfassets.net/fobzvqw7vi99/57AfsoYtw3Y3B2x8nxzqft/b8e601fd294fa6832c46f057f7081bd1/compu.jpg", //img sacada de contenfull manual
        };
      });
      return jsonCollection;
    });
}

function main() {
  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });
}

main();
