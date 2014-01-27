// ユーザID
var USER_ID = 0;

// ↓ローカル実行時
var socket = io.connect('http://localhost');
// ↓Heroku実行時
//var socket = io.connect();