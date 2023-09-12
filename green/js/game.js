// 获取元素
var image1 = document.getElementById('myImage1');
var image2 = document.getElementById('myImage2');
var image3 = document.getElementById('myImage3');
var image4 = document.getElementById('myImage4');
var image5 = document.getElementById('myImage5');
var image6 = document.getElementById('myImage6');
var image7 = document.getElementById('myImage7');
var image8 = document.getElementById('myImage8');
var image9 = document.getElementById('myImage9');
var image10 = document.getElementById('myImage10');
var image11 = document.getElementById('myImage11');
var image12 = document.getElementById('myImage12');
var image13 = document.getElementById('myImage13');
var image14 = document.getElementById('myImage14');
var image15 = document.getElementById('myImage15');
var image16 = document.getElementById('myImage16');
var image17 = document.getElementById('myImage17');
var image18 = document.getElementById('myImage18');
var target = document.getElementById('target');
var targetk = document.getElementById('kitchenBin');
var targeto = document.getElementById('otherBin');
var targeth = document.getElementById('hazardousBin');

// 保存初始位置和偏移量
var initialImage1Offset = null;
var initialImage2Offset = null;

// 拖动开始时设置被拖动元素的数据
image1.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
	initialImage1Offset = event.clientY - image1.offsetTop;
});
image2.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image2.offsetTop;
});
image3.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image3.offsetTop;
});
image4.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image4.offsetTop;
});
image5.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image5.offsetTop;
});
image6.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image6.offsetTop;
});
image7.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image7.offsetTop;
});
image8.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image8.offsetTop;
});
image9.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image9.offsetTop;
});
image10.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image10.offsetTop;
});
image11.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image11.offsetTop;
});
image12.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image12.offsetTop;
});
image13.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image13.offsetTop;
});
image14.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image14.offsetTop;
});
image15.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image15.offsetTop;
});
image16.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image16.offsetTop;
});
image17.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image17.offsetTop;
});
image18.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    initialImage2Offset = event.clientY - image18.offsetTop;
});

// 阻止事件的默认行为
target.addEventListener('dragover', function(event) {
    event.preventDefault();
});
targetk.addEventListener('dragover', function(event) {
    event.preventDefault();
});
targeto.addEventListener('dragover', function(event) {
    event.preventDefault();
});
targeth.addEventListener('dragover', function(event) {
    event.preventDefault();
});

// 放置被拖动元素时触发操作
target.addEventListener('drop', function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');

    // 判断是否正确放置
    if (data === 'myImage1') {
        // 清除图片
		image1.remove();
    } else if (data === 'myImage2') {
        // 清除图片
		image2.remove();
    } else if (data === 'myImage3') {
		// 清除图片
		image3.remove();
    } else if (data === 'myImage4') {
		// 清除图片
		image4.remove();
    } else if (data === 'myImage5') {
		// 清除图片
		image5.remove();
	} else if (data === 'myImage6') {
		// 清除图片
		image6.remove();
	} else if (data === 'myImage7') {
		// 清除图片
		image7.remove();
    } else if (data === 'myImage8') {
		// 清除图片
		image8.remove();
    } else if (data === 'myImage9') {
		// 清除图片
		image9.remove();
    } else if (data === 'myImage10') {
		// 清除图片
		image10.remove();
    } else if (data === 'myImage11') {
		// 清除图片
		image11.remove();
    } else if (data === 'myImage12') {
		// 清除图片
		image12.remove();
    }

  // 回到原位置
    if (initialImage1Offset !== null) {
		image1.style.top = (event.clientY - initialImage1Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image2.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image3.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image4.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image5.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image6.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image7.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image8.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image9.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image10.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image11.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
    if (initialImage2Offset !== null) {
		image12.style.top = (event.clientY - initialImage2Offset) + 'px';
    }
});

targetk.addEventListener('drop', function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
   
    if (data === 'myImage13') {
        // 清除图片
		image13.remove();
    } else if (data === 'myImage14') {
		// 清除图片
		image14.remove();
    } 
  
    // 回到原位置
    if (initialImage1Offset !== null) {
		image13.style.top = (event.clientY - initialImage1Offset) + 'px';
    }
    // 回到原位置
    if (initialImage1Offset !== null) {
		image14.style.top = (event.clientY - initialImage1Offset) + 'px';
    }
});

targeto.addEventListener('drop', function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
   
    if (data === 'myImage15') {
		// 清除图片
		image15.remove();
  } 
  
    // 回到原位置
    if (initialImage1Offset !== null) {
		image15.style.top = (event.clientY - initialImage1Offset) + 'px';
    }
});

targeth.addEventListener('drop', function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
   
    if (data === 'myImage16') {
		// 清除图片
		image16.remove();
    } else if (data === 'myImage17') {
		// 清除图片
		image17.remove();
		window.location.href = 'http://127.0.0.1:8848/green/gameEnd.html';
    } else if (data === 'myImage18') {
		// 清除图片
		image18.remove();
    } 
  
    // 回到原位置
    if (initialImage1Offset !== null) {
		image16.style.top = (event.clientY - initialImage1Offset) + 'px';
    }
    if (initialImage1Offset !== null) {
		image17.style.top = (event.clientY - initialImage1Offset) + 'px';
    }
    if (initialImage1Offset !== null) {
		image18.style.top = (event.clientY - initialImage1Offset) + 'px';
	
    }
});

window.onload = function() {
	var button = document.getElementById('button');
	button.onclick = function() {
		window.location.href = button.getAttribute('href');
	};
};



