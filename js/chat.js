const userList = document.getElementById('userList');
const chatLog = document.getElementById('chatLog');
const messageInput = document.getElementById('message');
const sendButton = document.querySelector('button[type="submit"]');

// 添加初始用户
addUser('张叁');
addUser('王贰');
addUser('李肆');

function addUser(username) {
	const li = document.createElement('li');
	li.textContent = username;
	userList.appendChild(li);
}

// 模拟聊天记录
addMessage('我', '当时我了解的钣金应该是便宜的');
addMessage('张叁', '虽说这东西看起来很不保险');
addMessage('张叁', '但是它的价格');
addMessage('张叁', '确实让我怀疑人生');
addMessage('张叁', '哈哈哈哈哈哈');
addMessage('张叁', '我记得我们当时那个耳片还挺贵的');
addMessage('张叁', '那么小一个东西');
addMessage('我', '嗯');
addMessage('我', '不是很便宜呢');
addMessage('张叁', '我打算到时候直接给加工商两套方案');
addMessage('张叁', '一个钣金一个铣');
addMessage('张叁', '能钣金估计就省不少');
addMessage('张叁', '他们也是不厚道啊');
addMessage('我', '估计挑贵的给你做');



function addMessage(username, message) {
	const p = document.createElement('p');
	p.innerHTML = `<strong>${username}:</strong> ${message}`;
	chatLog.appendChild(p);
}

// 发送消息
sendButton.addEventListener('click', (event) => {
	event.preventDefault();
	if (messageInput.value) {
		addMessage('我', messageInput.value);
		messageInput.value = '';
	}
});