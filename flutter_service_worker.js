'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "6abc6e481d16c6c83d02412cbfcdcc50",
"main.dart.js_10.part.js": "3f423495a574dc692faeca7b1b93ee49",
"version.json": "4d06db52d18b2f2f64ac157d7295d532",
"main.dart.js_23.part.js": "fd741b6a1f9ca202000b9b3c47d5b976",
"CNAME": "54722b15e8f97c20a1fb1bb6306ca1b8",
"main.dart.js_18.part.js": "b0d8de60177cb412e1046190c7b12495",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_17.part.js": "f07dee57cdf434d22943989f175136ae",
"main.dart.js_11.part.js": "be9ce2dca6133d711b21230979aae31a",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_1.part.js": "6fffb57bf67a4d96f62e064d48d9fd3b",
"main.dart.js_31.part.js": "89b9272e8d708baab353c165df722803",
"main.dart.js_5.part.js": "993f30661519d2e228483816aa3369ea",
"main.dart.js_32.part.js": "ae1cbcd575df4b9f1ce2349b514c57a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_28.part.js": "c975843200d63666265085f44a412b72",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_7.part.js": "d965fbd61ef1bc771c2dbf6719fffb9e",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_4.part.js": "7e34d386e0bbf89dd0bc1ae6764995f2",
"main.dart.js_27.part.js": "836b84a96b0117b842a1789d9f0c1f26",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9970ce072c19d914b20bd354abcb1e9b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "3c1e9003bf476ad3b7bb4d09c5e06987",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"main.dart.js_2.part.js": "d32780e6fe006cbc13966b2b4326b15a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_6.part.js": "501db118ca5f0efb71a9fa4cec765de4",
"main.dart.js_20.part.js": "45d573413e2fda4cf8da6089f48c226e",
"main.dart.js_16.part.js": "1ecddeedf8424c9b6526afe4032b5e00",
"main.dart.js": "a19716298dc86869fb68585d909b5d35",
"main.dart.js_14.part.js": "0681e19cdbc42817c2a813d898c5a38d",
"main.dart.js_9.part.js": "e2bfadd7e298aa7229ee5cea52572033",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"main.dart.js_3.part.js": "3b247ccfa041ce6c9b303d0af2fc576b",
"CHANGELOG.md": "aeca9bcb0be9ab3876447e9cf44fbe32",
"main.dart.js_8.part.js": "571390650eee35d860cb02906299e8f3",
"main.dart.js_24.part.js": "f6285f631cde0a5ad2180d1e6590e88b",
"main.dart.js_15.part.js": "ecb67caaf78cc5c468a0fe0da2f7592f",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_22.part.js": "2199c9dcd71909284e0b2bfd1c11cd8b",
"index.html": "d6e057a4603f829f5cb5607642427dee",
"/": "d6e057a4603f829f5cb5607642427dee",
"main.dart.js_29.part.js": "116e79e246d94070c1ed864e614ff2ab",
"main.dart.js_19.part.js": "b33f086696d2192e846cc87e6a99dec2",
"main.dart.js_12.part.js": "fe8bd2f9eedc7e769e3ef20f96071145",
"main.dart.js_21.part.js": "efc4d93e392b6b9bbc2b263a8dcb6dbd"
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
