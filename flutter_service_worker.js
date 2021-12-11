'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "73a82d73413e514c5f14c1c3c59ffcd2",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_11.part.js": "a4e792efee9b4bb07d8637aa4d69b46e",
"main.dart.js_10.part.js": "a26154680ea67b9b67b8e23f3edc23e8",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"CNAME": "54722b15e8f97c20a1fb1bb6306ca1b8",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_35.part.js": "00da7f398e61f9eadf03395bbe574ca7",
"main.dart.js_19.part.js": "fefa431463edcbd3f05ac658ad659b74",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_20.part.js": "9a87ab40700f5f68e8544aaeff7030d9",
"main.dart.js_4.part.js": "50fc8777a59c4939545e3e5bdda61ecd",
"version.json": "291b5077ce0eebb4471041ac43576505",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_18.part.js": "fb710e17b57271271531d9e7475d7735",
"main.dart.js_22.part.js": "76cd255501e4cea25c1b67f018334f88",
"main.dart.js_21.part.js": "bd791a5bc656234df8ff8e08f60c9d0d",
"main.dart.js_31.part.js": "6f19354f6e38ed48e11cee474a67000d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_1.part.js": "b3b49d33616c625bdf1e89f3dc159e13",
"main.dart.js_12.part.js": "f9379d156bad8dd6e4ced6df56b04aaf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_23.part.js": "3d79e66281196253264b0d214ed8c6d5",
"main.dart.js_2.part.js": "81e25dbc53ffc2098fd650fa15821aa6",
"main.dart.js_14.part.js": "6566553f6fdf5cf19bcdfa97d9ebbfd1",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_3.part.js": "b6be7d5185d937b843c1c011cc5f5c7c",
"main.dart.js_16.part.js": "0abdec8b3ec3c291275921fbdd1bae94",
"main.dart.js_5.part.js": "b3234b6bb545ad7e6d65fc9c3adf2352",
"CHANGELOG.md": "d1b7eb09abb8398ba3c43408eeabbb85",
"main.dart.js_17.part.js": "c20de874dabb3dc0baf7ba58dc9cb3f0",
"main.dart.js": "3b88b5eb0a4e70adf157a8bf8aac7110",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_6.part.js": "0b4cc77e4502084e8efb33db4262c93e",
"main.dart.js_29.part.js": "3323432e33eb979d7e7637ed6dd93bd5",
"main.dart.js_28.part.js": "75f07b0c2538815c553683c6acdb46e9",
"main.dart.js_27.part.js": "8fa37798122827cecac6b623d231ee90",
"index.html": "5a2c476df70ae5a0d7f4eb0136e51a52",
"/": "5a2c476df70ae5a0d7f4eb0136e51a52",
"main.dart.js_8.part.js": "f752f3b1aecbb67f7ebca9ad197f7eba",
"main.dart.js_15.part.js": "de4bae22625238f71cad1a48ed122dc7",
"main.dart.js_30.part.js": "6d52431447c21cefbfe0df02c27f2c55",
"main.dart.js_7.part.js": "7e18e480892e081120e708ae06b69165",
"main.dart.js_9.part.js": "23fb94028026e4384ba3f6fad680cd25",
"main.dart.js_33.part.js": "9c33f824f0a1a6fd5b03ef3d11391986",
"assets/images/pexels-snapwire-6992-640x423.jpg": "3e537e8cd9017f6287004bc9d3542d4d",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/pexels-snapwire-6992-4928x3264.jpg": "526decec44e4d8a27c102c0986c34aa6",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/NOTICES": "7232c574b0b59489cc771f174bd0cadc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/AssetManifest.json": "405cb0e3ec433fe9223d4275442c70bb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"main.dart.js_34.part.js": "2629edabfdd43e544379de941e562a7f"
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
