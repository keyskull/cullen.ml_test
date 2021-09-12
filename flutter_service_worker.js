'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_20.part.js": "9f19692779e74d7ee73eae0309eeed63",
"main.dart.js_12.part.js": "9d391de747b426261452e835e4742a8b",
"main.dart.js_22.part.js": "4aa240f5464d3b85460fd0d633e86e14",
"main.dart.js_9.part.js": "d2d0d8922f19efd141ef17b6374a685e",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js": "fa9d6ad318cc8eae851a629eae4c7ab5",
"main.dart.js_11.part.js": "a6a575ff60db674d08e602a2b7f1e5bc",
"main.dart.js_14.part.js": "d57618a10a6ee97e06c572fffce90f61",
"main.dart.js_8.part.js": "0f44efa265534e67688318c25a893f27",
"version.json": "27ca9ffead8f33e4fd135ac3f52032d7",
"main.dart.js_6.part.js": "c742c5ce0891a1c7aa98c9cb74b9aecf",
"main.dart.js_19.part.js": "4beece1d26f7f370da1736e5058df658",
"main.dart.js_13.part.js": "82116e59b72b0f3bb767a1d335799ae9",
"main.dart.js_7.part.js": "2f9fd8915499a9839f52847be256cb67",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"main.dart.js_21.part.js": "2ff2fe907695925b1c4c8c0e33f4d9d0",
"main.dart.js_16.part.js": "f5819d79215a375d69bca2977747ace8",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_10.part.js": "64ea67faaad78fe6ab751eb1ad5c1928",
"index.html": "674bc236d94481ccb25edf2a27236995",
"/": "674bc236d94481ccb25edf2a27236995",
"main.dart.js_1.part.js": "81c766ad478fdca0aba3e8ef1c49dcea",
"assets/NOTICES": "f218b6ebd24bea483513da3f3721f6f0",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "3c1e9003bf476ad3b7bb4d09c5e06987",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_3.part.js": "ef15c73233d75c9388c3b5438d86dfa3",
"main.dart.js_17.part.js": "2e62188f104a3bce7bc9406f7746c648",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_18.part.js": "76b150823b93be1b2a2ac97e0bb41e0f",
"main.dart.js_15.part.js": "a2d5baff5298c9347e649d1dfde2b560",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_2.part.js": "25bc148d165a8aafd55c74521aa99a42",
"main.dart.js_4.part.js": "531d520ccc6ab602a904c55b1fad16ba",
"CNAME": "54722b15e8f97c20a1fb1bb6306ca1b8",
"main.dart.js_5.part.js": "fd21c4924594da7f08d9ec32f39469c3",
"main.dart.js_23.part.js": "e6aa982f37efaf1c060952a8810a8aa1"
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
