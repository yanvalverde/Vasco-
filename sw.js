self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
// Recebe avisos enviados por um servidor (Web Push), quando existir um.
self.addEventListener('push',function(e){var d={};try{d=e.data?e.data.json():{}}catch(x){d={body:e.data?e.data.text():''}}
e.waitUntil(self.registration.showNotification(d.title||'Vasco da Gama',{body:d.body||'',tag:d.tag||'vasco',icon:'icon-192.png',badge:'icon-192.png',vibrate:[200,100,200]}))});
self.addEventListener('notificationclick',function(e){e.notification.close();
e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){for(var i=0;i<l.length;i++){if('focus' in l[i])return l[i].focus()}return self.clients.openWindow('./')}))});
