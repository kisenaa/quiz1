if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/quiz1/sw.js', { scope: '/quiz1/' })})}