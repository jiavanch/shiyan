// 定义题目数组
const questions = [
	{ type: '单选题', question: '1.包了口香糖的纸巾属于哪一类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'A 其他垃圾',analysis:'包了口香糖、擦了鼻涕的纸巾都是其他垃圾。'},
	{ type: '单选题', question: '2.保鲜膜属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'A 其他垃圾',analysis:'除了可回收垃圾、有害垃圾、厨余垃圾以外的垃圾都属于其他垃圾，包括餐盒、餐巾纸、湿纸巾、塑料袋、 食品包装袋等。' },
	{ type: '单选题', question: '3.变质的香肠属于哪一类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'D 厨余垃圾',analysis:'香肠是易腐烂的生物质废弃物，因此属于厨余垃圾。' },
	{ type: '单选题', question: '4.菜刀属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'C 可回收物',analysis:'可回收物分为纸类、塑料橡胶类、玻璃类、金属类等，食品罐盒、剪刀、金属办公用品、刀片等都属于金属类，因此属于可回收物。' },
	{ type: '单选题', question: '5.抽完烟的烟蒂是什么垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'A 其他垃圾',analysis:'烟蒂这样既没有回收利用价值、也不容易腐烂的垃圾，应该投放到其他垃圾桶中。' },
	{ type: '单选题', question: '6.掉在地上的树叶是什么垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'D 厨余垃圾',analysis:'树叶是容易腐烂的生物质废弃物，属于厨余垃圾。' },
	{ type: '单选题', question: '7.废电池乱丢对人体可能造成____? ', choices: ['A 镉中毒', 'B 氰中毒', 'C 碳中毒','D 氟中毒'], answer: 'A 镉中毒',analysis:'废旧电池主要有毒物质：铅，汞，镉。世界卫生组织国际癌症研究机构公布的致癌物清单初步整理参考，铅在2B类致癌物清单中。汞常温下即可蒸发，汞蒸气和汞的化合物多有剧毒（慢性）。镉会对呼吸道产生刺激，长期暴露会造成嗅觉丧失症、牙龈黄斑或渐成黄圈，镉化合物不易被肠道吸收，但可经呼吸被体内吸收，积存于肝或肾脏造成危害，尤以对肾脏损害最为明显。还可导致骨质疏松和软化。'},
	{ type: '单选题', question: '8.废弃的钥匙属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'C 可回收物',analysis:'钥匙是由合金制成，属于可回收物。'},
	{ type: '单选题', question: '9.过期的化妆品是什么垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'B 有害垃圾',analysis:'过期化妆品里有对人体和自然环境有危害的物质。'},
	{ type: '单选题', question: '10.包装药片的铝箔属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'B 有害垃圾',analysis:'药品因为容易受潮，应该连包装进行投放，不要把单独的药片洒落在有害容器中。' },
	{ type: '单选题', question: '11.坏掉的电脑属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'C 可回收物' ,analysis:'坏掉的电脑属于电子废弃物，它在制造时采用了众多材料及资源，其中就包括有色金属、塑料、橡胶、玻璃等可供回收的有用资源。'},
	{ type: '单选题', question: '12.灰色塑料袋属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'A 其他垃圾',analysis:'灰色塑料袋本身就是废弃塑料加工而成，不具备再次回收利用的价值，属于其他垃圾。' },
	{ type: '单选题', question: '13.鸡毛属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'A 其他垃圾' ,analysis:'因为鸡毛不容易腐烂变质，所以属于其他垃圾。'},
	{ type: '单选题', question: '14.碱性电池属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'A 其他垃圾' ,analysis:'现在市面主流的干电池，基本都是碱性电池。主要成分为：锌、二氧化锰、氢氧化钾。正规电池厂家都会明确告知碱性电池可以丢弃。'},
	{ type: '单选题', question: '15.胶卷属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'B 有害垃圾',analysis:'胶片显影技术使用的材料，感光胶片都属于有害垃圾。' },
	{ type: '单选题', question: '16.旧凉席属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'A 其他垃圾',analysis:'因为凉席通常主要由竹、藤、亚麻等制成，是除有害垃圾，可回收物，厨余垃圾以外的生活废弃物。' },
	{ type: '单选题', question: '17.旧图书属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'C 可回收物',analysis:'制成图书的纸张，能够通过处理进行再生循环。此外，废旧的报纸、杂志、以及广告单及其它干净的纸类等，都属可回收物。' },
	{ type: '单选题', question: '18.口香糖属于哪一类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'A 其他垃圾',analysis:'口香糖虽然是食物，却不是直接食用的那种，而是属于胶制品，但是天然塑胶在经过处理之后，加上各种调味剂及甘油酯做成的，由此属于其他垃圾。'  },
	{ type: '单选题', question: '19.哪一类可进行资源再生利用？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'C 可回收物' ,analysis:'可回收物是垃圾资源化的主力军。'},
	{ type: '单选题', question: '20.塑料筷子属于哪类垃圾？', choices: ['A 其他垃圾', 'B 有害垃圾', 'C 可回收物','D 厨余垃圾'], answer: 'C 可回收物' ,analysis:'塑料筷子是由塑料制成，属于可回收物。' },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];

function renderQuestion() {
	const questionContainer = document.getElementById('questions');
	const sequenceContainer = document.getElementById('question-sequence');
	const questionData = questions[currentQuestionIndex];

	const questionElement = document.createElement('div');
	questionElement.classList.add('question');
	questionElement.innerHTML = `
	<h2 class="question-type">${questionData.type}</h2>
	<p class="question-content">${questionData.question}</p>
	`;

	if (questionData.type === '单选题') {
		const choicesElement = document.createElement('ul');
		choicesElement.classList.add('choices');
		questionData.choices.forEach(choice => {
			const choiceElement = document.createElement('li');
			choiceElement.textContent = choice;
			
		  
			choiceElement.addEventListener('click', function() {
				handleAnswer(choice);
			});
			choicesElement.appendChild(choiceElement);
		});

		questionElement.appendChild(choicesElement);
	}

	questionContainer.innerHTML = '';
	questionContainer.appendChild(questionElement);
	
	sequenceContainer.innerHTML = generateSequenceHTML();
}

// 题号序列
function generateSequenceHTML() {
    let sequenceHTML = '';
    for (let i = 0; i < questions.length; i++) {
        if (i === currentQuestionIndex) {
            sequenceHTML += `<span class="current">${i + 1}</span>`;
        } else if (i < currentQuestionIndex) {
            sequenceHTML += `<span class="answered">${i + 1}</span>`;
        } else {
            sequenceHTML += `<span>${i + 1}</span>`;
        }
    }
    return sequenceHTML;
}
	
	
// 倒计时计数器开始
let timer = 0;
let seconds = 0;
let intervalId; // 声明全局变量来存储计时器 ID

function startTimer(duration, display) {
    timer = duration;

    intervalId = setInterval(function () { // 将 intervalId 赋值给全局变量
		seconds = timer % 60;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		display.textContent = `剩余时间: ${seconds} 秒`;

		if (--timer < 0) {
		    clearInterval(intervalId);
		    handleAnswer(null);
		}
    }, 1000);
}

function handleAnswer(answer) {
	const questionData = questions[currentQuestionIndex];
	  
	// 将用户选择的答案存储到 selectedAnswers 数组中
	if (selectedAnswers.length < questions.length) {
		selectedAnswers.push(answer);
	}

	if (questionData.answer === answer) {
		score += 5;
	}
	

	currentQuestionIndex++;
	
	if (currentQuestionIndex < questions.length) {
		clearInterval(intervalId); // 清除当前计时器
		renderQuestion();
		startTimer(timerDuration, timerDisplay); // 重新开始计时器
	} else {
		showResult();
	}
	
	if (currentQuestionIndex >= questions.length) {
		// 所有题目已答完
		const lastSequenceElement = document.getElementById('question-sequence').lastElementChild;
		lastSequenceElement.classList.add('answered');
		lastSequenceElement.style.transform = 'scale(1)';
		// return;
		
		// 显示答题结果在题目序列上
		const sequenceElements = document.getElementById('question-sequence').children;
		for (let i = 0; i < sequenceElements.length; i++) {
			const sequenceElement = sequenceElements[i];
			const iconElement = document.createElement('i');
			iconElement.style.fontSize = '15px';
			iconElement.style.marginLeft = '4px';
			
			if (selectedAnswers[i] === questions[i].answer) {
				iconElement.innerText = '✓';
				iconElement.style.color = 'green';
			} else {
				iconElement.innerText = '✗';
				iconElement.style.color = 'red';
			}
			
			sequenceElement.appendChild(iconElement);
		}
	}
  
}
// 倒计时计数器结束

// 提交答案
function showResult() {
	
	const questionContainer = document.getElementById('questions');
	const resultElement = document.createElement('div');
	resultElement.innerHTML = `
		<h2 class="score">总得分</h2>
		<p class="score-f1">${score} 分</p>
	`;
	
	questionContainer.innerHTML = '';
	questionContainer.appendChild(resultElement);
	timerDisplay.style.display = 'none'; // 隐藏计数器
	
	// 创建包裹题目内容的固定大小的div，并设置样式
	const scrollableContent = document.createElement('div');
	scrollableContent.style.overflow = 'auto';
	scrollableContent.style.maxHeight = '400px'; // 设置最大高度为 400px
	
	//查看详情
	const detailButton = document.createElement('button');
	detailButton.innerText = '查看详情';
	detailButton.addEventListener('click', () => {
		const detailsContainer = document.createElement('div');
		detailsContainer.className = 'details-container';

		questions.forEach((questionData, index) => {
			const questionElement = document.createElement('div');
			questionElement.classList.add('question-detail');

			const questionNumber = document.createElement('p');
			// questionNumber.textContent = `题目 ${index + 1}:`;
			questionNumber.classList.add('question-number');

			const questionContent = document.createElement('p');
			questionContent.textContent = questionData.question;
			questionContent.classList.add('question-content');

			const choicesList = document.createElement('ul');
			choicesList.classList.add('choices-list');
			questionData.choices.forEach(choice => {
				const choiceItem = document.createElement('li');
				choiceItem.textContent = choice;

				if (choice === questionData.answer) {
					const answerIcon = document.createElement('i');
					answerIcon.innerText = '✓';
					answerIcon.style.color = 'green';
					choiceItem.appendChild(answerIcon);

					if (selectedAnswers[index] === choice) {
						choiceItem.style.color = 'green';
					}
				} else if (choice === selectedAnswers[index]) {
					const selectedIcon = document.createElement('i');
					selectedIcon.innerText = '✓';
					selectedIcon.style.color = 'red';
					choiceItem.appendChild(selectedIcon);
				}

				choicesList.appendChild(choiceItem);
			});

			const analysis = document.createElement('p');
			analysis.textContent = `解析：${questionData.analysis}`;
			analysis.classList.add('question-analysis');

			questionElement.appendChild(questionNumber);
			questionElement.appendChild(questionContent);
			questionElement.appendChild(choicesList);
			questionElement.appendChild(analysis);

			detailsContainer.appendChild(questionElement);
		});

		// 将题目内容添加到固定大小的div中
		scrollableContent.appendChild(detailsContainer);
		questionContainer.appendChild(scrollableContent);
		detailButton.style.display = 'none'; // 隐藏查看详情按钮
		resultElement.style.display = 'none'; // 隐藏总得分
		

	});
	
	// 按钮样式
	detailButton.style.display = 'block';
	detailButton.style.margin = '40px auto';
	detailButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
	detailButton.style.color = 'black';
	detailButton.style.border = 'none';
	detailButton.style.width = '100px';
	detailButton.style.height = '35px';     
	detailButton.style.borderRadius = '5px';
	detailButton.style.fontSize = '15px'; 
	detailButton.style.fontWeight = 'bold'; 
	detailButton.style.textDecoration = 'underline';
	
	// 将按钮添加到结果元素中
	resultElement.appendChild(detailButton);
}

// 初始化页面
renderQuestion();

// 倒计时 15 秒
const timerDisplay = document.getElementById('timer');
const timerDuration = 15;
startTimer(timerDuration, timerDisplay);

// 提交按钮点击事件
// const submitBtn = document.getElementById('submitBtn');
// submitBtn.addEventListener('click', () => {
//   clearInterval(intervalId);
//   handleAnswer(null);
// });

window.onload = function() {
	var button = document.getElementById('button');
	button.onclick = function() {
		window.location.href = button.getAttribute('href');
	};
};



