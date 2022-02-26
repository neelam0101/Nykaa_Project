
let count = 0;
let images = [];
let time = 3000;

images[0] = 'https://images-static.nykaa.com/uploads/8c6e98a0-647a-4a5b-b2ed-3505d377426c.jpg?tr=w-1200,cm-pad_resize';
images[1] = 'https://images-static.nykaa.com/uploads/abaaa449-81ad-4963-818b-65715cc42190.jpg?tr=w-1200,cm-pad_resize';
images[2] = 'https://images-static.nykaa.com/uploads/f9aa81b6-2713-493e-9a95-a147a154e50a.jpg?tr=w-1200,cm-pad_resize';
images[3] = 'https://images-static.nykaa.com/uploads/af0ba06d-b250-476c-a5eb-0449f2923b95.jpg?tr=w-1200,pr-true';
images[4] = 'https://images-static.nykaa.com/uploads/0d72d5ee-fbcc-4a63-b23d-98356c48aac0.gif?tr=w-1200,pr-true';
images[5] = 'https://images-static.nykaa.com/uploads/0d72d5ee-fbcc-4a63-b23d-98356c48aac0.gif?tr=w-1200,pr-true';
function slidingShows() {
  document.silde.src = images[count];
  if (count < images.length - 1)
  {
    count++
  }
  else
  {
    count = 0;
  }
  setTimeout('slidingShows()', time)

}
window.onload = slidingShows;

