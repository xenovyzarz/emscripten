function finall(x) {
 x = +x;
 var a = +5;
 a = +x;
 a = 17;
 a = +44;
 a = +44.0;
 a = +44.9;
 a = +12.78e5;
 a = +12e10;
 a = -x;
 a = -17;
 a = -44;
 a = -44.0;
 a = -44.9;
 a = -12.78e5;
 a = -12e10;
 a = +-x;
 a = +-17;
 a = +-44;
 a = +-44.0;
 a = +-44.9;
 a = +-12.78e5;
 a = +-12e10;
 a = +0x8000000000000000;
 a = +-0x8000000000000000;
 a = -+0x8000000000000000;
 a = -0x8000000000000000;
 a = +0xde0b6b000000000;
 a = +-0xde0b6b000000000;
 a = -+0xde0b6b000000000;
 a = -0xde0b6b000000000;
 return +12e10;
}
function looop() {
 while (1) {
  do_it();
  if (condition()) {
   break;
  }
 }
 while (1) {
  do_it();
  if (a > b) {
   break;
  }
 }
 while (1) {
  do_it();
  if (!x()) {
   break;
  }
 }
}
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["finall", "looop"]

