'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "498bb73da209b776110c03858bccb1b1",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_11.part.js": "0185122d875525619869724defe73259",
"main.dart.js_10.part.js": "45a8c2e9304287152f3b6443c3f494a7",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"CNAME": "54722b15e8f97c20a1fb1bb6306ca1b8",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_19.part.js": "532739180bbb69bac69fbf94ef59d0a3",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_20.part.js": "65dba96a5985602d775905c322b20298",
"main.dart.js_4.part.js": "d0c94e207533c20fa26172036ba11f72",
"version.json": "291b5077ce0eebb4471041ac43576505",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_18.part.js": "d626dd2a2be27f85759c497981217a2f",
"main.dart.js_21.part.js": "39d10c638d8d937358189721fec4790a",
"main.dart.js_31.part.js": "563671ee31d3301f399b22ddc1815a58",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_1.part.js": "666928deec608d0909718d61562b7b45",
"main.dart.js_12.part.js": "dacc0f43d388ae5aa64fc75bf33df5af",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_23.part.js": "4e742e8b38e63e9ae0fd63bea129f01e",
"main.dart.js_2.part.js": "a5f0b03a846a571d697dcaea67a2ad8d",
"main.dart.js_14.part.js": "9c30c531d5de6d232bd854187e8b6ac3",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_3.part.js": "3aafb4168989ee7484f693fba4be6f1c",
"main.dart.js_32.part.js": "94285226f5dc98e66579aaa546e2b203",
"main.dart.js_16.part.js": "0a91c2da3500cfe092552e1e0821e708",
"main.dart.js_5.part.js": "f4075722496c6f1e4fa1f8e33c64a12f",
"CHANGELOG.md": "d1b7eb09abb8398ba3c43408eeabbb85",
"main.dart.js_17.part.js": "9d0866d50804241b7f789d4e88310762",
"main.dart.js": "c7d6c669dc82b626e90c35c1e180daa5",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_6.part.js": "cca9ee110a81924eb5210df2244897d4",
"main.dart.js_28.part.js": "f39bdaf7b182d75cb9cb9e5e90d91328",
"main.dart.js_27.part.js": "de8ecde14fefd51d25ef2f388058297d",
"index.html": "57584ebe7cec3f8ea64d2dd592e434a5",
"/": "57584ebe7cec3f8ea64d2dd592e434a5",
"main.dart.js_8.part.js": "b244c93ae5147bda3f9d98ed398de0a0",
"main.dart.js_15.part.js": "2a43a2a1c1702aa0f481eefba03d889a",
"main.dart.js_30.part.js": "dcc935c88ea4a2f66b7dc219f3fdb201",
"main.dart.js_7.part.js": "bfd7fbaa6132bdf1efb3e176cc3629e3",
"main.dart.js_9.part.js": "1cb3fc11f5fca394121f592e226f7991",
"main.dart.js_26.part.js": "002d1b20972ad9e02656fe73d9452dcf",
"main.dart.js_33.part.js": "d78f65e1e5d0861fd3034c7b414393a3",
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
"assets/NOTICES": "c8856925cd9d3cff4b4c4bf8128239ce",
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
