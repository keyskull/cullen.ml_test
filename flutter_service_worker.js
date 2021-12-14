'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "9b0c67d63a958601dc234f2ca6c51ea9",
"main.dart.js_19.part.js": "62f13023ca66b05a9323fe877780f568",
"main.dart.js_3.part.js": "93658f6c2abb9ff6c615a8734a9f56d7",
"main.dart.js_15.part.js": "ecdbfd92a5383b16a433f0b9f71dec3f",
"main.dart.js_32.part.js": "45b2a1f6eaf74b19c7ced50bdce5bd97",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"CHANGELOG.md": "d1b7eb09abb8398ba3c43408eeabbb85",
"main.dart.js": "89bd492e148ed1ad852a4aa55e3b0901",
"main.dart.js_9.part.js": "7f7e2044fb1f6fd727b1bddcaab22895",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_26.part.js": "c0e79ec08070f34c7e0b04a647572b26",
"main.dart.js_4.part.js": "38c9832ec9e4d9d88fffdcb5b1b6e6cc",
"version.json": "21126f3551d8f15062e183bd58a5ad6d",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "0a2d412cd3cf56ae638aa29d727bc651",
"main.dart.js_28.part.js": "ae1ed881e3522697595f3e0711a0f156",
"main.dart.js_17.part.js": "81b2599844fe8e6e08fd6a2c09a4f933",
"main.dart.js_25.part.js": "6b3725422d2cad50217f5e0d7ffe2a5d",
"main.dart.js_6.part.js": "c78aefa149b0dbea030f41411a1a58c7",
"main.dart.js_22.part.js": "e5812dcb6870fc4f80cb80497ffc6273",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"main.dart.js_1.part.js": "cdc08ea4feb079149e3c0c45d868bdd3",
"main.dart.js_31.part.js": "49c6b397ebfc4909126e7b3ee0a67b24",
"main.dart.js_27.part.js": "3d0f1fc7dbfaabc0b11760ee38c28a77",
"main.dart.js_14.part.js": "a8bfc72ac2d9c016703f1ee9f45fe768",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_29.part.js": "e7a3726d44fa4487f7f9719e5175bbf0",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/pexels-snapwire-6992-4928x3264.jpg": "526decec44e4d8a27c102c0986c34aa6",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/pexels-snapwire-6992-640x423.jpg": "3e537e8cd9017f6287004bc9d3542d4d",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/NOTICES": "a3cf70726f4cde017c71a1df40da2766",
"assets/AssetManifest.json": "405cb0e3ec433fe9223d4275442c70bb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "9fb7242057563d97b55cf40850d058de",
"/": "9fb7242057563d97b55cf40850d058de",
"main.dart.js_16.part.js": "89bfb85d521db6141044f740aa01dcd5",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_23.part.js": "0b8a213ba15ae0a50729edee16bcfdd9",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_13.part.js": "da7fe05345a9e73f6d74994349bdeb98",
"main.dart.js_11.part.js": "96511be927a35991d0627652805fa319",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "086826d4b0dab44e17542d307cc91914",
"CNAME": "54722b15e8f97c20a1fb1bb6306ca1b8",
"main.dart.js_8.part.js": "3c90653f07c51656ede6c3224ad91f11",
"main.dart.js_21.part.js": "1bc768ca91fd8fceee57e28edc593ea0",
"main.dart.js_18.part.js": "37c470ed7a4d4a7db04bd3a506a2ab64",
"main.dart.js_34.part.js": "8676f70b88ade4c6b2b89ac933deec18",
"main.dart.js_5.part.js": "0159473106e9284d0e2625457be04e55",
"main.dart.js_10.part.js": "c57e8baffa23590e0de6ff053543c341",
"main.dart.js_12.part.js": "f203cca460eac6da6e7364747777e6e6"
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
