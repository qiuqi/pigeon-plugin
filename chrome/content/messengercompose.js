var lockStatus = true;
function testTb(){
	//let pigeonStatus = document.getElementById("button-pigeon");
	//alert($("#button-pigeon").attr("image"));
	if(lockStatus == true){
		$("#button-pigeon").attr("image", "chrome://pigeon/skin/icon/lock_unlocked.png");
		$("#button-pigeon").attr("label", "鸽子密邮没有加密");
		lockStatus = false;
	}else{
		$("#button-pigeon").attr("image", "chrome://pigeon/skin/icon/lock_locked.png");
		$("#button-pigeon").attr("label", "鸽子密邮已经加密");
		lockStatus = true;
	}
}

