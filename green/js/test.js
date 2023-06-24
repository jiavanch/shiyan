<script>
        let timerElement = document.querySelector('.timer');
        let questionNumberElements = document.querySelectorAll('.question-number li');
        let nextButton = document.getElementById('nextButton');
        let submitButton = document.getElementById('submitButton');
        let scoreButton = document.getElementById('scoreButton');
        let scoreDetails = document.querySelector('.score-details');
        let currentQuestionIndex = 0;
        let timeRemaining = 30;
        let timer;
        let scores = {}; // 存储每道题的得分，初始化为空对象

        // 题目数据
        const questions = [
            {
                question: '题目1',
                options: ['选项A', '选项B', '选项C'],
                correctAnswer: 0, // 正确选项的索引，从0开始计数
                type: '单选',
                score: 4
            },
            {
                question: '题目2',
                options: ['选项A', '选项B', '选项C', '选项D'],
                correctAnswer: [1, 2], // 正确选项的索引数组
                type: '多选',
                score: 5
            },
            // 更多题目...
        ];

        // 初始化倒计时和题号序列
        function initialize() {
            updateTimer();
            generateQuestionNumbers();
            timer = setInterval(updateTimer, 1000);
        }

        // 更新倒计时
        function updateTimer() {
            timerElement.textContent = timeRemaining;
            timeRemaining--;

            if (timeRemaining < 0) {
                clearInterval(timer);
                showNextQuestion();
            }
        }

        // 生成题号序列
        function generateQuestionNumbers() {
            let questionNumbers = '';

            for (let i = 0; i < questions.length; i++) {
                questionNumbers += `<li>${i + 1}</li>`;
            }

            document.querySelector('.question-number').innerHTML = questionNumbers;
        }

        // 更新题号样式
        function updateQuestionNumber(index) {
            questionNumberElements.forEach((element, i) => {
                element.classList.remove('active-question');
                if (i === index) {
                    element.classList.add('active-question');
                }
            });
        }

        // 显示下一题
        function showNextQuestion() {
            timeRemaining = 30;

            // 记录本题的得分为零
            scores[currentQuestionIndex] = 0;

            currentQuestionIndex++;
            
            if (currentQuestionIndex < questions.length) {
                updateTimer();
                updateQuestionNumber(currentQuestionIndex);
                showQuestion();
            } else {
                clearInterval(timer);
                nextButton.style.display = 'none';
                submitButton.style.display = 'block';
                scoreButton.style.display = 'block';
            }
        }

        // 显示当前题目和选项
        function showQuestion() {
            let currentQuestion = questions[currentQuestionIndex];
            let questionElement = document.querySelector('.question');
            let optionsElement = document.querySelector('.options');

            questionElement.innerHTML = `<h3>题目${currentQuestionIndex + 1}</h3>`;

            let optionsHtml = '';
            for (let i = 0; i < currentQuestion.options.length; i++) {
                optionsHtml += `<li class="option">${currentQuestion.options[i]}</li>`;
            }

            optionsElement.innerHTML = optionsHtml;

            let optionElements = document.querySelectorAll('.option');
            optionElements.forEach((element, index) => {
                element.addEventListener('click', () => {
                    handleAnswer(index);
                });
            });
        }

        // 处理用户答案
        function handleAnswer(selectedIndex) {
            let currentQuestion = questions[currentQuestionIndex];

            if (currentQuestion.type === '单选') {
                // 单选题只有一个正确答案
                if (selectedIndex === currentQuestion.correctAnswer) {
                    scores[currentQuestionIndex] = currentQuestion.score;
                }
            } else if (currentQuestion.type === '多选') {
                let selectedOptions = [];

                let optionElements = document.querySelectorAll('.option');
                optionElements.forEach((element, index) => {
                    if (element.classList.contains('selected')) {
                        selectedOptions.push(index);
                    }
                });

                // 判断用户答案和正确答案是否一致
                if (arrayEquals(selectedOptions, currentQuestion.correctAnswer)) {
                    scores[currentQuestionIndex] = currentQuestion.score;
                }
            }

            // 移除选中状态
            let optionElements = document.querySelectorAll('.option');
            optionElements.forEach((element) => {
                element.classList.remove('selected');
            });

            // 标记用户选择的答案
            optionElements[selectedIndex].classList.add('selected');

            // 禁用选项点击
            optionElements.forEach((element) => {
                element.style.pointerEvents = 'none';
            });

            // 显示下一题按钮
            nextButton.style.display = 'block';
        }

        // 检查两个数组是否相等（顺序不重要）
        function arrayEquals(arr1, arr2) {
            if (arr1.length !== arr2.length) {
                return false;
            }

            let sortedArr1 = arr1.sort();
            let sortedArr2 = arr2.sort();

            for (let i = 0; i < sortedArr1.length; i++) {
                if (sortedArr1[i] !== sortedArr2[i]) {
                    return false;
                }
            }

            return true;
        }

        // 显示得分详情
        function showScoreDetails() {
            let tableBody = scoreDetails.querySelector('tbody');

            questions.forEach((question, index) => {
                let row = document.createElement('tr');
                let questionNumberCell = document.createElement('td');
                let userAnswerCell = document.createElement('td');
                let correctAnswerCell = document.createElement('td');
                let analysisCell = document.createElement('td');

                questionNumberCell.textContent = index + 1;

                if (question.type === '单选') {
                    userAnswerCell.textContent = question.options[scores[index] === question.score ? question.correctAnswer : -1];
                } else if (question.type === '多选') {
                    let userAnswerOptions = [];

                    let optionElements = document.querySelectorAll('.option');
                    optionElements.forEach((element, i) => {
                        if (element.classList.contains('selected')) {
                            userAnswerOptions.push(question.options[i]);
                        }
                    });

                    userAnswerCell.textContent = userAnswerOptions.join(', ');
                }

                correctAnswerCell.textContent = question.options[question.correctAnswer];
                analysisCell.textContent = '题目解析';

                row.appendChild(questionNumberCell);
                row.appendChild(userAnswerCell);
                row.appendChild(correctAnswerCell);
                row.appendChild(analysisCell);

                tableBody.appendChild(row);
            });

            scoreDetails.style.display = 'block';
        }

        // 绑定下一题按钮点击事件
        nextButton.addEventListener('click', showNextQuestion);

        // 绑定提交按钮点击事件
        submitButton.addEventListener('click', showScoreDetails);

        // 初始化页面
        initialize();
        showQuestion();
    </script>