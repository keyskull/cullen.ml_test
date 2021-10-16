'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "573f58956cf71121bc7410dabba7e70d",
"main.dart.js_10.part.js": "e3daef1219bbdd6b77c7f2b9ae6c2851",
"version.json": "76b4e794dc134ac484b90710243429a4",
"CNAME": "54722b15e8f97c20a1fb1bb6306ca1b8",
"main.dart.js_18.part.js": "0204dafeca70b2151baeb10befcbb620",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_17.part.js": "33f2fadf015dd7eddf2af84332fc0cb9",
"main.dart.js_11.part.js": "dc8c94d90a2a93bdf2a84f275dd3ef32",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_1.part.js": "baceed7388a1f74cef5d945daa96d765",
"main.dart.js_5.part.js": "0ae00c6d0f0b0a00315ff05dd98a9add",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_7.part.js": "cc00d805427cc49e2878d4d3fa0e7260",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_4.part.js": "2ba7f32d3345c5a775eda1e9cdab64dd",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0ac18d28fd72786a235dcc77ad273602",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "3c1e9003bf476ad3b7bb4d09c5e06987",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"main.dart.js_2.part.js": "15a146f66405a29096b7b25befa0c0ff",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_6.part.js": "111b9344b82a2fb05ea12e4d14604285",
"main.dart.js_20.part.js": "b8b22372c50a723032d12551ae734531",
"main.dart.js_16.part.js": "824b800937511b0a6a5dc77e1254cd6e",
"main.dart.js": "3ebfda0432044b3475e373aecc3ac4a1",
"main.dart.js_14.part.js": "21245e858e3f62bdb43382ad203e03a6",
"main.dart.js_9.part.js": "d32cbabe097396edffdce66fbcd417dc",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"main.dart.js_3.part.js": "b340c3b9102382e3601895dec3214bcd",
"main.dart.js_8.part.js": "e1df4992146fd7815f0eb4e95886fe9b",
"main.dart.js_24.part.js": "ddf20d54e54082e290dd391cf28490de",
"main.dart.js_26.part.js": "54f4c4ed114740a2a4261e4684160264",
"main.dart.js_15.part.js": "3c363b0625358e21f99faa507340975f",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_22.part.js": "17f83ad70622d873ea2b88ca68637749",
"index.html": "07dcde110897744c56286ec0016822a7",
"/": "07dcde110897744c56286ec0016822a7",
"main.dart.js_19.part.js": "956d20cefd47eae09010582ab1ed7cf3",
"main.dart.js_12.part.js": "fc950a0bb288d9a6cbc1befb0bd67f65",
"main.dart.js_21.part.js": "e078a29e018d08ae82e61b8bfed68d37"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
