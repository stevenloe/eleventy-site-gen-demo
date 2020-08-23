const vibes = [
  "...you are awesome",
  "...have a great day",
  "...Its a beautiful day out there",
  "...Eleventy",
  "...Jamstack",
]

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

document.querySelector(".vibe").append(vibe)
