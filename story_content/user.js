function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lOfzwKjnrq":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume=0.5
}

