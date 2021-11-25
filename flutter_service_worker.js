'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "4c030cd65eb2c61e298c829e5d7644a2",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_11.part.js": "0344e46d1a4290a019f2fc7adbc6bc8b",
"main.dart.js_10.part.js": "8fbbbc1bba5683f08e19b57235bd012c",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"CNAME": "54722b15e8f97c20a1fb1bb6306ca1b8",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_35.part.js": "3ce73b60948d338320331e1584ceb402",
"main.dart.js_19.part.js": "2a4d2491993cb2912df8a7cf18aec01e",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_37.part.js": "a51c6fd93eb2518ef697ac29b8581bf5",
"main.dart.js_20.part.js": "267b8f802bc8bebfdd331799d8fbd5cc",
"main.dart.js_4.part.js": "cf906bcff057c72050381172d0e46493",
"version.json": "291b5077ce0eebb4471041ac43576505",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_18.part.js": "0dc131990a19a55e09a247182c13694f",
"main.dart.js_22.part.js": "b6cd31b6a53a3fed6f1a779449baa6ac",
"main.dart.js_21.part.js": "13da87f33ab1de7329f443d4b8cc9882",
"main.dart.js_31.part.js": "c7d8d9b0a781bf64282bd53da1142e27",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_1.part.js": "64655331bb0a19dc095ca83029a044b9",
"main.dart.js_12.part.js": "baa1c5e598fbe7319b530507909e8cc8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_23.part.js": "7dfdfa59f09866b5c9aab77956ad0e64",
"main.dart.js_2.part.js": "155b5bd19ef7a294e9d10eb2a3f43ebd",
"main.dart.js_14.part.js": "a4d46ab052c32598dd817d54ea8bb19e",
"main.dart.js_38.part.js": "176ae3b44eb267c8c3e88f1a4c943e5b",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_3.part.js": "3ff08505e4244680bd4f19103bac2e24",
"main.dart.js_16.part.js": "59a1a7c9e2c78176d3de6cb346c39d26",
"main.dart.js_5.part.js": "4761cb74a7b7a7a9a73ccb78c423e6ef",
"CHANGELOG.md": "d1b7eb09abb8398ba3c43408eeabbb85",
"main.dart.js_17.part.js": "6564bc359a2aac83a5a2e8528e821927",
"main.dart.js_24.part.js": "52c99401f5f52c26e668a6eac0bfc9a2",
"main.dart.js": "31d302d70f685280346f579098dae707",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_6.part.js": "9ed4f8c88b1ce5e7c1b146a7d3522f79",
"main.dart.js_29.part.js": "0c6b539c5119c89a2a9c547833d2820b",
"index.html": "f4862351bb04c1e6ad27e59a9c43b462",
"/": "f4862351bb04c1e6ad27e59a9c43b462",
"main.dart.js_8.part.js": "6647bbfa40a4be04f76611a047adbe1f",
"main.dart.js_15.part.js": "76c0f76724cf0e366a0e09563f9ec264",
"main.dart.js_30.part.js": "6f6726433c9b13845d33b65086d574f1",
"main.dart.js_7.part.js": "3f832d6266676167ae38044139602f66",
"main.dart.js_9.part.js": "1512afe42e30fa0177fe210378939a4f",
"main.dart.js_26.part.js": "49b0dd91714a5f88368da524b6769f4f",
"main.dart.js_33.part.js": "dbe70f35626d7cb953cb5d0b2c680dc0",
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
"assets/NOTICES": "a726d1b84b28e10c019cac69d351524c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/AssetManifest.json": "405cb0e3ec433fe9223d4275442c70bb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57"
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
