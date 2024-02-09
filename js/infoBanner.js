AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      superman: {
        banner_url: "./assets/posters/1918.jpg",
        title: "The Battle of Ambos Nogales",
        released_year: "1918",
        description:
          "The Battle of Ambos Nogales is a feud between the cities of Nogales, United States and Mexico respectively, which resulted in the creation of the permanent U.S.-Mexico Nogales border.",
      },
      spiderman: {
        banner_url: "./assets/posters/USA.jpg",
        title: "Lt. Col. Frederick J. Herman",
        released_year: "USA",
        description:
          "Herman was an America leutinent colonel that led the American side of the Nogales fight during 1918. Due to his valiant efforts, the United States were able to come out victorious on the Battle of Ambos Nogales, finalizing the U.S.-Mexican border.",
      },
      "captain-aero": {
        banner_url: "./assets/posters/BorderNew.jpg",
        title: "U.S.-Mexican Border",
        released_year: "1918-2018",
        description:
          "The U.S.-Mexican border is the result of what the Battle of Ambos Nogales brought by order of the American army, as well to cease fire between both cities.",
      },
      "outer-space": {
        banner_url: "./assets/posters/LegacyA.jpg",
        title: "Legacy",
        released_year: "Aftermath",
        description:
          "The conflict between both cities had been resolved, and both agreed on the creation of the border.",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
