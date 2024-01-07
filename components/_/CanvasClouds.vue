<template>
  <canvas ref="background" class="w-[100vw] h-[100vh] opacity-[0.25]"></canvas>
</template>

<script setup>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector3,
  Data3DTexture,
  RedFormat,
  LinearFilter,
  BoxGeometry,
  RawShaderMaterial,
  GLSL3,
  Color,
  BackSide,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  CanvasTexture,
} from 'three'

const ImprovedNoise = function () {
  const p = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10,
    23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87,
    174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
    133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208,
    89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5,
    202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119,
    248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232,
    178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249,
    14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205,
    93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
  ]

  for (var i = 0; i < 256; i++) {
    p[256 + i] = p[i]
  }

  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }

  function lerp(t, a, b) {
    return a + t * (b - a)
  }

  function grad(hash, x, y, z) {
    let h = hash & 15
    let u = h < 8 ? x : y, v = h < 4 ? y : h == 12 || h == 14 ? x : z

    return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v)
  }

  return {
    noise: function (x, y, z) {
      let floorX = Math.floor(x), floorY = Math.floor(y), floorZ = Math.floor(z)
      let X = floorX & 255, Y = floorY & 255, Z = floorZ & 255

      x -= floorX
      y -= floorY
      z -= floorZ

      let xMinus1 = x - 1, yMinus1 = y - 1, zMinus1 = z - 1
      let u = fade(x), v = fade(y), w = fade(z)
      let A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z, B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z

      return lerp(
        w,
        lerp(
          v,
          lerp(
            u,
            grad(p[AA], x, y, z),
            grad(p[BA], xMinus1, y, z),
          ),
          lerp(
            u,
            grad(p[AB], x, yMinus1, z),
            grad(p[BB], xMinus1, yMinus1, z),
          ),
        ),
        lerp(
          v,
          lerp(
            u,
            grad(p[AA + 1], x, y, zMinus1),
            grad(p[BA + 1], xMinus1, y, z - 1),
          ),
          lerp(
            u,
            grad(p[AB + 1], x, yMinus1, zMinus1),
            grad(p[BB + 1], xMinus1, yMinus1, zMinus1),
          ),
        ),
      )
    },
  }
}

const vertexShader = `
in vec3 position;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPos;

out vec3 vOrigin;
out vec3 vDirection;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

  vOrigin = vec3( inverse( modelMatrix ) * vec4( cameraPos, 1.0 ) ).xyz;
  vDirection = position - vOrigin;

  gl_Position = projectionMatrix * mvPosition;
}
`

const fragmentShader = `
precision highp float;
precision highp sampler3D;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

in vec3 vOrigin;
in vec3 vDirection;

out vec4 color;

uniform vec3 base;
uniform sampler3D map;

uniform float threshold;
uniform float range;
uniform float opacity;
uniform float steps;
uniform float frame;

uint wang_hash(uint seed)
{
    seed = (seed ^ 61u) ^ (seed >> 16u);
    seed *= 9u;
    seed = seed ^ (seed >> 4u);
    seed *= 0x27d4eb2du;
    seed = seed ^ (seed >> 15u);
    return seed;
}

float randomFloat(inout uint seed)
{
    return float(wang_hash(seed)) / 4294967296.;
}

vec2 hitBox( vec3 orig, vec3 dir ) {
  const vec3 box_min = vec3( - 0.5 );
  const vec3 box_max = vec3( 0.5 );
  vec3 inv_dir = 1.0 / dir;
  vec3 tmin_tmp = ( box_min - orig ) * inv_dir;
  vec3 tmax_tmp = ( box_max - orig ) * inv_dir;
  vec3 tmin = min( tmin_tmp, tmax_tmp );
  vec3 tmax = max( tmin_tmp, tmax_tmp );
  float t0 = max( tmin.x, max( tmin.y, tmin.z ) );
  float t1 = min( tmax.x, min( tmax.y, tmax.z ) );
  return vec2( t0, t1 );
}

float sample1( vec3 p ) {
  return texture( map, p ).r;
}

float shading( vec3 coord ) {
  float step = 0.01;
  return sample1( coord + vec3( - step ) ) - sample1( coord + vec3( step ) );
}

void main(){
  vec3 rayDir = normalize( vDirection );
  vec2 bounds = hitBox( vOrigin, rayDir );

  if ( bounds.x > bounds.y ) discard;

  bounds.x = max( bounds.x, 0.0 );

  vec3 p = vOrigin + bounds.x * rayDir;
  vec3 inc = 1.0 / abs( rayDir );
  float delta = min( inc.x, min( inc.y, inc.z ) );
  delta /= steps;

  uint seed = uint( gl_FragCoord.x ) * uint( 1973 ) + uint( gl_FragCoord.y ) * uint( 9277 ) + uint( frame ) * uint( 26699 );
  vec3 size = vec3( textureSize( map, 0 ) );
  float randNum = randomFloat( seed ) * 2.0 - 1.0;
  p += rayDir * randNum * ( 1.0 / size );

  vec4 ac = vec4( base, 0.0 );

  for ( float t = bounds.x; t < bounds.y; t += delta ) {
    float d = sample1( p + 0.5 );
    d = smoothstep( threshold - range, threshold + range, d ) * opacity;
    float col = shading( p + 0.5 ) * 3.0 + ( ( p.x + p.y ) * 0.25 ) + 0.2;
    ac.rgb += ( 1.0 - ac.a ) * d * col;
    ac.a += ( 1.0 - ac.a ) * d;
    if ( ac.a >= 0.95 ) break;
    p += rayDir * delta;
  }

  color = ac;

  if ( color.a == 0.0 ) discard;
}
`

const background = ref(null)
let renderer

function setRenderer() {
  if (background.value) {
    renderer = new WebGLRenderer({ canvas: background.value })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
    animate()
  }
}

const scene = new Scene()
const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 0.00001, 0.15)
scene.add(camera)
const canvas = document.createElement("canvas")
canvas.width = 1
canvas.height = 32
const context = canvas.getContext("2d")
const gradient = context.createLinearGradient(0, 0, 0, 32)
gradient.addColorStop(0.0, "#ffffff")
gradient.addColorStop(0.5, "#ffffff")
gradient.addColorStop(1.0, "#ffffff")
context.fillStyle = gradient
context.fillRect(0, 0, 1, 32)
const sky = new Mesh(
  new SphereGeometry(10),
  new MeshBasicMaterial({
    map: new CanvasTexture(canvas),
    side: BackSide,
  })
)
scene.add(sky)

const size = 128

const data = new Uint8Array(size * size * size)

let i = 0
const scale = 0.05
const perlin = new ImprovedNoise()
const vector = new Vector3()

for (let z = 0; z < size; z++) {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const d = 1.0 - vector.set(x, y, z).subScalar(size / 2).divideScalar(size).length()
      data[i] = (128 + 128 * perlin.noise((x * scale) / 1.5, y * scale, (z * scale) / 1.5)) * d * d
      i++
    }
  }
}

const texture = new Data3DTexture(data, size, size, size)
texture.format = RedFormat
texture.minFilter = LinearFilter
texture.magFilter = LinearFilter
texture.unpackAlignment = 1
texture.needsUpdate = true

const geometry = new BoxGeometry(1, 1, 1)

const material = new RawShaderMaterial({
  glslVersion: GLSL3,
  uniforms: {
    base: {
      value: new Color(0xffaacc),
    },
    map: {
      value: texture,
    },
    cameraPos: { value: new Vector3() },
    threshold: { value: 0.55 },
    opacity: { value: 0.64 },
    range: { value: 0.23 },
    steps: { value: 136 },
    frame: { value: 0 },
  },
  vertexShader,
  fragmentShader,
  side: BackSide,
  transparent: true,
})

material.uniforms.threshold.value = 0.55
material.uniforms.opacity.value = 0.64
material.uniforms.range.value = 0.23
material.uniforms.steps.value = 136

const mesh = new Mesh(geometry, material)
scene.add(mesh)

function animate() {
  requestAnimationFrame(animate)

  mesh.material.uniforms.cameraPos.value.copy(camera.position)
  mesh.rotation.y = -performance.now() / 7500

  mesh.material.uniforms.frame.value++

  renderer?.render(scene, camera)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer?.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  setRenderer()

  window.addEventListener("resize", onWindowResize)
})
</script>
