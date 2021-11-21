'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "20441424481587870e52c70d771074b5",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_11.part.js": "6c1944d848f0982f6be7992a202f2044",
"main.dart.js_10.part.js": "ab672def2a8dee20ca24c4ef999b04ea",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"CNAME": "54722b15e8f97c20a1fb1bb6306ca1b8",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_35.part.js": "2c6686705d833df1bed4b7cffcb66038",
"main.dart.js_19.part.js": "6c9e54241dc9d16ed881fde858d2f003",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_20.part.js": "13362be536e817cc40f4724061589da3",
"main.dart.js_4.part.js": "8451ef4d0e1f3cc739e30234c670fead",
"version.json": "291b5077ce0eebb4471041ac43576505",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_18.part.js": "545d81b44311d7df6c2234bff03ad8d8",
"main.dart.js_22.part.js": "8b652f777fb10f23007cb3601098142c",
"main.dart.js_21.part.js": "dfeec30e49371ad4cbbae5a73b151a2c",
"main.dart.js_31.part.js": "6f074f35b946201adcf0549baf589251",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_1.part.js": "6035d0a6fbfaba5af28023ba8e3f58ea",
"main.dart.js_12.part.js": "a9d3e6f9c8b05a30c1ef275854a10558",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_2.part.js": "065b628fdf2e9087e8cbd89b46bdfb48",
"main.dart.js_14.part.js": "52c06ce08b1ce842108af436398f82b4",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_3.part.js": "40fc7dd8ce2307dc96d9cd7ce545bd07",
"main.dart.js_32.part.js": "c182748c0a82e938833e4237dd6bb47e",
"main.dart.js_16.part.js": "45f83f10bc761ea47dd29ff7bed170a9",
"main.dart.js_5.part.js": "a714a2936f106819130cbcb58452597a",
"CHANGELOG.md": "d1b7eb09abb8398ba3c43408eeabbb85",
"main.dart.js_17.part.js": "249983fcbfa7943349869545b27480fb",
"main.dart.js_24.part.js": "4f84bf70171aa626ed3423dbba6e2655",
"main.dart.js": "7e3888cb5a6923d0ae80a4351ac9d981",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_6.part.js": "f09e7cef8c6ac4dd867f318a6b607692",
"main.dart.js_29.part.js": "f39bdaf7b182d75cb9cb9e5e90d91328",
"main.dart.js_28.part.js": "eaf638abf2a53682eb67a72935e88a16",
"main.dart.js_27.part.js": "c087aa67c927ab43fb426598edd30056",
"index.html": "836c5cc2904795416edc48303d026846",
"/": "836c5cc2904795416edc48303d026846",
"main.dart.js_8.part.js": "0f9d0efd22aea1b6bc1cad57887e5c65",
"main.dart.js_15.part.js": "25780027ceb0acb75baa8ec6b022c312",
"main.dart.js_7.part.js": "f45fa9a20dc4547ea035ff1d796c3f3d",
"main.dart.js_9.part.js": "c56c25625cd5d71cfd626e2b43dcd622",
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
"assets/NOTICES": "32edddb0b0b281dc2c29d3950edecb8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/AssetManifest.json": "405cb0e3ec433fe9223d4275442c70bb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"main.dart.js_34.part.js": "51320e032ddc763db8e8997e25e6bdfe"
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
