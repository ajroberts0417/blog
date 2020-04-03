// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import {Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const myCylinderSurface = new Surface(
    4096, /* width */
    600, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );
  myCylinderSurface.setDensity(4096)

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('vrsite', { /* initial props */ }),
    myCylinderSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
