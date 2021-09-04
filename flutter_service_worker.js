'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4b6db237b3514a88107a422469adfb0f",
"index.html": "b4a0ec34afd6de4d67a714bd8054e9d7",
"/": "b4a0ec34afd6de4d67a714bd8054e9d7",
"main.dart.js": "42f5cdbc554651552842d077a88b1fed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d5a3c68a86b6c0780938cd60827e0cd3",
".git/config": "42ba51d5689fcdae9b02dce95bb7bb19",
".git/objects/3b/c88c496a362a4dd41a7a85adb32e54c38393b7": "638c3381ca4ce8acf543b32b955af0b8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/5f/fea57d8a48ead6dde4ed9fb70e4fb11a7992f2": "5d689bc38fc447b16522933d13d74243",
".git/objects/d9/559c706fd7065b331da1e7bef8522b27921d06": "3e43c570a3fe4e3a46bf651c6fa46ea7",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/49f0fdfc9b69ce0d8d1ef939e7a12851b2eb11": "ead74d68ba57a88afd5b83e7883e3f74",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/54ba3a9292e4e13c685364b3ea0a49054c7451": "9c6453d164083ebc44b32e9f9861923c",
".git/objects/c1/273605a9c0cf10e062d5181dba8f90b9ac2790": "0fdc37c65f4d28bc23721d6cd415d001",
".git/objects/18/fe8fc02239efdf7344ab69d8c656ad128175ce": "5e04841d76247c4a8e435277d94f64d2",
".git/objects/18/f7778d490ab0296ef70bda815e2c846f02babc": "aee0d48757cceb28f12cf0f76ea0e800",
".git/objects/18/da462b98c2e7e32f4df3489b0cd9938429e1ca": "a70e0ed4ba60a68e4c39a36c0b8668ed",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1f/b6529b9240e9337551087ac468ecdae862ed00": "da88b75b2a12e7435b5fa956e9eabc3c",
".git/objects/73/7db0e1846b75d065357ef0b6e7f2f072c7cb63": "8652ee2092f57e743aa6568c458d2f57",
".git/objects/80/a2e438930131e41966efdee615e5e5526df007": "98af5c7ec2eb2f8255d4da0e9c88fd3c",
".git/objects/8a/e887aea2a43acc24ac62fd2498ab763367f619": "6b71c41285d2e65bfff68417f46d70d9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/9f2d1c97b54c8ce4ae9738fa4e9b6bcfd9a013": "bea49be4ee20b2f20ac20936763e62cd",
".git/objects/21/c9f052c1363db308990bc5af6f5fe8172b65fb": "20ac946899309305b9b0baa1271834fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5d/498cd9bf6a1b3e55f0a27a60ebb066d80f72d3": "0e8c5b20ff960cb93b5bad945bb75d48",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/96/72628927280d0d2809d6cb8d53b5590cb085ef": "e3b88296ca841a03bba78abae4c23730",
".git/objects/d3/8a5cd4dc56621435f17e9cd030a454779bb885": "93a02051eb9015410dd5e03073fb2479",
".git/objects/d4/3e7db1fc1924280ee5abfb2bf0ab0bc4770837": "a8ca419848d5f1e88d37919dd2ce9a11",
".git/objects/ba/29a860acc7e1afe5862c87634826e591cb5cf0": "4a05851665e8b00eb95453113b5fbb05",
".git/objects/b1/10f083f9e05458ad4d855ff2be1a1e6eedbe56": "656c8107f36d69b5d00329cf3a2449bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/d110029c8fbd756fb19ff67702e8f46ef71d8e": "8d49dbbce7a4cc050591700f2a6feb21",
".git/objects/ff/f7e88c851101b5d45b7c5f7d29f8c1a16a9ac9": "571f19d438b61d6b83d97dcd9430b901",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/23/d94cc696b7e9d8d0f2824fa6b49b42d9ea1ef4": "4fad486b5c06697be5d5135481d27671",
".git/objects/85/d72f9dc02ed4ad6b5f25bf2410de147c0c1875": "41820b82ed5e00959aef095b723001c5",
".git/objects/8b/84998bc23baafb134b53b7cdfd26657ce2fbcf": "006811760868783e5b36b274ccfc8f85",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "130c7c0137e64fe1cf9bcad9369197e7",
".git/logs/refs/heads/master": "130c7c0137e64fe1cf9bcad9369197e7",
".git/logs/refs/remotes/origin/master": "95447b215863b9fe0d138daf3aac9954",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "6b12a1650f465e3152b9c22e90ce5eb0",
".git/refs/remotes/origin/master": "6b12a1650f465e3152b9c22e90ce5eb0",
".git/index": "17b711ac7735b29ff87dee23b1b8f557",
".git/COMMIT_EDITMSG": "09ce5215f0ced1632024642f10ddb196",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/NOTICES": "9bf13d7adf4ee9317bb1f1e2440c70aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
