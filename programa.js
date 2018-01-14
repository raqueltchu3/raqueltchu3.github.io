let juntas, camada12, camada13, camada14, camada15, camada22, camada23, camada24, camada32, camada33, camada34, camada35, camada41, camada42, camada43, camada44, camada45, camada46, camada47, motivo1, motivo2, motivo3, motivo4, motivo5, motivo6;

function inicio(){
  juntas = document.querySelector(".juntas");
  juntas2 = document.querySelector(".juntas2");
  camada12 = document.querySelector(".camada12");
  camada13 = document.querySelector(".camada13");
  camada14 = document.querySelector(".camada14");
  camada15 = document.querySelector(".camada15");
  motivo1 = document.querySelector(".motivo1");

  camada22 = document.querySelector(".camada22");
  camada23 = document.querySelector(".camada23");
  camada24 = document.querySelector(".camada24");
  motivo2 = document.querySelector(".motivo2");

  camada32 = document.querySelector(".camada32");
  camada33 = document.querySelector(".camada33");
  camada34 = document.querySelector(".camada34");
  camada35 = document.querySelector(".camada35");
  motivo3 = document.querySelector(".motivo3");

  camada41 = document.querySelector(".camada41");
  camada42 = document.querySelector(".camada42");
  camada43 = document.querySelector(".camada43");
  camada44 = document.querySelector(".camada44");
  camada45 = document.querySelector(".camada45");
  camada46 = document.querySelector(".camada46");
  camada47 = document.querySelector(".camada47");
  motivo4 = document.querySelector(".motivo4");
  motivo5 = document.querySelector(".motivo5");
  motivo6 = document.querySelector(".motivo6");

  animar();
}

function animar(){
  let t1 = clampCena(r, 0, 1);
  let t2 = clampCena(r, 0, 0.3);
  let t3 = clampCena(r, 0.15, 0.32);
  let t4 = clampCena(r, 0.2, 0.32);
  let t5 = clampCena(r, 0.32, 0.4);
  let t6 = clampCena(r, 0.4, 0.5);
  let t7 = clampCena(r, 0.45, 0.52);
  let t8 = clampCena(r, 0.38, 0.48);
  let t9 = clampCena(r, 0.38, 0.45);
  let t10 = clampCena(r, 0.6, 0.61);
  let t11 = clampCena(r, 0.83, 0.84);
  let t12 = clampCena(r, 0.95, 1);

  let t13 = clampCena(r, 0.2, 0.3);
  let t131 = clampCena(r, 0.33, 0.35);

  let t14 = clampCena(r, 0.36, 0.4);
  let t141 = clampCena(r, 0.45, 0.51);

  let t15 = clampCena(r, 0.55, 0.62);
  let t151 = clampCena(r, 0.68, 0.69);

  let t16 = clampCena(r, 0.58, 0.66);
  let t161 = clampCena(r, 0.68, 0.69);

  let t17 = clampCena(r, 0.7, 0.75);
  let t171 = clampCena(r, 0.77, 0.78);

  let t18 = clampCena(r, 0.8, 0.9);
  let t181 = clampCena(r, 0.95, 1);

  let y = lerp(t1, 0, -5400);
  let y2 = lerp(t2, 0, -1200);
  let y3 = lerp(t2, 0, -1500);
  let y4 = lerp(t2, 0, -1000);
  let y5 = lerp(t2, 0, -400);
  let y6 = lerp(t4, 800, 50);
  let y7 = lerp(t6, 1500, 0);
  let y8 = lerp(t7, 900, 0);
  let y9 = lerp(t8, 700, 0);
  let y10 = lerp(t9, 700, 0);

  let m1 = lerp(t13, -1000, 50);
  let m2 = lerp(t14, -1000, 50);
  let m3 = lerp(t15, -1000, 50);
  let m4 = lerp(t16, -1000, 50);
  let m5 = lerp(t17, -1000, 50);
  let m6 = lerp(t18, -1000, 50);

  let o1 = lerp(t5, 1, 0);
  let o2 = lerp(t10, 1, 0);
  let o3 = lerp(t11, 0, 1);
  let o4 = lerp(t12, 0, 1);
  let o5 = lerp(t131, 1, 0);
  let o6 = lerp(t141, 1, 0);
  let o7 = lerp(t151, 1, 0);
  let o8 = lerp(t161, 1, 0);
  let o9 = lerp(t171, 1, 0);
  let o10 = lerp(t181, 1, 0);

  let x1 = lerp(t3, 800, -100);

  juntas.style.top = `${y}px`;
  juntas2.style.top = `${y}px`;

  camada12.style.top = `${y2}px`;
  camada13.style.top = `${y3}px`;
  camada14.style.top = `${y4}px`;

  camada22.style.right = `${x1}px`;
  if(t5>0)camada22.style.opacity = `${o1}`;
  camada23.style.left = `${y6}px`;
  if(t5>0)camada23.style.opacity = `${o1}`;

  camada32.style.top = `${y7}px`;
  if(t10>0)camada32.style.opacity = `${o2}`;
  camada33.style.top = `${y8}px`;
  if(t10>0)camada33.style.opacity = `${o2}`;
  camada34.style.top = `${y9}px`;
  if(t10>0)camada34.style.opacity = `${o2}`;
  camada35.style.top = `${y10}px`;
  if(t10>0)camada35.style.opacity = `${o2}`;

  camada41.style.opacity = `${o3}`;
  camada42.style.opacity = `${o3}`;
  camada43.style.opacity = `${o3}`;
  camada44.style.opacity = `${o3}`;
  camada45.style.opacity = `${o3}`;
  camada46.style.opacity = `${o3}`;
  camada47.style.opacity = `${o4}`;

  motivo1.style.left = `${m1}px`;
  if(t131>0)motivo1.style.opacity = `${o5}`;
  motivo2.style.left = `${m2}px`;
  if(t141>0)motivo2.style.opacity = `${o6}`;
  motivo3.style.left = `${m3}px`;
  if(t151>0)motivo3.style.opacity = `${o7}`;
  motivo4.style.left = `${m4}px`;
  if(t161>0)motivo4.style.opacity = `${o8}`;
  motivo5.style.left = `${m5}px`;
  if(t171>0)motivo5.style.opacity = `${o9}`;
  motivo6.style.left = `${m6}px`;
  if(t181>0)motivo6.style.opacity = `${o10}`;

  window.requestAnimationFrame(animar);
}




window.addEventListener("load", inicio);
