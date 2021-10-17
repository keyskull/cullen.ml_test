'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "f09fcab16c2be40ea7f46de4baef8661",
"main.dart.js_10.part.js": "c294891dbbbff8a4fa6eb1fcbfb0eb4a",
"version.json": "76b4e794dc134ac484b90710243429a4",
"main.dart.js_23.part.js": "063cfd824de00e2da0abe1e55c772425",
"CNAME": "54722b15e8f97c20a1fb1bb6306ca1b8",
"main.dart.js_18.part.js": "e69c0cecf2d82ec92c5390477832fe3c",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_17.part.js": "52797a90cf46431a5a5c2274d7eea2b1",
"main.dart.js_11.part.js": "7f8c1db36f1422dd7a3b5f322b8a00cc",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_1.part.js": "f60ebdba7c46f8e2e8a84fc620ffe64e",
"main.dart.js_5.part.js": "6c3353e923f695611ec750630c344b50",
"main.dart.js_32.part.js": "0b792d515aab20b2c872f154c520c3dd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_28.part.js": "31cf2e34dbad3fa9382d938ff7913476",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_7.part.js": "cc966b13d5bdd6ad745986576a22eb21",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_4.part.js": "f79f52c83177d740d9915ff57a8a31ad",
"main.dart.js_27.part.js": "e1edd53f936c8b064f46521a6837cf5a",
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
"main.dart.js_2.part.js": "edf3df8cce93e03bbbfcff6fb8e5ad7f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_6.part.js": "9be1fbfba5fa261d67a319ac42c67c7e",
"main.dart.js_20.part.js": "2b6f25afac5ca591f47aa1bc4943dce9",
"main.dart.js_16.part.js": "68b61d2a3a15c39fb788194ef8d11e2d",
"main.dart.js": "38e608b439f5cff73b15d1f97c234802",
"main.dart.js_14.part.js": "06a85b84f1da5ba9188361f20128a747",
"main.dart.js_9.part.js": "6e92534867a47f1d40b746de565fe66d",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"main.dart.js_3.part.js": "73f41dee18949a4dac9d52ebcfb6e131",
"main.dart.js_8.part.js": "4215010842402733d8f666c709b1945e",
"main.dart.js_26.part.js": "cf1175a1c63cf1d2b74e77ad77a86ff4",
"main.dart.js_15.part.js": "0c8737b3257553b1ad8c7e2638225cc3",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_22.part.js": "87a472a4457b1c1b94aadc11e1591a85",
"index.html": "29fc1ddfd6373c3c2f45276accc78f6f",
"/": "29fc1ddfd6373c3c2f45276accc78f6f",
"main.dart.js_19.part.js": "843657b54cda50181b933aa3372698df",
"main.dart.js_12.part.js": "76d36dc4cc534542ae0becf521c227b7",
"main.dart.js_30.part.js": "f35aedaed8c4e9a3627ec5cc576e9a5f",
"main.dart.js_21.part.js": "624280c318296b4582bd14e1e7643652"
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
